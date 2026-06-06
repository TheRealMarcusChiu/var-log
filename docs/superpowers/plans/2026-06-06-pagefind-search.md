# Pagefind Search Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the bundled Quartz FlexSearch plugin with a Pagefind-backed search: a static index built after `quartz build`, queried at runtime by a custom modal component matching the current UX (Ctrl/Cmd+K, full-screen overlay, excerpt results).

**Architecture:** Pagefind CLI indexes `public/` after the Quartz build (npm script + CI step), scoped via a repo-root `pagefind.yml` (`exclude_selectors: [".sidebar"]`) so only page content is indexed — no edits to vendored `.quartz/plugins`. A new local component plugin (`local-plugins/pagefind-search`) server-renders the toolbar button + modal and ships a plain-JS `afterDOMLoaded` script that lazy-loads Pagefind's JS API and renders results. The old `search` plugin is disabled in `quartz.config.yaml`.

**Tech Stack:** Quartz 5 (Preact components, local-plugin registry), Pagefind (`pagefind` npm package + CLI/JS API), GitHub Actions → Pages.

**Branch note:** `v5` auto-deploys on push. Do all commits on a `marcuschiu/pagefind-search` branch; do NOT push to `v5` without explicit user approval.

---

## File Structure

- Create: `local-plugins/pagefind-search/package.json` — component-plugin manifest (`quartz.category: "component"`, one component `PagefindSearch`, slot `left`/priority 20).
- Create: `local-plugins/pagefind-search/dist/index.js` — `manifest` export + re-export of component.
- Create: `local-plugins/pagefind-search/dist/index.d.ts` — types parity.
- Create: `local-plugins/pagefind-search/dist/components/index.js` — Preact component: chrome markup + `.css` + `.afterDOMLoaded` client script.
- Create: `local-plugins/pagefind-search/dist/components/index.d.ts` — types parity.
- Create: `pagefind.yml` — Pagefind config (site + exclude_selectors).
- Modify: `package.json` — add `pagefind` devDependency + `build` script.
- Modify: `.github/workflows/deploy.yml:46` — build step `npx quartz build` → `npm run build`.
- Modify: `quartz.config.yaml` — disable `search`, register `./local-plugins/pagefind-search`.

---

## Task 0: Branch

- [ ] **Step 1: Create and switch to a feature branch**

Run:
```bash
cd /Users/marcuschiu/Desktop/A/var-log
git checkout -b marcuschiu/pagefind-search
```
Expected: `Switched to a new branch 'marcuschiu/pagefind-search'`

---

## Task 1: Add Pagefind dependency, build script, and config

**Files:**
- Modify: `package.json`
- Create: `pagefind.yml`

- [ ] **Step 1: Add `pagefind` as a devDependency**

Run:
```bash
npm install --save-dev pagefind
```
Expected: `pagefind` appears under `devDependencies` in `package.json`; `package-lock.json` updated; a `node_modules/.bin/pagefind` binary is fetched.

- [ ] **Step 2: Add a `build:site` npm script**

Edit `package.json` `scripts`, adding (keep existing scripts; insert after `"quartz"` line):
```json
    "build:site": "npx quartz build && npx pagefind --site public",
```
**Why `build:site`, not `build`:** the repo has a pre-existing `prebuild` hook (`install-plugins`)
that exits non-zero (a `.scss` import bug under `tsx`). npm auto-runs `prebuild` before any script
literally named `build`, which would abort it. `build:site` has no matching `prebuild:site` hook, so
it runs cleanly. (`quartz`/`pagefind` are local bins, hence `npx`.)

- [ ] **Step 3: Create `pagefind.yml` to scope the index**

Create `pagefind.yml`:
```yaml
# Pagefind configuration. `--site` is still passed on the CLI for clarity,
# but exclusions live here. The page chrome (explorer/search in .left.sidebar,
# TOC/backlinks in .right.sidebar) is dropped so only .center page content is
# indexed. See docs/superpowers/specs/2026-06-06-pagefind-search-design.md.
exclude_selectors:
  - ".sidebar"
```

- [ ] **Step 4: Verify Pagefind runs and scopes correctly**

Run:
```bash
npm run build
ls public/pagefind/pagefind.js
```
Expected: build completes; `public/pagefind/pagefind.js` exists; Pagefind CLI prints a non-zero "Indexed N pages".

