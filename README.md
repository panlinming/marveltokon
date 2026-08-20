# Marvel Tokon Wiki

Fan-made community wiki for **MARVEL Tōkon: Fighting Souls** (Arc System Works × Marvel Games).
Static site: pure HTML + CSS + JS, no build step. Deployable to GitHub Pages / Cloudflare Pages / any static host.

Domain: `marveltokonwiki.wiki`

## Local development

```bash
python -m http.server 8000
# open http://localhost:8000
```

## Repository structure

```
./ (repo root)
├── index.html                  # Home: hero, stats, start-here cards, about game
├── 404.html                    # Custom 404
├── robots.txt                  # SEO: allows crawling + sitemap pointer
├── sitemap.xml                 # SEO: all 10 canonical URLs
├── CNAME                       # GitHub Pages custom domain
├── favicon.ico / *.png         # Icons (16/32/192/512, apple-touch, logo)
├── site.webmanifest            # PWA manifest
├── assets/
│   ├── css/style.css           # Dark theme (#E62429 red / #0A0A0A bg / #FFD700 gold)
│   └── js/main.js              # Mobile nav, tabs, accordion, roster filter/search
├── characters/
│   ├── index.html              # Roster hub: 20 fighters, role filter + team tabs
│   ├── spider-man/index.html   # Move list / combos / synergy tabs
│   ├── doctor-doom/index.html
│   ├── wolverine/index.html
│   └── iron-man/index.html
├── tier-list/index.html        # S/A/B/C tier rows + meta analysis + patch log
├── guides/
│   ├── best-teams/index.html   # 3 team comps + Assist/Synergy mechanics
│   └── beginner/index.html     # 4v4 Assemble mechanics, controls, checklist
├── system-requirements/index.html  # PC specs / crossplay / controls tabs + FAQ
├── privacy/index.html          # noindex
└── terms/index.html            # noindex, fan-project disclaimer
```

## SEO conventions (AITDK-friendly)

- Unique `<title>` (≤ 60 chars where possible) and meta description (140–160 chars) per page.
- Exactly one `<h1>` per page; `<h2>` marks section headings.
- Canonical URLs on `https://marveltokonwiki.wiki`.
- Open Graph + Twitter card tags on all indexable pages.
- `sitemap.xml` + `robots.txt`; legal pages set to `noindex`.

## Content sources

Tier list, move lists, combos, PC specs and roster data were cross-verified against
tokon.gg, marveltokon.org, Dustloop, the official Zendesk FAQ, Destructoid and GameSpot
(August 2026). See the source material files in the project root.

## Disclaimer

Unofficial fan project. Not affiliated with Marvel, Arc System Works, Sony or PlayStation.


## Google Analytics

The GA4 measurement ID lives in `.env.local` (gitignored):

    NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"

After changing it, re-inject into all pages and commit:

    node scripts/inject-ga.mjs
