// Manifest fallback. The loader prefers package.json's `quartz` field, but a
// `manifest` export keeps this plugin self-describing if that ever changes.
export const manifest = {
  name: "content-dates",
  displayName: "Content Dates",
  description: "Show a note's created and modified dates (from frontmatter) under the title.",
  version: "1.0.0",
  category: "component",
}

export { ContentDates } from "./components/index.js"
