// Sosyal paylaşım görseli (1200x630): node scripts/og.mjs
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
const c = JSON.parse(readFileSync('src/data/company.json', 'utf8'));
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#f7f5ef"/>
  <rect y="560" width="1200" height="70" fill="#1f2326"/>
  ${Array.from({ length: 12 }, (_, i) => `<rect x="${i * 110 + 20}" y="592" width="60" height="6" fill="#9aa3ad"/>`).join('')}
  <text x="70" y="150" font-family="Arial Narrow, Arial" font-weight="700" font-size="44" fill="#595e62" letter-spacing="4">İZMİR MERKEZLİ</text>
  <text x="66" y="250" font-family="Arial Narrow, Arial" font-weight="700" font-size="96" fill="#1f2326">Frigorifik nakliye</text>
  <text x="68" y="330" font-family="Arial Narrow, Arial" font-weight="700" font-size="58" fill="#1c3150">donuk, soğuk ve kuru gıda</text>
  <rect x="70" y="390" width="470" height="110" rx="10" fill="#1c3150"/>
  <rect x="80" y="400" width="450" height="90" rx="6" fill="none" stroke="#fff" stroke-width="4"/>
  <text x="305" y="462" text-anchor="middle" font-family="Arial Narrow, Arial" font-weight="700" font-size="48" fill="#fff">ATA TAŞIMACILIK</text>
  <text x="580" y="462" font-family="Arial Narrow, Arial" font-weight="700" font-size="50" fill="#1f2326">${c.phone.display}</text>
</svg>`;
await sharp(Buffer.from(svg)).png().toFile('public/og-default.png');
console.log('public/og-default.png yazıldı');
