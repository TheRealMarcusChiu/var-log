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

// CLIENT_SCRIPT placeholder — replaced in the next task.
const script = ``

const PagefindSearch = (_opts) => {
  function PagefindSearchComponent({ displayClass }) {
    const classes = ["search", displayClass].filter(Boolean).join(" ")
    return h("div", { class: classes }, [
      h("button", { class: "search-button", "aria-label": "Search", "aria-expanded": "false" }, [
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
      ]),
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
