// Builds the page from window.SITE (defined in content.js).
// You shouldn't need to edit this file to change what the site says.

(function () {
  const site = window.SITE;
  const GITHUB_USER = "TJFM4";
  const $ = (id) => document.getElementById(id);
  const visible = (item) => item.show !== false;

  // Build an element; text is always set as text, never parsed as HTML.
  function el(tag, attrs, ...children) {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs || {})) {
      if (value) node.setAttribute(key, value);
    }
    for (const child of children) {
      if (child) node.append(child);
    }
    return node;
  }

  function link(text, url) {
    const external = /^https?:/.test(url);
    return el("a", { href: url, target: external ? "_blank" : "", rel: external ? "noopener" : "" }, text);
  }

  // A paragraph whose text may contain [words](https://url) links.
  function para(text, attrs) {
    const node = el("p", attrs);
    const pattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
    let last = 0;
    for (const m of text.matchAll(pattern)) {
      node.append(text.slice(last, m.index), link(m[1], m[2]));
      last = m.index + m[0].length;
    }
    node.append(text.slice(last));
    return node;
  }

  // Optional longer write-up behind a "More" toggle; null when empty.
  function details(paragraphs) {
    const text = (paragraphs || []).filter((p) => p && p.trim());
    if (!text.length) return null;
    return el("details", { class: "details" },
      el("summary", {}, "More"),
      ...text.map((p) => para(p)),
    );
  }

  // Header
  document.title = site.name;
  $("name").textContent = site.name;
  $("tagline").textContent = site.tagline || "";
  for (const l of (site.links || []).filter(visible)) {
    $("links").append(link(l.label, l.url));
  }

  // Highlight: one featured project with its explanation always shown
  const h = site.highlight;
  if (h && visible(h) && h.title) {
    const explanation = (h.explanation || []).filter((p) => p && p.trim());
    $("highlight").append(
      h.label ? el("p", { class: "label" }, h.label) : "",
      el("h3", {}, h.url ? link(h.title, h.url) : h.title),
      h.desc ? el("p", { class: "lede" }, h.desc) : "",
      explanation.length ? el("div", { class: "prose" }, ...explanation.map((p) => para(p))) : "",
      h.url ? el("p", { class: "more-link" }, link(h.linkText || "Learn more", h.url)) : "",
    );
  } else {
    $("highlight-section").hidden = true;
  }

  // About
  const about = (site.about || []).filter(Boolean);
  if (about.length) {
    for (const p of about) $("about").append(para(p));
  } else {
    $("about-section").hidden = true;
  }

  // Code, grouped by task
  for (const group of (site.repoGroups || []).filter(visible)) {
    const repos = (group.repos || []).filter(visible);
    if (!repos.length) continue;

    const list = el("ul", { class: "items" });
    for (const r of repos) {
      const url = r.url || `https://github.com/${GITHUB_USER}/${r.repo}`;
      list.append(el("li", { class: "item" },
        el("h4", {}, link(r.name || r.repo, url)),
        r.desc ? para(r.desc) : null,
        details(r.details),
      ));
    }

    $("repo-groups").append(el("div", { class: "group" },
      el("h3", {}, group.title),
      group.blurb ? el("p", { class: "blurb" }, group.blurb) : null,
      list,
    ));
  }

  // Additional projects (private repos and non-code work)
  const other = (site.additionalProjects || []).filter(visible);
  if (other.length) {
    for (const p of other) {
      const meta = [p.role, p.date].filter(Boolean).join(" · ");
      $("other").append(el("li", { class: "item" },
        el("h4", {}, p.url ? link(p.title, p.url) : p.title),
        meta ? el("p", { class: "meta" }, meta) : null,
        p.desc ? para(p.desc) : null,
        details(p.details),
      ));
    }
  } else {
    $("other-section").hidden = true;
  }

  $("footer").textContent = site.footer || "";
})();
