// Sosyal paylaşım görseli (1200x630): node scripts/og.mjs
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
const c = JSON.parse(readFileSync('src/data/company.json', 'utf8'));
const routes = readFileSync('src/data/routes.ts', 'utf8').match(/slug:\s*'/g)?.length ?? 0;
const font = 'Arial, Helvetica, sans-serif';
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#1c3150"/>
  <text x="80" y="150" font-family="${font}" font-weight="700" font-size="44" fill="#ffffff" letter-spacing="2">ATA TAŞIMACILIK</text>
  <text x="80" y="310" font-family="${font}" font-weight="700" font-size="96" fill="#ffffff">İzmir Nakliye</text>
  <text x="80" y="415" font-family="${font}" font-weight="700" font-size="72" fill="#c9d4e3">Frigorifik Taşıma</text>
  <text x="80" y="500" font-family="${font}" font-weight="400" font-size="36" fill="#c9d4e3">Donuk, soğuk ve kuru gıda · İzmir ve ${routes} il</text>
  <text x="80" y="580" font-family="${font}" font-weight="700" font-size="48" fill="#ffffff">${c.phone.display}</text>
</svg>`;
await sharp(Buffer.from(svg)).png().toFile('public/og-default.png');
console.log('public/og-default.png yazıldı');
