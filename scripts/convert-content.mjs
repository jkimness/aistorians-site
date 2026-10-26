// One-time migration: Squarespace JSON (EN) + vault Brunch finals (KO) -> Astro markdown.
// Body text is copied verbatim (voice lock). Only markup is converted.
import fs from 'node:fs';
import path from 'node:path';
import TurndownService from 'turndown';

const UP = '/mnt/user-data/uploads/JK Obsidian/Aistorians';
const BACKUP = `${UP}/03 Site/backup 2026-10`;
const GFX = `${UP}/05 Graphics`;
const KR = `${UP}/01 Essays/KR 발행 최종본`;
const OUT = path.resolve('src/content');
const log = [];

const kstDate = (ms) => new Date(ms + 9 * 3600e3).toISOString().slice(0, 10);
const yamlStr = (s) => JSON.stringify(s ?? '');

// ---------- EN ----------
const S1 = {
  'we-are-all-historians-of-the-ai-age-ai-storians': 1, 'be-a-messenger': 2, 'be-a-host-in-the-ai-era': 3,
  'create-a-tradition': 4, 'so-have-a-good-past': 5, 'press-record': 6, 'own-the-road': 7,
  'be-the-one-who-can-say-stop': 8, 'be-a-storyteller': 9, 'rule-the-ai-era': 10,
};
// deck fallbacks from Content & Copy v1 (copy v2 section 7-3)
const DECK_FALLBACK = {
  'we-are-all-historians-of-the-ai-age-ai-storians': 'The most futuristic technology ever built is made, one hundred percent, of the past.',
  'be-a-messenger': "One farewell email erased 200 billion dollars from Google's market cap. Information is cheap. The messenger is the message.",
};
// Squarespace image basename -> vault graphic, per essay
const EN_IMG = {
  'be-a-host-in-the-ai-era': { '01.png': 'brunch-ep03-host/01.png', '02.png': 'brunch-ep03-host/02.png', '03.png': 'brunch-ep03-host/03.png' },
  'be-a-storyteller': { '00_cover_brunch.png': 'brunch-ep09-storyteller/00_cover_brunch.png', '01_saving_mr_banks.png': 'brunch-ep09-storyteller/01_saving_mr_banks.png', '03_odysseus_tells.png': 'brunch-ep09-storyteller/03_odysseus_tells.png', '04_yojeonbeop.png': 'brunch-ep09-storyteller/04_yojeonbeop.png', '05_en.png': 'brunch-ep09-storyteller/05_prompt_story_en.png', '06_en.png': 'brunch-ep09-storyteller/06_connector_en.png' },
  'be-the-one-who-can-say-stop': { '01_cover_brunch.png': 'brunch-stop-ep/01_cover_brunch.png', '02_cnbc_muse.png': 'brunch-stop-ep/02_cnbc_muse.png', '03_otis_1854.png': 'brunch-stop-ep/03_otis_1854.png', '04_bottleneck_en.png': 'brunch-stop-ep/04_bottleneck_en.png', '05_three_eyes_en.png': 'brunch-stop-ep/05_three_eyes_en.png' },
  'own-the-road': { '01_slack_teams.png': 'brunch-ep07-platform/01_slack_teams.png' },
  'press-record': { '01.png': 'brunch-ep06-past-and-story/01.png', '02.png': 'brunch-ep06-past-and-story/02.png' },
  'rule-the-ai-era': { '00_cover_brunch.png': 'brunch-ep10-epilogue/00_cover_brunch.png', '01_karpathy_funnel_en.png': 'brunch-ep10-epilogue/01_karpathy_funnel_en.png', '02_karpathy_x_post.png': 'brunch-ep10-epilogue/02_karpathy_x_post.png' },
  'so-have-a-good-past': Object.fromEntries(['01', '02', '03', '04', '05', '06'].map((n) => [`${n}.png`, `brunch-ep05-good-past/${n}.png`])),
  'be-a-messenger': { '__cover__': 'brunch-ep1/thumbnail-messenger-is-the-message.png' },
};