- [ ] **Step 5: Confirm the index built and scoping is plausible**

Pagefind fragments are gzipped, so `grep` cannot inspect them. Instead, query the index in
Node and inspect a result's excerpt — it should contain page prose, not the repeated
explorer/sidebar nav labels. Run:
```bash
node -e "import('./public/pagefind/pagefind.js').then(async (pf)=>{const s=await pf.search('the');console.log('results:', s.results.length);const d=await s.results[0].data();console.log('excerpt:', d.excerpt.replace(/<[^>]+>/g,'').slice(0,200))})"
```
Expected: `results:` is `> 0`; the printed excerpt reads like article prose. If the excerpt is
dominated by folder/nav names (the explorer tree), the exclude selector is wrong — re-check
`.sidebar` against `public/index.html` structure before proceeding. (Full scope/title
verification is Task 6 Step 2.)

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json pagefind.yml
git commit -m "build: add pagefind dependency, build script, and index config"
```

---

## Task 2: Scaffold the pagefind-search local plugin (manifest + entry)

**Files:**
- Create: `local-plugins/pagefind-search/package.json`
- Create: `local-plugins/pagefind-search/dist/index.js`
- Create: `local-plugins/pagefind-search/dist/index.d.ts`

- [ ] **Step 1: Create the plugin manifest**

Create `local-plugins/pagefind-search/package.json`:
```json
{
  "name": "quartz-plugin-pagefind-search",
  "version": "1.0.0",
  "description": "Pagefind-backed search modal for Quartz (replaces the bundled FlexSearch plugin).",
  "type": "module",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": { "types": "./dist/index.d.ts", "import": "./dist/index.js" },
    "./components": { "types": "./dist/components/index.d.ts", "import": "./dist/components/index.js" }
  },
  "quartz": {
    "name": "pagefind-search",
    "displayName": "Pagefind Search",
    "category": "component",
    "version": "1.0.0",
    "defaultOrder": 50,
    "defaultEnabled": true,
    "components": {
      "PagefindSearch": {
        "displayName": "Pagefind Search",
        "defaultPosition": "left",
        "defaultPriority": 20
      }
    }
  }
}
```

- [ ] **Step 2: Create the main entry (manifest + re-export)**

Create `local-plugins/pagefind-search/dist/index.js`:
```js
// Manifest fallback; the loader prefers package.json's `quartz` field.
export const manifest = {
  name: "pagefind-search",
  displayName: "Pagefind Search",
  description: "Pagefind-backed search modal for Quartz (replaces the bundled FlexSearch plugin).",
  version: "1.0.0",
  category: "component",
}

export { PagefindSearch } from "./components/index.js"
```

- [ ] **Step 3: Create the entry types**

Create `local-plugins/pagefind-search/dist/index.d.ts`:
```ts
export declare const manifest: {
  name: string
  displayName: string
  description: string
  version: string
  category: string
}

export { PagefindSearch } from "./components/index.js"
```

- [ ] **Step 4: Commit**

```bash
git add local-plugins/pagefind-search/package.json local-plugins/pagefind-search/dist/index.js local-plugins/pagefind-search/dist/index.d.ts
git commit -m "feat: scaffold pagefind-search component plugin"
```

---

## Task 3: Build the component (chrome markup + CSS)

**Files:**
- Create: `local-plugins/pagefind-search/dist/components/index.js`
- Create: `local-plugins/pagefind-search/dist/components/index.d.ts`

This task renders the static markup and styles; the client script is added in Task 4. The markup mirrors the current search chrome classes (`.search`, `.search-button`, `.search-container`, `.search-space`, `.search-bar`) so existing toolbar styling still applies, plus a `.pagefind-results` container.

- [ ] **Step 1: Create the component with markup + CSS (client script stubbed)**

Create `local-plugins/pagefind-search/dist/components/index.js`:
```js
import { h } from "preact"

const style = `
.pagefind-results {
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.pagefind-results .pf-result {
  padding: 0.5rem;
  border-radius: 5px;
}
.pagefind-results .pf-result:hover,
.pagefind-results .pf-result.focus {
  background: var(--lightgray);
}
.pagefind-results .pf-title {
  font-weight: 600;
  color: var(--dark);
}
.pagefind-results .pf-excerpt {
  font-size: 0.85rem;
  color: var(--darkgray);
}
.pagefind-results mark {
  background: var(--textHighlight);
  color: inherit;
  padding: 0 0.1rem;
}
.pagefind-results .pf-subresults {
  margin: 0.25rem 0 0 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
`

