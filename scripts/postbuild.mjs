// GitHub Pages: a request for /ai-storians can be redirected to /ai-storians/ when a folder of the
// same name exists. Copy x.html to x/index.html for those cases so both forms load the page.
import fs from 'node:fs';
import path from 'node:path';
const dist = path.resolve('dist');

// English first: while site.config.json has koLive false, the Korean pages are built but not published.
const siteConfig = JSON.parse(fs.readFileSync(path.resolve('site.config.json'), 'utf8'));
if (!siteConfig.koLive) {
  for (const p of ['ko', 'ko.html']) fs.rmSync(path.join(dist, p), { recursive: true, force: true });
  console.log('postbuild: Korean pages left out (koLive false)');
}
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
let n = 0;
for (const f of walk(dist)) {
  if (!f.endsWith('.html')) continue;
  const dir = f.slice(0, -5);
  if (fs.existsSync(dir) && fs.statSync(dir).isDirectory() && !fs.existsSync(path.join(dir, 'index.html'))) {
    fs.copyFileSync(f, path.join(dir, 'index.html'));
    n++;
  }
}
console.log(`postbuild: ${n} folder index pages added`);