function copyImg(lang, slug, rel) {
  const src = path.join(GFX, rel);
  if (!fs.existsSync(src)) return null;
  const dir = path.join(OUT, 'essays', lang, 'images', slug);
  fs.mkdirSync(dir, { recursive: true });
  const name = path.basename(rel);
  fs.copyFileSync(src, path.join(dir, name));
  return `./images/${slug}/${name}`;
}

function htmlToMd(html, slug, lang) {
  html = html.replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<noscript[\s\S]*?<\/noscript>/gi, '');
  const td = new TurndownService({ headingStyle: 'atx', hr: '---', bulletListMarker: '-', emDelimiter: '*', strongDelimiter: '**' });
  const map = EN_IMG[slug] || {};
  td.addRule('img', {
    filter: 'img',
    replacement: (_c, node) => {
      const u = node.getAttribute('data-src') || node.getAttribute('src') || '';
      const base = decodeURIComponent(u.split('?')[0].split('/').pop()).replace(/\+/g, ' ');
      const rawBase = decodeURIComponent(u.split('?')[0].split('/').pop());
      const rel = map[rawBase] || map[base];
      if (!rel) { log.push(`EN ${slug}: image not in vault, dropped: ${rawBase}`); return ''; }
      const p = copyImg(lang, slug, rel);
      return p ? `\n\n![${(node.getAttribute('alt') || '').replace(/[\[\]]/g, '')}](${p})\n\n` : '';
    },
  });
  td.addRule('figcaption', { filter: 'figcaption', replacement: (c) => (c.trim() ? `\n\n*${c.trim()}*\n\n` : '') });
  let md = td.turndown(html);
  md = md.replace(/[ \t]+\n/g, (m) => (m.startsWith('  ') ? '  \n' : '\n'));
  md = md.replace(/\n{3,}/g, '\n\n').trim() + '\n';
  return md;
}

const enFiles = fs.readdirSync(BACKUP).filter((f) => f.startsWith('ai-storians__') && f.endsWith('.json'));
const coverOf = {};
for (const f of enFiles) {
  const it = JSON.parse(fs.readFileSync(path.join(BACKUP, f), 'utf8')).item;
  const slug = it.urlId;
  const deck = (it.excerpt || '').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim() || DECK_FALLBACK[slug] || '';
  const coverBase = decodeURIComponent((it.assetUrl || '').split('?')[0].split('/').pop());
  const map = EN_IMG[slug] || {};
  const coverRel = map['__cover__'] || map[coverBase];
  const cover = coverRel ? copyImg('en', slug, coverRel) : null;
  if (!cover) log.push(`EN ${slug}: cover not in vault (${coverBase}), typographic cover used`);
  coverOf[slug] = coverRel;
  const body = htmlToMd(it.body, slug, 'en');
  const fm = [
    '---',
    `title: ${yamlStr(it.title)}`,
    `deck: ${yamlStr(deck)}`,
    `date: ${kstDate(it.publishOn)}`,
    'lang: en',
    `series: ${S1[slug] ? 's1' : 'standalone'}`,
    S1[slug] ? `chapter: ${S1[slug]}` : null,
    cover ? `cover: ${yamlStr(cover)}` : null,
    'coverAlt: ""',
    `source: ${yamlStr('https://www.aistorians.com' + it.fullUrl)}`,
    '---',
  ].filter(Boolean).join('\n');
  fs.writeFileSync(path.join(OUT, 'essays', 'en', `${slug}.md`), `${fm}\n\n${body}`);
}

// daily thought (EN)
{
  const it = JSON.parse(fs.readFileSync(path.join(BACKUP, 'daily-thought__what-googles-legendary-engineer-taught-me.json'), 'utf8')).item;
  const td = htmlToMd(it.body, it.urlId, 'en');
  const deck = (it.excerpt || '').replace(/<[^>]+>/g, '').trim();
  fs.writeFileSync(path.join(OUT, 'thoughts', 'en', `${it.urlId}.md`),
    `---\ntitle: ${yamlStr(it.title)}\ndeck: ${yamlStr(deck)}\ndate: ${kstDate(it.publishOn)}\nlang: en\n---\n\n${td}`);
}

