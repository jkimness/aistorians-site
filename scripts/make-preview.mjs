// Turn dist/ into a self-contained, relative-linked copy for a private claude.ai Artifact preview.
// Not part of the production site. Usage: node scripts/make-preview.mjs
import fs from 'node:fs';
import path from 'node:path';

const SRC = path.resolve('dist');
const OUT = path.resolve('preview');
fs.rmSync(OUT, { recursive: true, force: true });
fs.cpSync(SRC, OUT, { recursive: true });
// the artifact service reserves names starting with '_'
fs.renameSync(path.join(OUT, '_astro'), path.join(OUT, 'assets'));

const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const files = walk(OUT);
const html = files.filter((f) => f.endsWith('.html'));
const css = files.filter((f) => f.endsWith('.css'));

const GOOGLE = [
  'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap',
  'https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500;600;700;900&display=swap',
  'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap',
];

for (const f of css) {
  let s = fs.readFileSync(f, 'utf8');
  s = s.replace(/url\(\/_astro\//g, 'url(./');
  s = s.replace(/'Newsreader Variable'/g, "'Newsreader Variable','Newsreader'")
       .replace(/'Noto Serif KR Variable'(?!,'Noto Serif KR')/g, "'Noto Serif KR Variable','Noto Serif KR'")
       .replace(/'JetBrains Mono Variable'/g, "'JetBrains Mono Variable','JetBrains Mono'");
  // undo the replacement inside @font-face family declarations
  s = s.replace(/font-family:'Newsreader Variable','Newsreader'/g, "font-family:'Newsreader Variable'")
       .replace(/font-family:'Noto Serif KR Variable','Noto Serif KR'/g, "font-family:'Noto Serif KR Variable'")
       .replace(/font-family:'JetBrains Mono Variable','JetBrains Mono'/g, "font-family:'JetBrains Mono Variable'");
  s += '\n.navbar{top:env(safe-area-inset-top,0px)}\n';
  fs.writeFileSync(f, s);
}

const exists = (p) => fs.existsSync(path.join(OUT, p));
function rel(fromFile, target) {
  // target: site-absolute path like /ai-storians/x, /_astro/a.css, /, /ko
  const [p, hash = ''] = target.split('#');
  let t = p;
  if (t === '/' || t === '') t = '/index.html';
  else if (!path.extname(t)) t = exists(t + '.html') ? t + '.html' : exists(t + '/index.html') ? t + '/index.html' : t + '.html';
  const fromDir = path.dirname(path.relative(OUT, fromFile));
  let r = path.relative(fromDir, t.slice(1));
  if (!r) r = './';
  return r + (hash ? '#' + hash : '');
}

const used = new Set();
for (const f of html) {
  let s = fs.readFileSync(f, 'utf8');
  s = s.replace(/\s(srcset|sizes)="[^"]*"/g, '');
  s = s.replace(/"\/_astro\//g, '"/assets/');
  s = s.replace(/(href|src)="(\/[^"]*)"/g, (m, a, v) => {
    if (v.startsWith('//')) return m;
    const r = rel(f, v);
    if (a === 'src' || v.startsWith('/assets/') || /\.(png|svg|webp|jpg|xml|css)$/.test(v)) used.add(path.normalize(path.join(path.dirname(f), r)));
    return `${a}="${r}"`;
  });
  // contact form: no real submission inside the preview frame
  s = s.replace(/<form class="form([^"]*)" method="post" action="[^"]*"( enctype="[^"]*")?/g,
    '<form class="form$1" method="post" action="#" onsubmit="event.preventDefault();this.querySelector(\'.preview-note\').hidden=false"');
  s = s.replace(/(<div class="form-foot">)/, '$1<p class="preview-note meta" hidden style="grid-column:1/-1;color:#b93a22">Preview only. The live form will send this to jkim@aistorians.com.</p>');
  const fontLinks = GOOGLE.map((g) => `<link rel="stylesheet" href="${g}">`).join('');
  s = s.replace('</head>', `${fontLinks}</head>`);
  if (path.relative(OUT, f) === 'index.html') {
    const head = (s.match(/<head>([\s\S]*?)<\/head>/) || [])[1] || '';
    const body = (s.match(/<body>([\s\S]*?)<\/body>/) || [])[1] || '';
    const keep = head.replace(/<meta charset="utf-8">/, '').replace(/<meta name="viewport"[^>]*>/, '');
    s = keep + '\n' + body;
  }
  fs.writeFileSync(f, s);
}
// css references (fonts)
for (const f of css) {
  const s = fs.readFileSync(f, 'utf8');
  for (const m of s.matchAll(/url\(\.\/([^)]+)\)/g)) used.add(path.join(path.dirname(f), m[1]));
  used.add(f);
}
// drop unreferenced assets
let dropped = 0;
for (const f of walk(OUT)) {
  if (f.endsWith('.html')) continue;
  if (!used.has(path.normalize(f))) { fs.rmSync(f); dropped++; }
}
const left = walk(OUT);
console.log('files:', left.length, 'html:', left.filter((x) => x.endsWith('.html')).length, 'dropped:', dropped);
console.log('bytes:', left.reduce((a, x) => a + fs.statSync(x).size, 0));
