import type { APIRoute } from 'astro';
import { abs } from '../lib/site';

// Arama motorlarına ve yapay zeka motorlarına (ChatGPT, Perplexity, Google AI
// Overviews, Claude) açıkça izin veriyoruz — hepsi zaten "User-agent: *" ile
// kapsanır, adları tek tek yazmak niyeti nettleştirir ve bazı GEO denetim
// araçları bunu arar.
const aiBots = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'Google-Extended',
  'PerplexityBot',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'Applebot-Extended',
  'CCBot',
  'Bingbot',
];

export const GET: APIRoute = () => {
  const lines = [
    'User-agent: *',
    'Allow: /',
    '',
    ...aiBots.flatMap((bot) => [`User-agent: ${bot}`, 'Allow: /', '']),
    `Sitemap: ${abs('/sitemap-index.xml')}`,
    '',
  ];
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
