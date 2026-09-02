# DSB-IFEval — Project Page

Static project page for **DuplexSpeechBench–IFEval** (vanilla HTML/CSS/JS, no build step).

## Files
```
index.html
.nojekyll                 # tells GitHub Pages to serve static/ as-is
static/css/style.css
static/js/main.js
static/images/*.png        # result figures
static/pdf/DSB-IFEval.pdf  # compiled paper
```

## Deploy to GitHub Pages
Option A — project site under an existing repo:
1. Copy the **contents of this `website/` folder** to a `docs/` folder on the `main`
   branch (or push to a `gh-pages` branch).
2. Repo → Settings → Pages → Source = that branch, folder = `/docs` (or `/root`).
3. Site publishes at `https://<user>.github.io/<repo>/`.

Option B — dedicated `<name>.github.io` repo (like the reference page):
1. Create a repo named `<user>.github.io` (or `dsb-ifeval.github.io`).
2. Push the contents of this folder to its root. Site is at `https://<name>.github.io/`.

## Before publishing, update the placeholders
- `arxiv.org/abs/XXXX.XXXXX` → real arXiv id (hero + BibTeX `eprint`).
- Confirm the Code link (`github.com/puneetm_adobe/ifevaldb`) and author URLs.
- Result tables use the current paper numbers; refresh the MiniCPM-o-4.5 row and the
  L4b/safety cells once the MiniCPM-o-4.5 rerun completes (see paper reconciliation).
