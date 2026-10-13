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

  // Header
  document.title = site.name;
  $("name").textContent = site.name;
  $("tagline").textContent = site.tagline || "";
  for (const l of (site.links || []).filter(visible)) {
    $("links").append(link(l.label, l.url));
  }

  // About
  const about = (site.about || []).filter(Boolean);
  if (about.length) {
    for (const p of about) $("about").append(el("p", {}, p));
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
        r.desc ? el("p", {}, r.desc) : null,
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
        p.desc ? el("p", {}, p.desc) : null,
      ));
    }
  } else {
    $("other-section").hidden = true;
  }

  $("footer").textContent = site.footer || "";
})();