// CLIENT_SCRIPT placeholder — replaced in Task 4.
const script = ``

const PagefindSearch = (_opts) => {
  function PagefindSearchComponent({ displayClass }) {
    const classes = ["search", displayClass].filter(Boolean).join(" ")
    return h("div", { class: classes }, [
      h(
        "button",
        { class: "search-button", "aria-label": "Search", "aria-expanded": "false" },
        [
          h(
            "svg",
            {
              role: "img",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 19.9 19.7",
            },
            [
              h("title", {}, "Search"),
              h("g", { class: "search-path", fill: "none" }, [
                h("path", { "stroke-linecap": "square", d: "M18.5 18.3l-5.4-5.4" }),
                h("circle", { cx: "8", cy: "8", r: "7" }),
              ]),
            ],
          ),
          h("p", {}, "Search"),
        ],
      ),
      h("div", { class: "search-container" }, [
        h("div", { class: "search-space" }, [
          h("input", {
            autocomplete: "off",
            class: "search-bar",
            name: "search",
            type: "text",
            "aria-label": "Search for something...",
            placeholder: "Search for something...",
          }),
          h("div", { class: "pagefind-results" }),
        ]),
      ]),
    ])
  }

  PagefindSearchComponent.css = style
  PagefindSearchComponent.afterDOMLoaded = script
  return PagefindSearchComponent
}

export { PagefindSearch }
```

- [ ] **Step 2: Create the component types**

Create `local-plugins/pagefind-search/dist/components/index.d.ts`:
```ts
import type { QuartzComponentConstructor } from "@quartz-community/types"

