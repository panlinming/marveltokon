// Inject Google Analytics snippet into all pages, reading the ID from .env.local
// Usage: node scripts/inject-ga.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// --- parse .env.local ---
const envPath = path.join(root, '.env.local');
if (!fs.existsSync(envPath)) {
  console.error('.env.local not found at', envPath);
  process.exit(1);
}
let gaId = null;
for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
  const m = line.match(/^\s*NEXT_PUBLIC_GA_ID\s*=\s*"?([^"\r\n#]+)"?\s*$/);
  if (m) gaId = m[1].trim();
}
if (!gaId) { console.error('NEXT_PUBLIC_GA_ID not defined in .env.local'); process.exit(1); }

const snippet =
`<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${gaId}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${gaId}');
</script>`;

const wrapped = '<!-- GA_SNIPPET -->\n' + snippet + '\n<!-- /GA_SNIPPET -->';

// --- walk html files and inject ---
let n = 0;
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === '.git' || e.name === 'node_modules' || e.name === 'docs') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html')) {
      const c = fs.readFileSync(p, 'utf8');
      const out = c.replace(/<!-- GA_SNIPPET -->[\s\S]*?(<!-- \/GA_SNIPPET -->)?/, wrapped);
      if (out !== c) { fs.writeFileSync(p, out, 'utf8'); n++; }
    }
  }
})(root);
console.log(`GA ${gaId} injected into ${n} pages`);
