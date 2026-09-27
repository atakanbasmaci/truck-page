import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import company from './src/data/company.json';

export default defineConfig({
  site: company.site,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