export declare const PagefindSearch: QuartzComponentConstructor
```

- [ ] **Step 3: Prettier-check the new files**

Run:
```bash
npx prettier --check local-plugins/pagefind-search/dist/components/index.js local-plugins/pagefind-search/dist/components/index.d.ts
```
Expected: "All matched files use Prettier code style!" (run `npx prettier --write` on them if not, then re-check).

- [ ] **Step 4: Commit**

```bash
git add local-plugins/pagefind-search/dist/components/
git commit -m "feat: pagefind-search component markup and styles"
```

---

## Task 4: Implement the client script (`afterDOMLoaded`)

**Files:**
- Modify: `local-plugins/pagefind-search/dist/components/index.js` (replace the `script` constant)

**Constraints (verified):**
- Component scripts are wrapped in a **non-async** IIFE `(function () { ... })()` and esbuild-minified (not bundled). **No top-level `await`** — put async work in helper async functions.
- Base path is available at `document.body.dataset.basepath` (e.g. `/var-log`).
- Re-bind on SPA `nav` and `render` events (the component markup is re-rendered server-side each navigation).
- Pagefind JS API: `const pf = await import(`${base}/pagefind/pagefind.js`)`, then `const s = await pf.search(query)`; `s.results` is `[{ data: async () => ({ url, meta: { title }, excerpt, sub_results: [{ title, url, excerpt }] }) }]`.
- Pagefind `url` is relative to the indexed site root (e.g. `/16/`); prepend base path for the deployed subpath.

- [ ] **Step 1: Replace the `script` constant with the full client script**

In `local-plugins/pagefind-search/dist/components/index.js`, replace:
```js
// CLIENT_SCRIPT placeholder — replaced in Task 4.
const script = ``
```
with:
```js
const script = `
const SEARCH_ENABLED = true
let pagefind = null
let pagefindLoading = null

function basePath() {
  return document.body.dataset.basepath || ""
}

async function loadPagefind() {
  if (pagefind) return pagefind
  if (!pagefindLoading) {
    const url = basePath() + "/pagefind/pagefind.js"
    pagefindLoading = import(url).then((mod) => {
      pagefind = mod
      return mod
    })
  }
  return pagefindLoading
}

function resultUrl(url) {
  // Pagefind urls are root-relative to the indexed site (e.g. /16/).
  // Prepend the deploy base path and strip any trailing index.html.
  const clean = url.replace(/index\\.html$/, "")
  return basePath() + clean
}

async function runSearch(query, container) {
  if (!query) {
    container.innerHTML = ""
    return
  }
  const pf = await loadPagefind()
  const search = await pf.search(query)
  const results = await Promise.all(search.results.slice(0, 8).map((r) => r.data()))
  container.innerHTML = ""
  for (const d of results) {
    const item = document.createElement("a")
    item.className = "pf-result"
    item.href = resultUrl(d.url)
    const title = document.createElement("div")
    title.className = "pf-title"
    title.textContent = (d.meta && d.meta.title) || d.url
    const excerpt = document.createElement("div")
    excerpt.className = "pf-excerpt"
    excerpt.innerHTML = d.excerpt
    item.appendChild(title)
    item.appendChild(excerpt)
    container.appendChild(item)
  }
}

function debounce(fn, ms) {
  let t
  return function (...args) {
    clearTimeout(t)
    t = setTimeout(() => fn.apply(this, args), ms)
  }
}

function setupSearch() {
  const root = document.querySelector(".search")
  if (!root) return
  const button = root.querySelector(".search-button")
  const container = root.querySelector(".search-container")
  const input = root.querySelector(".search-bar")
  const results = root.querySelector(".pagefind-results")
  if (!button || !container || !input || !results) return

  function open() {
    container.classList.add("active")
    button.setAttribute("aria-expanded", "true")
    input.focus()
    loadPagefind()
  }
  function close() {
    container.classList.remove("active")
    button.setAttribute("aria-expanded", "false")
    input.value = ""
    results.innerHTML = ""
  }
  function toggle() {
    container.classList.contains("active") ? close() : open()
  }

  button.addEventListener("click", toggle)
  input.addEventListener(
    "input",
    debounce((e) => runSearch(e.target.value.trim(), results), 150),
  )
  container.addEventListener("click", (e) => {
    if (e.target === container) close()
  })

  function onKeydown(e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault()
      toggle()
    } else if (e.key === "Escape" && container.classList.contains("active")) {
      e.preventDefault()
      close()
    }
  }
  document.addEventListener("keydown", onKeydown)

  // Detach this page's keydown handler before the next SPA navigation swaps the DOM.
  document.addEventListener(
    "prenav",
    () => document.removeEventListener("keydown", onKeydown),
    { once: true },
  )
}

if (SEARCH_ENABLED) {
  document.addEventListener("nav", setupSearch)
  document.addEventListener("render", setupSearch)
  setupSearch()
}
`
```

- [ ] **Step 2: Add the modal-open CSS for `.search-container.active`**

In the same file, append to the `style` string (before its closing backtick) the overlay rules so the modal shows when active (mirrors the old search's overlay behavior; adjust to taste):
```css
.search > .search-container { display: none; }
.search > .search-container.active {
  display: block;
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.3);
}
.search > .search-container.active .search-space {
  max-width: 50rem;
  margin: 12vh auto 0;
  padding: 1rem;
  background: var(--light);
  border-radius: 8px;
  box-shadow: 0 14px 50px rgba(27, 33, 48, 0.3);
}
.search > .search-container.active .search-bar {
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem 0.75rem;
  font-size: 1.1rem;
}
```

- [ ] **Step 3: Prettier-check**

Run:
```bash
npx prettier --check local-plugins/pagefind-search/dist/components/index.js
```
Expected: clean (run `--write` then re-check if needed).

- [ ] **Step 4: Commit**

```bash
git add local-plugins/pagefind-search/dist/components/index.js
git commit -m "feat: pagefind-search client script (load API, modal, Cmd/Ctrl+K, results)"
```

Note on `prenav`: if Quartz does not emit a `prenav` event, the keydown handler de-dups harmlessly (same-named function reference is re-added; guard by naming). If duplicate handlers cause double-toggles in Task 6 verification, switch to a module-level `boundKeydown` that is removed at the start of `setupSearch` before re-adding.

---

## Task 5: Swap the plugins in config

**Files:**
- Modify: `quartz.config.yaml`

- [ ] **Step 1: Disable the bundled search plugin**

In `quartz.config.yaml`, find the `github:quartz-community/search` entry and set `enabled: false` (keep its `layout` block). It currently reads:
```yaml
  - source: github:quartz-community/search
    enabled: true
    layout:
      position: left
      priority: 20
      group: toolbar
      groupOptions:
        grow: true
