// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkBreaks from 'remark-breaks';
import rehypeFigure from './src/lib/rehype-figure.mjs';

export default defineConfig({
  // www is the live canonical host today (LinkedIn and Substack links point at it)
  site: 'https://www.aistorians.com',
  // keep the exact Squarespace URLs (/ai-storians/<slug>, no trailing slash)
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkBreaks],
    rehypePlugins: [rehypeFigure],
  },
  image: { layout: 'constrained' },
});
