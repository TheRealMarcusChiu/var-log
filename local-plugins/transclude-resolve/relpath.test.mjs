// Focused regression test for transclude-resolve href rewriting.
// Drives the REAL plugin transformer over a fake hast tree.
import assert from "node:assert"
import TranscludeResolve from "./dist/index.js"

const allSlugs = ["index", "16/index", "what-in-the-world/index"]

// Run the plugin's html transformer against a single internal-link <a>.
function rewriteHref(curSlug, bareTarget) {
  const node = {
    type: "element",
    tagName: "a",
    properties: {
      className: ["internal", "internal-link"],
      "data-slug": bareTarget,
      href: "PLACEHOLDER",
    },
    children: [],
  }
  const tree = { type: "root", children: [node] }
  const transformer = TranscludeResolve().htmlPlugins({ allSlugs })[0]()
  transformer(tree, { data: { slug: curSlug } })
  return node.properties.href
}

// From the ROOT index page (/var-log/index.html), a link to folder-note 16
// must stay inside /var-log → "./16/". An extra "../" escapes the base path.
assert.strictEqual(rewriteHref("index", "16"), "./16/", "root index link must not escape base path")

// From a one-level-deep folder note, "../16/" is correct (unchanged behavior).
assert.strictEqual(rewriteHref("what-in-the-world/index", "16"), "../16/", "sub-page sibling link")

console.log("OK: transclude-resolve relPath")
