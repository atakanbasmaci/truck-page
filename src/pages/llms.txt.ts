import type { APIRoute } from 'astro';
import { company, routes, services, routePath, servicePath, abs } from '../lib/site';

// llms.txt: yapay zeka asistanlarının (ChatGPT, Claude, Perplexity, Gemini vb.)
// siteyi hızlıca özetleyip doğru alıntılaması için düz metin özet.
// Bkz. llmstxt.org — resmi bir standart değil ama yaygın kabul görüyor.
// company.json değiştikçe bu sayfa da otomatik güncellenir.

export const GET: APIRoute = () => {
  const a = company.address;
  const address = [a.street, a.district, a.city].filter(Boolean).join(', ');

  const basics = [
    `- Unvan: ${company.legalName}`,
    `- Merkez: ${address}`,
    `- Telefon: ${company.phone.display}`,
    `- WhatsApp: +${company.whatsapp}`,
    `- Web sitesi: ${company.site}`,
    ...(company.founded ? [`- Kuruluş yılı: ${company.founded}`] : []),
    `- Çalışma saatleri: ${company.hours.label}`,
    `- Filo: ${company.fleet.count} frigorifik kamyon`,
    `- Sıcaklık aralığı: ${company.fleet.tempRange}`,
    `- Belgeler: ${company.documents.join(', ')}`,
  ];

  const lines = [
    `# ${company.name}`,
    '',
    `> İzmir merkezli frigorifik nakliye firması. Frigorifik kamyonlarla donuk, soğuk ve kuru gıda taşımacılığı yapar. İzmir şehir içinde yoğun çalışır; ayrıca İzmir'den ${routes.length} ile ve bu illerden İzmir'e komple ve parsiyel sevkiyat yapar.`,
    '',
    '## Temel bilgiler',
    '',
    ...basics,
    '',
    '## Hizmetler',
    '',
    ...services.map((s) => `- [${s.h1}](${abs(servicePath(s))}): ${s.summary}`),
    '',
    '## İzmir içi',
    '',
    `- [İzmir içi frigorifik nakliye](${abs('/izmir-ici-frigorifik-nakliye/')}): İzmir'in tüm ilçelerine şehir içi taşıma.`,
    '',
    '## Hizmet verilen iller (İzmir merkezli, iki yönlü)',
    '',
    ...routes.map((r) => `- [İzmir – ${r.city}](${abs(routePath(r))})`),
    '',
    '## Diğer sayfalar',
    '',
    `- [Hakkımızda](${abs('/hakkimizda/')})`,
    `- [İletişim](${abs('/iletisim/')})`,
    `- [Tüm güzergahlar](${abs('/guzergahlar/')})`,
    `- [Tüm hizmetler](${abs('/hizmetler/')})`,
  ];

  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
