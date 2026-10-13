# TJFM4.github.io

Personal homepage, live at https://tjfm4.github.io/.

## Editing

All the text lives in **`content.js`**. Open it, change what you want, then:

```
git add -A && git commit -m "Update site" && git push
```

GitHub Pages republishes within about a minute.

You can also edit `content.js` straight on github.com (pencil icon) and commit there.

- **New repo:** add a `{ repo: "...", name: "...", desc: "...", show: true },` line to a group.
- **New category:** copy a whole `{ title: ..., repos: [ ... ] },` block.
- **Private repo or non-code work:** add it to `additionalProjects`.
- **Hide something:** set `show: false`.

To preview locally before pushing, run `python3 -m http.server` in this folder
and open http://localhost:8000.

## Files

- `content.js`: everything the site says
- `index.html`, `render.js`, `style.css`: layout and styling
