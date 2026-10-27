import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { essays, slugOf, plainTitle } from '../lib/essays';
import { essayPath } from '../i18n';
import { COPY } from '../i18n/copy';
export async function GET(context: APIContext) {
  const list = await essays('en');
  return rss({
    title: 'ai storians',
    description: COPY.en.meta.writing.description,
    site: context.site!,
    items: list.map((e) => ({ title: plainTitle(e.data), description: e.data.deck, pubDate: e.data.date, link: essayPath('en', slugOf(e)) })),
    customData: '<language>en</language>',
  });
}
