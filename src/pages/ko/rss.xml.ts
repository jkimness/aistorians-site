import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { essays, slugOf, plainTitle } from '../../lib/essays';
import { essayPath } from '../../i18n';
import { COPY } from '../../i18n/copy';
export async function GET(context: APIContext) {
  const list = await essays('ko');
  return rss({
    title: 'ai storians (한국어)',
    description: COPY.ko.meta.writing.description,
    site: context.site!,
    items: list.map((e) => ({ title: plainTitle(e.data), description: e.data.deck, pubDate: e.data.date, link: essayPath('ko', slugOf(e)) })),
    trailingSlash: false, // site uses no trailing slash; with it the item links 404
    customData: '<language>ko</language>',
  });
}
