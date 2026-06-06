# Replace Quartz search with Pagefind

**Date:** 2026-06-06
**Status:** Approved (design); implementation pending
**Branch note:** `v5` auto-deploys to GitHub Pages on push — do not push casually.

## Goal

Replace the bundled `github:quartz-community/search` plugin (FlexSearch + client-fetched
content index) with [Pagefind](https://pagefind.app): a static index built after the HTML
is generated, queried at runtime via Pagefind's JS API. Keep the current modal UX (toolbar
button, Ctrl/Cmd+K, full-screen overlay) but render **excerpt-based** results.

## Decisions (locked)

| Topic | Decision |
|-------|----------|
| UI | Custom component on Pagefind's **JS API**, styled to match the existing modal. |
| Results | **Excerpts only** — highlighted snippets + sub-result heading anchors. No live preview pane. |
| Indexer location | **External step** (`pagefind` CLI after `quartz build`), not a Quartz emitter plugin. |
| Index scope | Pagefind config `exclude_selectors: [".sidebar"]` (drops the explorer/TOC/backlinks chrome). **No vendored/core edits** — the `<article>` wrapper is rendered by the vendored `content-page` plugin, which we avoid editing. |
| Tag-search mode | **Dropped for v1** (no `#` / Shift+Cmd+K tag filter). |
| Build/deploy | GitHub Actions → Pages, via `.github/workflows/deploy.yml` (push to `v5`). |

## Architecture

Four units, each independently verifiable:

### 1. Indexing (build pipeline)
- Add `pagefind` as a `devDependency`.
- Add npm script: `"build:site": "npx quartz build && npx pagefind --site public"` (named
  `build:site`, not `build`, to dodge the repo's pre-existing broken `prebuild` hook).
- `deploy.yml`: change the build step `npx quartz build` → `npm run build:site`.
  `npm ci` already installs devDependencies, so the `pagefind` binary is present in CI.
  Output `public/pagefind/` ships inside the existing `public/` Pages artifact.
- **Scope the index (config-only):** add a repo-root `pagefind.yml` with
  `exclude_selectors: [".sidebar"]`. The page layout puts the explorer/search in
  `.left.sidebar` and TOC/backlinks in `.right.sidebar`, while real page content lives in
  `.center`; excluding `.sidebar` removes the repeated chrome without editing the vendored
  `content-page` plugin that renders the `<article>` wrapper. Page content (incl. title in
  `.page-header`) stays indexed.
- **Title:** Pagefind derives the record title from the first `<h1>`/`<title>`; verify a
  record's title during implementation and add `data-pagefind-meta` only if needed.
- Local dev (`quartz build --serve`) does not re-run Pagefind on watch; document a one-time
  `npx pagefind --site public` for local testing.

### 2. Search component — `local-plugins/pagefind-search/`
Same hand-written local-plugin shape as `content-dates`:
- `package.json` — `quartz.category: "component"`, one component (`PagefindSearch`),
  default slot `position: left, priority: 20`, `exports["."]` + `exports["./components"]`.
- `dist/index.js` — `manifest` export + re-export of the component.
- `dist/components/index.js` — Preact component (via `h`) that server-renders the toolbar
  button + modal chrome; carries `.css` (scss-in-JS string) and `.afterDOMLoaded` (plain-JS
  string; component scripts are IIFE-wrapped in a **non-async** function and esbuild-**minified**,
  not bundled — so **no top-level `await`**; async work goes inside helper async functions).
- `dist/*.d.ts` — minimal types for parity.

**Client script behavior (`.afterDOMLoaded`):**
- Binds on SPA `nav` and `render` events (re-runs each navigation).
- **Ctrl/Cmd+K** toggles the modal; `Esc` / click-outside closes.
- On first open, lazy `import()` of `/var-log/pagefind/pagefind.js` (base-path aware via the
  page's basepath, not hardcoded).
- Debounced query → `pagefind.search(q)` → render result list: each result shows title,
  highlighted `excerpt`, and sub-results (heading anchors).
- Result link hrefs prepend the site base path (Pagefind stores URLs relative to `--site`
  root, e.g. `/16/`, so they need `/var-log` prepended).

### 3. Config / replacement (`quartz.config.yaml`)
- `github:quartz-community/search` → `enabled: false`.
- Register `./local-plugins/pagefind-search` in the same slot:
  `position: left, priority: 20, group: toolbar, groupOptions.grow: true`.

### 4. Testing / verification
- `npm run build` → assert `public/pagefind/pagefind.js` exists; spot-check an index record
  to confirm sidebar/explorer text is **not** present (scope works).
- Serve `public/` and verify: Cmd/Ctrl+K opens modal; query returns results; result links
  resolve under `/var-log/…`; works after SPA navigation.
- `npm run check` (tsc + prettier) stays green; new local-plugin files are prettier-clean.

## Out of scope (v1)
- Live preview pane; tag-search mode; faceted/filter UI; multilingual index tuning.
  Component leaves clean seams to add these later.

## Risks / notes
- **Base-path correctness** (`/var-log`) for both the Pagefind asset URL and result links —
  primary correctness risk; covered by verification step 4.
- Scoping is config-only (`pagefind.yml`); no core/vendored files are edited.
- `exclude_selectors: [".sidebar"]` assumes the sidebar class is stable; verified against
  current rendered output (`.left.sidebar` / `.right.sidebar`).
- `pagefind` binary download in CI relies on `npm ci`; cached via existing npm cache.
