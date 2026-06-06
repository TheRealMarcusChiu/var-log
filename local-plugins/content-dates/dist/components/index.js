import { h } from "preact"

// Inline CSS (collected via the component's `.css` property by Quartz's
// component-resource emitter). Kept minimal: this only positions/colors the line.
const style = `.content-meta {
  margin-top: 0;
  color: var(--darkgray);
}`

// Mirrors @quartz-community/utils/date `formatDate`: "May 14, 2026".
function formatDate(d, locale = "en-US") {
  return d.toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  })
}

// Component constructor (QuartzComponentConstructor shape). `opts` is currently
// unused — dates come straight from `fileData.dates`, populated by the
// created-modified-date plugin (frontmatter `created`/`modified` take priority).
const ContentDates = (_opts) => {
  function ContentMetadata({ cfg, fileData, displayClass }) {
    if (!fileData.text) return null

    const dates = fileData.dates
    if (!dates) return null

    const locale = cfg.locale || "en-US"
    const created = dates.created
    const modified = dates.modified

    const segments = []

    if (created) {
      const createdStr = formatDate(created, locale)
      segments.push("Created on ")
      segments.push(h("time", { datetime: created.toISOString() }, createdStr))

      if (modified) {
        const modifiedStr = formatDate(modified, locale)
        // Collapse to just "Created on …" when both render the same calendar day.
        if (modifiedStr !== createdStr) {
          segments.push(" · Last Modified on ")
          segments.push(h("time", { datetime: modified.toISOString() }, modifiedStr))
        }
      }
    } else if (modified) {
      const modifiedStr = formatDate(modified, locale)
      segments.push("Last Modified on ")
      segments.push(h("time", { datetime: modified.toISOString() }, modifiedStr))
    }

    if (segments.length === 0) return null

    const classes = [displayClass, "content-meta"].filter(Boolean).join(" ")
    return h("p", { class: classes }, segments)
  }

  ContentMetadata.css = style
  return ContentMetadata
}

export { ContentDates }
