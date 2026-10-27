import { getCollection, type CollectionEntry } from 'astro:content';
import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n';

export type Essay = CollectionEntry<'essays'>;

/** "en/be-a-host-in-the-ai-era" -> "be-a-host-in-the-ai-era" */
export const slugOf = (e: { id: string }) => e.id.split('/').pop()!;

/** Every published essay in one language, newest first. Same day: the later episode first. */
export async function essays(lang: Lang) {
  const all = await getCollection('essays', (e) => e.data.lang === lang && !e.data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf() || (b.data.ep ?? 0) - (a.data.ep ?? 0));
}

/** The title as plain text: "ai storians ep.1 | We are all historians..." for episodes. */
export const plainTitle = (d: { title: string; ep?: number }) =>
  d.ep != null ? `ai storians ep.${d.ep} | ${d.title}` : d.title;

/** One row of the Writing archive (an essay or a daily thought). */
export interface ListItem { href: string; title: string; ep?: number; deck?: string; date: Date; cover?: ImageMetadata; coverAlt?: string; label?: string; seed: string }

/** the same file name in the other language folder */
export async function pairOf(e: Essay) {
  const other = e.data.lang === 'en' ? 'ko' : 'en';
  const all = await getCollection('essays', (x) => x.data.lang === other && !x.data.draft);
  return all.find((x) => slugOf(x) === slugOf(e));
}

/** rough reading time: 230 wpm for English, 500 characters a minute for Korean */
export function readingMinutes(body: string | undefined, lang: Lang) {
  const text = (body ?? '').replace(/!\[[^\]]*\]\([^)]*\)/g, '').replace(/[#>*_`\-]/g, ' ');
  if (lang === 'ko') return Math.max(1, Math.round(text.replace(/\s+/g, '').length / 500));
  return Math.max(1, Math.round(text.split(/\s+/).filter(Boolean).length / 230));
}
