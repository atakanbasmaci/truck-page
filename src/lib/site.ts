import company from '../data/company.json';
import { routes, type Route } from '../data/routes';
import { services, type Service } from '../data/services';

export { company, routes, services };

export const isPreview = company._eksik.length > 0;

export const telHref = `tel:${company.phone.e164}`;

export const defaultWaMessage = 'Merhaba, nakliye için fiyat almak istiyorum.';

export function waHref(message: string = defaultWaMessage): string {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function routePath(r: Route): string {
  return `/izmir-${r.slug}-frigorifik-nakliye/`;
}

export function servicePath(s: Service): string {
  return `/hizmetler/${s.slug}/`;
}

export function abs(path: string): string {
  return new URL(path, company.site).href;
}

/**
 * Başlıklarda her kelimenin ilk harfini büyütür (Türkçe İ/I kurallarına göre),
 * kelimenin geri kalanına dokunmaz — kısaltmaları (KVKK) ve zaten doğru
 * yazılmış özel adları (İzmir, ATA) bozmadan başlık görünümü verir.
 */
export function titleCase(s: string): string {
  return s.replace(/(^|\s)(\S)/g, (_, sep: string, ch: string) => sep + ch.toLocaleUpperCase('tr-TR'));
}

function distance(a: Route, b: Route): number {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * Math.asin(Math.sqrt(h));
}

/** Coğrafi olarak en yakın güzergahlar */
export function nearby(r: Route, n = 3): Route[] {
  return routes
    .filter((o) => o.slug !== r.slug)
    .sort((a, b) => distance(r, a) - distance(r, b))
    .slice(0, n);
}

export const routesByKm = [...routes].sort((a, b) => a.km - b.km);
