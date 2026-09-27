// Derleme sonrası SEO kontrolü: her sayfada tek <h1>, canonical, benzersiz başlık ve açıklama.
// STRICT=1 iken company.json içindeki eksik bilgiler de derlemeyi durdurur (yayın koruması).
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const company = JSON.parse(readFileSync('src/data/company.json', 'utf8'));
const pages = [];
const walk = (dir) => {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f.endsWith('.html')) pages.push(p);
  }
};
walk('dist');

const errors = [];
const warnings = [];
const titles = new Map();
const descs = new Map();
const decode = (s) => s.replace(/&#39;/g, "'").replace(/&amp;/g, '&').replace(/&quot;/g, '"');

for (const p of pages) {
  const html = readFileSync(p, 'utf8');
  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '');
  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  if (!title) errors.push(`${p}: <title> yok`);
  if (!desc) errors.push(`${p}: açıklama yok`);
  if (h1 !== 1) errors.push(`${p}: ${h1} adet <h1>`);
  if (!html.includes('rel="canonical"')) errors.push(`${p}: canonical yok`);
  if (/\bundefined\b|\bNaN\b/.test(html.replace(/<script[\s\S]*?<\/script>/g, ''))) errors.push(`${p}: "undefined" veya "NaN" içeriyor`);
  if ([...title].length > 65) warnings.push(`${p}: başlık ${[...title].length} karakter`);
  if ([...desc].length > 165 || [...desc].length < 70) warnings.push(`${p}: açıklama ${[...desc].length} karakter`);
  titles.set(title, [...(titles.get(title) ?? []), p]);
  descs.set(desc, [...(descs.get(desc) ?? []), p]);
}
for (const [t, ps] of titles) if (ps.length > 1) errors.push(`Aynı başlık: "${t}" → ${ps.join(', ')}`);
for (const [d, ps] of descs) if (ps.length > 1) errors.push(`Aynı açıklama → ${ps.join(', ')}`);

if (process.env.STRICT && company._eksik.length) {
  errors.push(`company.json içinde eksik bilgi var, yayın durduruldu:\n  - ${company._eksik.join('\n  - ')}`);
}

console.log(`SEO kontrolü: ${pages.length} sayfa`);
warnings.forEach((w) => console.warn(`  uyarı: ${w}`));
if (errors.length) {
  errors.forEach((e) => console.error(`  HATA: ${e}`));
  process.exit(1);
}
console.log('  tamam');
