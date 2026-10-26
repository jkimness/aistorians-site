import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { essays, slugOf } from '../../lib/essays';
import { essayPath } from '../../i18n';
export async function GET(context: APIContext) {
  const list = await essays('ko');
  return rss({
    title: 'ai storians (한국어)',
    description: 'AI 를 만들지 않는 99.9% 에게, AI 가 무슨 뜻인지 번역한다.',
    site: context.site!,
    items: list.map((e) => ({ title: e.data.title, description: e.data.deck, pubDate: e.data.date, link: essayPath('ko', slugOf(e)) })),
    customData: '<language>ko</language>',
  });
}