// ---------- KO ----------
const KO = [
  ['Ep01 우리 모두가 AI시대의 역사학자다 브런치 발행본 (2026-10-14 수집).md', 'we-are-all-historians-of-the-ai-age-ai-storians', 's1', 1, null, null],
  ['Ep02 메신저가 되어라 브런치 발행본 (2026-10-14 수집).md', 'be-a-messenger', 's1', 2, 'brunch-ep1', 'brunch-ep1/thumbnail-messenger-is-the-message.png'],
  ['Ep03 호스트가 되라 브런치 발행 최종본.md', 'be-a-host-in-the-ai-era', 's1', 3, 'brunch-ep03-host', 'brunch-ep03-host/01.png'],
  ['Ep04 전통을 만들어라 브런치 발행본 (2026-10-14 수집).md', 'create-a-tradition', 's1', 4, null, null],
  ['Ep05 좋은 과거를 가져라 브런치 발행 최종본.md', 'so-have-a-good-past', 's1', 5, 'brunch-ep05-good-past', 'brunch-ep05-good-past/04.png'],
  ['Ep06 AI 시대의 과거와 서사란 브런치 발행 최종본.md', 'press-record', 's1', 6, 'brunch-ep06-past-and-story', 'brunch-ep06-past-and-story/01.png'],
  ['Ep07 사람이 모이는 곳, 플랫폼 브런치 발행본 (2026-10-14 수집).md', 'own-the-road', 's1', 7, 'brunch-ep07-platform', 'brunch-ep07-platform/01_slack_teams.png'],
  ['Ep08 자동화를 막을 수 있는 사람이 되어라 브런치 발행 최종본.md', 'be-the-one-who-can-say-stop', 's1', 8, 'brunch-stop-ep', 'brunch-stop-ep/01_cover_brunch.png'],
  ['Ep09 스토리텔러가 되어라 브런치 발행 최종본.md', 'be-a-storyteller', 's1', 9, 'brunch-ep09-storyteller', 'brunch-ep09-storyteller/00_cover_brunch.png'],
  ['Ep10 에필로그 AI 시대를 지배하자 브런치 발행 최종본.md', 'rule-the-ai-era', 's1', 10, 'brunch-ep10-epilogue', 'brunch-ep10-epilogue/00_cover_brunch.png'],
  ['AI 시대를 읽는 투자 01화 돈은 먼저 도착한다 브런치 발행 최종본.md', 'money-arrives-first', 'investing', 1, 'brunch-aiinvest-01-prologue', 'brunch-aiinvest-01-prologue/00_cover.jpg'],
  ['AI 시대를 읽는 투자 02화 장사꾼보다 장터 주인이 승리한다 브런치 발행 최종본.md', 'marketplace-owners-win', 'investing', 2, 'brunch-aiinvest-02-marketplace', 'brunch-aiinvest-02-marketplace/00_cover.jpg'],
];

