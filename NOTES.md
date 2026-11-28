# Maintenance notes

Personal notes for updating the site. The [README](README.md) is the public overview.

## Preview locally

Opening `index.html` directly works for a quick look, but browsers ignore the `download` attribute on `file://` pages. To test properly, serve the folder over HTTP from the VS Code terminal:

```powershell
npx serve .            # needs Node.js, then open the URL it prints
# or
python -m http.server 8000   # then open http://localhost:8000
```

(The VS Code "Live Server" extension works too.)

All paths are relative, so the site also works when previewed locally or at the `github.io` address.

## Resume

The resume lives at `resume.pdf` in the root of the repo. Both "Download resume" buttons point to it and save it as `Remus_Trapsa_Resume.pdf`. To update it, replace the file and keep the same name.

## How to add a new project

Each project is one self-contained `<article class="project-card">` block inside `<div class="project-list">` in `index.html`. Cards appear in the order they're written.

1. **Copy** an existing card. The Bolt Length Calculator card is the simplest one to copy.
2. **Pick a short id** for the project, e.g. `snake`, and use it in the four places that need to be unique:
   - `aria-labelledby="snake-title"` on the `<article>`
   - `id="snake-title"` on the `<h3>`
   - `data-expand="snake-more" aria-controls="snake-more"` on the Read more button
   - `id="snake-more"` on the `project-card__more` div
3. **Edit the content**: meta line, title, one-line pitch, 2–3 highlights, tech tags and links.
4. Remove anything you don't need. If there's no extra detail, delete the Read more button **and** the `project-card__more` div together.

Template:

```html
<article class="project-card" aria-labelledby="snake-title">
  <div class="project-card__body">
    <p class="project-card__meta">Personal project · Game</p>
    <h3 class="project-card__title" id="snake-title">Project name</h3>
    <p class="project-card__pitch">One-line pitch.</p>

    <ul class="project-card__highlights">
      <li>Highlight one.</li>
      <li>Highlight two.</li>
    </ul>

    <ul class="tag-list" role="list" aria-label="Tech used">
      <li class="tag">JavaScript</li>
    </ul>

    <div class="project-card__actions">
      <a class="button button--primary button--small" href="https://LIVE-DEMO-URL" target="_blank" rel="noopener noreferrer">
        <svg class="icon" aria-hidden="true"><use href="#icon-play"></use></svg>
        Try it live<span class="visually-hidden"> (opens in a new tab)</span>
      </a>
      <a class="button button--small" href="https://github.com/RemusTrapsa/REPO" target="_blank" rel="noopener noreferrer">
        <svg class="icon" aria-hidden="true"><use href="#icon-github"></use></svg>
        View code<span class="visually-hidden"> (opens in a new tab)</span>
      </a>
      <button class="button button--small" type="button" data-expand="snake-more" aria-controls="snake-more" aria-expanded="true" hidden>Read more</button>
    </div>
  </div>

  <div class="project-card__more" id="snake-more">
    <h4>How it works</h4>
    <p>Longer description.</p>
  </div>
</article>
```

Notes:
- External links keep `target="_blank" rel="noopener noreferrer"` plus the hidden "(opens in a new tab)" text for screen readers.
- Available icons (defined at the top of `<body>`): `icon-github`, `icon-linkedin`, `icon-mail`, `icon-download`, `icon-external`, `icon-play`.
- The Read more button starts `hidden` and the details start visible. `main.js` collapses them, so the content is still readable with JavaScript off.
- For a private repo, use `<span class="button button--small button--disabled" aria-disabled="true">Private repo</span>` instead of the View code link (see the ResolvePR card).

## Changing the look

All colors, spacing, font sizes, radii and animation timings live in `assets/css/tokens.css`. For example, change `--color-accent` to re-theme the whole site. If you change colors, also update the copies at the top of `404.html`, because that page inlines its styles so it works at any URL.

Animations respect `prefers-reduced-motion`.

## Deploying

The site is served by GitHub Pages from the root of the `main` branch at **https://remustrapsa.com**. Pushing to `main` redeploys it within a minute or two, and the Actions tab shows the "pages build and deployment" run.

Keep the `CNAME` file in the repo, or the site will drop back to the `github.io` address. The link-preview tags in `index.html` (`canonical`, `og:url`, `og:image`, `twitter:image`, marked by the `SITE_URL` comment) use full `https://remustrapsa.com/` URLs.

### Testing the link preview

After deploying, paste the URL into the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) to see (and refresh) the preview card. Discord caches previews for a while, so a changed image may take time to show.
