// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkBreaks from 'remark-breaks';
import rehypeFigure from './src/lib/rehype-figure.mjs';
import fs from 'node:fs';

// site.config.json: koLive false = English only (Korean pages are not published, see postbuild).
const siteConfig = JSON.parse(fs.readFileSync(new URL('./site.config.json', import.meta.url), 'utf8'));
const isKo = (page) => /^\/ko(\/|$)/.test(new URL(page).pathname);

export default defineConfig({
  // www is the live canonical host today (LinkedIn and Substack links point at it)
  site: 'https://www.aistorians.com',
  // keep the exact Squarespace URLs (/ai-storians/<slug>, no trailing slash)
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap({ filter: (page) => !page.includes('contact-thanks') && !page.endsWith('/404') && (siteConfig.koLive || !isKo(page)) })],
  markdown: {
    remarkPlugins: [remarkBreaks],
    rehypePlugins: [rehypeFigure],
  },
  image: { layout: 'constrained' },
});