for (const [file, slug, series, chapter, gdir, coverRel] of KO) {
  const raw = fs.readFileSync(path.join(KR, file), 'utf8').replace(/\r\n/g, '\n');
  const lines = raw.split('\n');
  let title = lines[0].replace(/^#\s*/, '')
    .replace(/\s*\(브런치 발행 최종본\)\s*$/, '')
    .replace(/^Ep\.\d+\s+/, '').replace(/^\d+화\s+/, '').replace(/^AI 시대를 읽는 투자 \d+화\s+/, '')
    .replace(/\s+Have a Good Past$/, '').replace(/^에필로그:\s*/, '에필로그: ');
  const head = raw.slice(0, 1500);
  const deck = (head.match(/부제:\s*([^|\n]+)/) || [])[1]?.trim() || '';
  const date = (head.match(/발행:\s*(\d{4}-\d{2}-\d{2})/) || head.match(/(\d{4}-\d{2}-\d{2})[^|\n]*발행/) || [])[1];
  const bodyImgs = ((head.match(/본문\s+([^)]+)\)/) || [])[1] || '').split(',').map((s) => s.trim()).filter(Boolean);
  // body start
  let start;
  const sep = lines.findIndex((l, i) => i > 0 && i < 12 && l.trim() === '---');
  if (sep > 0) start = sep + 1;
  else start = lines.findIndex((l) => /^발행:/.test(l)) + 1;
  let body = lines.slice(start).join('\n').replace(/^\n+/, '');
  // images
  let seq = 0;
  body = body.replace(/^!\[[^\]]*\]\(\.\.\/\.\.\/05 Graphics\/([^)]+)\)\s*$/gm, (_m, rel) => {
    const p = copyImg('ko', slug, rel); seq++;
    if (!p) { log.push(`KO ${slug}: missing ${rel}`); return ''; }
    return `![](${p})`;
  });
  body = body.replace(/^\[이미지:\s*(.+?)\]\s*$/gm, (_m, inner) => {
    const fm = inner.match(/([\w\-]+\.(?:png|jpe?g))/);
    if (fm && gdir) {
      const p = copyImg('ko', slug, `${gdir}/${fm[1]}`);
      const alt = inner.replace(/[,(]?\s*[\w\-]+\.(?:png|jpe?g)\)?/, '').replace(/[\s,]+$/, '').trim();
      if (p) return `![${alt}](${p})`;
    }
    log.push(`KO ${slug}: image marker dropped: ${inner}`);
    return '';
  });
  if (slug === 'own-the-road' && bodyImgs.length === 0) bodyImgs.push('01_slack_teams', '02_common_rare_ko');
  const bare = (body.match(/^\[이미지\]\s*$/gm) || []).length;
  if (bare && gdir && bodyImgs.length === bare) {
    let k = 0;
    body = body.replace(/^\[이미지\]\s*$/gm, () => {
      const name = bodyImgs[k++];
      const cand = ['.jpg', '.png'].map((e) => `${gdir}/${name}${e}`).find((r) => fs.existsSync(path.join(GFX, r)));
      const p = cand ? copyImg('ko', slug, cand) : null;
      if (!p) log.push(`KO ${slug}: bare marker unmapped (${name})`);
      return p ? `![](${p})` : '';
    });
  } else if (bare) {
    body = body.replace(/^\[이미지\]\s*$/gm, '');
    log.push(`KO ${slug}: ${bare} bare [이미지] markers dropped (no files in vault)`);
  }
  // standalone numbered section lines -> h2 (Brunch subheads)
  const bl = body.split('\n');
  for (let i = 0; i < bl.length; i++) {
    const l = bl[i];
    if (/^\d{1,2}\.\s+\S/.test(l) && l.length < 70 && (bl[i - 1] ?? '').trim() === '' && (bl[i + 1] ?? '').trim() === '' && !/^\d{1,2}\.\s/.test((bl[i + 2] ?? ''))) {
      bl[i] = `## ${l}`;
    }
  }
  body = bl.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
  const cover = coverRel ? copyImg('ko', slug, coverRel) : null;
  const fm = [
    '---', `title: ${yamlStr(title)}`, `deck: ${yamlStr(deck)}`, `date: ${date}`, 'lang: ko',
    `series: ${series}`, `chapter: ${chapter}`, cover ? `cover: ${yamlStr(cover)}` : null, 'coverAlt: ""',
    `source: ${yamlStr(file)}`, '---',
  ].filter(Boolean).join('\n');
  fs.writeFileSync(path.join(OUT, 'essays', 'ko', `${slug}.md`), `${fm}\n\n${body}`);
}
fs.writeFileSync('scripts/convert-log.txt', log.join('\n') + '\n');
console.log(log.join('\n'));