```
Change `enabled: true` → `enabled: false`.

- [ ] **Step 2: Register the pagefind-search plugin in the same slot**

Immediately after that entry, add:
```yaml
  - source: ./local-plugins/pagefind-search
    enabled: true
    layout:
      position: left
      priority: 20
      group: toolbar
      groupOptions:
        grow: true
```

- [ ] **Step 3: Install plugins (creates the symlink) and confirm**

Run:
```bash
npx quartz plugin install
ls -la .quartz/plugins/pagefind-search
```
Expected: `.quartz/plugins/pagefind-search` symlink → `local-plugins/pagefind-search`.

- [ ] **Step 4: Commit**

```bash
git add quartz.config.yaml
git commit -m "feat: replace bundled search with pagefind-search in config"
```

---

## Task 6: Build, wire CI, and verify end-to-end

**Files:**
- Modify: `.github/workflows/deploy.yml:46`

- [ ] **Step 1: Full build**

Run:
```bash
npm run build:site
```
Expected: Quartz build succeeds, then Pagefind indexes; `public/pagefind/pagefind.js` exists; `public/index.html` contains `class="search"` (the new component) and NOT the old `data-field-priority` attribute.

Run:
```bash
grep -c "data-field-priority" public/index.html
grep -c 'class="search"' public/index.html
```
Expected: first is `0`, second is `>= 1`.

- [ ] **Step 2: Confirm a Pagefind record has a sensible title and URL**

Run:
```bash
node -e "import('./public/pagefind/pagefind.js').then(async (pf)=>{const s=await pf.search('the');const d=await s.results[0].data();console.log(JSON.stringify({url:d.url,title:d.meta&&d.meta.title},null,2))})"
```
Expected: prints a `url` like `/16/` (root-relative) and a non-empty `title`. (Confirms records exist and titles resolve. If `title` is empty, add `data-pagefind-meta` handling — see spec.)

- [ ] **Step 3: Manual browser verification**

Run a static server over `public/` at the base path and verify interactively:
```bash
npx http-server public -p 8080 -c-1
```
Then open `http://localhost:8080/` and verify:
- Toolbar **Search** button opens the modal; **Ctrl/Cmd+K** toggles it; **Esc**/click-outside closes it.
- Typing returns results with highlighted excerpts.
- Clicking a result navigates to the correct page (note: locally the base path is `/`, so result links resolve under `/…`; the base-path prepend is exercised on the deployed `/var-log/` site — sanity-check the href in devtools shows `basepath + url`).
- Navigating to another page (SPA) and pressing Ctrl/Cmd+K still opens search (no stale/duplicate handlers).

- [ ] **Step 4: Point CI at the new build command**

Edit `.github/workflows/deploy.yml`, the "Build Quartz" step (line ~46):
```yaml
      - name: Build Quartz
        run: npm run build:site
```
(was `run: npx quartz build`). The `pagefind` binary is installed by the existing `npm ci` step
since it is a devDependency. Plugins are already installed by the prior `npx quartz plugin install`
step, so the broken `prebuild` hook is irrelevant here (and `build:site` doesn't trigger it anyway).

- [ ] **Step 5: Type/style gate**

Run:
```bash
npm run check
```
Expected: passes (tsc has no opinion on `local-plugins` JS; prettier covers the new files and `pagefind.yml`).

- [ ] **Step 6: Commit**

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: build pagefind index in deploy workflow"
```

- [ ] **Step 7: Stop — do not push**

Report completion to the user. Pushing `v5` triggers a production deploy; merging/pushing requires explicit user approval (see superpowers:finishing-a-development-branch).

---

## Self-Review notes (for the author)

- **Spec coverage:** indexing (Task 1), component manifest (Task 2), markup/CSS (Task 3), client script (Task 4), config swap (Task 5), CI + verification (Task 6). All spec sections mapped.
- **Base-path risk:** handled in `resultUrl` (Task 4) and verified in Task 6 steps 2–3.
- **Async-IIFE constraint:** respected — no top-level `await` in the client script.
- **Open implementation seam:** Pagefind record title fallback (Task 6 Step 2) — only act if the title is empty.
- **Vendored files:** none edited; scoping is via `pagefind.yml`.
