// schema.org JSON-LD üreticileri. Boş alanlar çıktıya hiç girmez.
import { company, routes, services, servicePath, abs } from './site';
import type { Faq } from '../data/services';

type Json = Record<string, unknown>;

export const businessId = abs('/#firma');

function compact<T extends Json>(obj: T): T {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== '' && v !== undefined && v !== null && !(Array.isArray(v) && v.length === 0)),
  ) as T;
}

export function localBusiness(): Json {
  const a = company.address;
  return compact({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': businessId,
    name: company.name,
    legalName: company.legalName,
    url: abs('/'),
    telephone: company.phone.e164,
    email: company.email,
    image: abs('/og-default.png'),
    logo: abs('/favicon.svg'),
    foundingDate: company.founded ? String(company.founded) : '',
    priceRange: '₺₺',
    address: compact({
      '@type': 'PostalAddress',
      streetAddress: a.street,
      addressLocality: a.district,
      addressRegion: a.city,
      postalCode: a.postalCode,
      addressCountry: a.country,
    }),
    geo: { '@type': 'GeoCoordinates', latitude: company.geo.lat, longitude: company.geo.lng },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: company.hours.days,
      opens: company.hours.opens,
      closes: company.hours.closes,
    },
    areaServed: [{ '@type': 'City', name: 'İzmir' }, ...routes.map((r) => ({ '@type': 'City', name: r.city }))],
    sameAs: company.gbp ? [company.gbp] : [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Hizmetler',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: compact({
          '@type': 'Service',
          name: s.h1,
          description: s.summary,
          url: abs(servicePath(s)),
        }),
      })),
    },
  });
}

export function service(opts: { name: string; description: string; path: string; areas: string[]; serviceType: string }): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: abs(opts.path),
    provider: { '@id': businessId },
    areaServed: opts.areas.map((name) => ({ '@type': 'City', name })),
  };
}

export function faqPage(faq: Faq[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbs(items: { name: string; path: string }[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}
