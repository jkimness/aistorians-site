import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { essays, slugOf } from '../lib/essays';
import { essayPath } from '../i18n';
export async function GET(context: APIContext) {
  const list = await essays('en');
  return rss({
    title: 'ai storians',
    description: "Essays on what AI means for the 99.9 percent of us who will never build it.",
    site: context.site!,
    items: list.map((e) => ({ title: e.data.title, description: e.data.deck, pubDate: e.data.date, link: essayPath('en', slugOf(e)) })),
    customData: '<language>en</language>',
  });
}
