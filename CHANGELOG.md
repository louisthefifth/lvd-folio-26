# Changelog

## 2026-05-08 — Dark-to-light conversion + homepage polish

### Phase 1 — Dark UI → Light UI
- [x] Removed `darkMode: 'class'` from `tailwind.config.js`; replaced with named light palette tokens (`bg-primary`, `text-primary`, etc.)
- [x] Updated `index.css`: body background hardcoded to `#fafafa`, removed `background-color`/`color` transition (no theme switching)
- [x] Scrollbar already light-mode; confirmed track `#fafafa`, thumb `#d4d4d4`/hover `#a3a3a3`
- [x] Fixed 3 `#2b2b2b` inline-style colors in `CaseStudyLayout.jsx` → `#0a0a0a`
- [x] All components confirmed light — no `dark:` variants, no `prefers-color-scheme`, no `#1b1b1b`/`#2b2b2b` remaining
- [x] Clean `npm run build` passes

### Phase 2 — Hero fixes
- [x] Removed "Engineers" tab (previously served as the "Designers" tab per DESIGN.md) — hero now shows 3 tabs: For everyone / Recruiters & Founders / Anti-remote work
- [x] Tab label font size increased from `text-sm` → `text-base`
- [x] Anti-remote work tab letter-spacing increased from `tracking-widest` to `letter-spacing: 0.25em`

### Phase 3 — Projects card fixes
- [x] Project title stroke darkened: `1px rgba(20,20,19,0.25)` → `1.5px rgba(10,10,10,0.6)` for legibility on light background
- [x] Project titles already clickable via `<Link>` — confirmed
- [x] Tags restructured from flat `tech: [...]` to `{ industry, businessModel, discipline }` in `App.jsx`; `Projects.jsx` renders pills in that order
- [x] Description already on far right of card — confirmed
- [x] Tags already pinned to base with `mt-auto` — confirmed

### Phase 4 — Clients section
- [x] Client blocks already hyperlinked in `Clients.jsx`
- [x] Replaced inline `→` arrow with inline SVG `ArrowUpRight` icon
- [x] Arrow visibility gated to `@media (hover: hover)` via `.client-arrow` CSS class in `index.css` — touch devices never see the arrow

### Phase 5 — Sweep
- [x] Repo-wide grep for `#1b1b1b`, `#2b2b2b`, `dark:`, `prefers-color-scheme` — zero matches
- [x] `design.md` updated with light palette; removed all `#1b1b1b`/`#2b2b2b` references as primary/secondary backgrounds
- [x] `CHANGELOG.md` created (this file)
