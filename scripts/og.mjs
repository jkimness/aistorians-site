// Draws public/og-default.png (1200 x 630), the share card for pages without their own image.
// Type only: the nameplate, the headline, the address. Run: node scripts/og.mjs
// Needs Playwright with Chromium (the cloud workspace has it; on a Mac: npx playwright install chromium).
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

// Playwright is resolved like require() does (local node_modules, then NODE_PATH), so a global install works.
const { chromium } = createRequire(import.meta.url)('playwright');
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const font = (p) => pathToFileURL(path.join(root, 'node_modules', p)).href;

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face { font-family: 'Newsreader'; src: url('${font('@fontsource-variable/newsreader/files/newsreader-latin-opsz-normal.woff2')}') format('woff2'); font-weight: 200 800; }
@font-face { font-family: 'JBM'; src: url('${font('@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2')}') format('woff2'); font-weight: 100 800; }
* { margin: 0; box-sizing: border-box; }
body { width: 1200px; height: 630px; background: #fcfcfa; color: #14171c; font-family: 'Newsreader', Georgia, serif; padding: 54px 72px 50px; display: flex; flex-direction: column; }
.top { display: flex; justify-content: space-between; align-items: center; font: 600 15px/1 'JBM', monospace; letter-spacing: 0.1em; text-transform: uppercase; color: #3a3e45; }
.mark { font-weight: 600; font-size: 66px; letter-spacing: -0.035em; line-height: 1; margin-top: 26px; text-align: center; font-variation-settings: 'opsz' 72; }
.mark .ai { color: #b93a22; }
.rule { height: 6px; margin-top: 22px; background: linear-gradient(#14171c, #14171c) top / 100% 3px no-repeat, linear-gradient(#14171c, #14171c) bottom / 100% 1px no-repeat; }
h1 { font-weight: 500; font-size: 64px; line-height: 1.06; letter-spacing: -0.03em; margin-top: auto; font-variation-settings: 'opsz' 72; }
h1 span { display: block; }
h1 span + span { color: #b93a22; }
.foot { display: flex; justify-content: space-between; margin-top: 30px; padding-top: 16px; border-top: 1px solid #14171c; font: 600 15px/1 'JBM', monospace; letter-spacing: 0.08em; text-transform: uppercase; color: #3a3e45; }
</style></head><body>
<div class="top"><span>Est. 2026</span><span>Jae Kim</span></div>
<div class="mark"><span class="ai">ai</span> storians</div>
<div class="rule"></div>
<h1><span>Know where the AI world is heading.</span><span>Build your solution based on the future.</span></h1>
<div class="foot"><span>aistorians.com</span><span>Writing, podcast, services</span></div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: path.join(root, 'public/og-default.png') });
await browser.close();
console.log('wrote public/og-default.png');
