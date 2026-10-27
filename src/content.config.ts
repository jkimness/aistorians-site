import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One markdown file per essay per language.
//   src/content/essays/en/<slug>.md  ->  /ai-storians/<slug>
//   src/content/essays/ko/<slug>.md  ->  /ko/essays/<slug>
// Same file name in both folders = the KR/EN pair (language toggle + hreflang).
// No series and no seasons: every essay is listed by date, newest first.
// An ai storians episode sets `ep`, and only its title shows it ("ai storians ep.1").
const essays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/essays' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      deck: z.string().default(''),            // one-line summary, also the meta description
      date: z.coerce.date(),
      lang: z.enum(['en', 'ko']),
      ep: z.number().int().positive().optional(), // ai storians episode number, shown in the title only
      cover: image().optional(),               // lead image; a drawn cover is used when absent
      coverAlt: z.string().default(''),
      source: z.string().optional(),           // where the text came from (provenance, not shown)
      draft: z.boolean().default(false),
    }),
});

// Daily thoughts: short notes. EN only for now (/daily-thought/<slug>).
const thoughts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/thoughts' }),
  schema: z.object({
    title: z.string(),
    deck: z.string().default(''),
    date: z.coerce.date(),
    lang: z.enum(['en', 'ko']).default('en'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { essays, thoughts };
