# Remus Trapsa · Portfolio

My personal portfolio site: plain HTML, CSS and a little vanilla JavaScript. No framework, no build step. It's hosted on GitHub Pages.

- **Live (for now):** https://remustrapsa.github.io/my_portfolio/
- **Planned domain:** https://remustrapsa.com

## Project structure

```
├── index.html               # the whole site: hero, projects, about/skills, contact
├── 404.html                 # custom "page not found" (self-contained, inline CSS)
├── resume.pdf               # ← ADD THIS YOURSELF (see below)
├── .nojekyll                # tells GitHub Pages to serve files as-is
└── assets/
    ├── css/
    │   ├── tokens.css       # design tokens: colors, spacing, type scale, radii, motion
    │   ├── base.css         # reset, typography, focus styles, reduced-motion
    │   ├── layout.css       # container, header, hero, sections, footer
    │   └── components.css   # buttons, project cards, tags, flow diagram, skills…
    ├── js/
    │   └── main.js          # "Read more" toggles, screenshot fallbacks, footer year
    └── img/
        ├── favicon.svg, favicon-32.png, apple-touch-icon.png
        ├── og-image.png     # 1200×630 link-preview image (LinkedIn, Discord…)
        └── projects/        # project screenshots / GIFs go here
```

All paths are relative, so the site works both at `/my_portfolio/` and at the root of a custom domain.

## Preview locally

Opening `index.html` directly works for a quick look, but browsers ignore the `download` attribute on `file://` pages. To test properly, serve the folder over HTTP from the VS Code terminal:

```powershell
npx serve .            # needs Node.js, then open the URL it prints
# or
python -m http.server 8000   # then open http://localhost:8000
```

(The VS Code "Live Server" extension works too.)

## Things to fill in

| What | Where |
|---|---|
| **Resume** | Save your PDF as `resume.pdf` in the **root** of the repo (next to `index.html`). Both "Download resume" buttons point to it and save it as `Remus_Trapsa_Resume.pdf`. |
| **LinkedIn URL** | In `index.html`, search for `TODO(LinkedIn)`. There are two links; replace `https://www.linkedin.com/in/your-handle/` in both. |
| **ResolvePR repo** | Search for `TODO(ResolvePR repo)`, uncomment the `<a>` and delete the "Repo coming soon" `<span>`. |
| **Screenshots** | Add `assets/img/projects/resolvepr.png` and `assets/img/projects/bolt-calculator.png`. Until a file exists, the card shows a pixel placeholder automatically. |

Screenshot tips: use a 16:10 ratio (e.g. 1280×800). PNG, JPG, WebP and GIF all work. If you use a different file name or extension, update the `src` in the card. Keep files under ~300 KB, and for GIFs consider a short MP4/WebM instead to keep the page fast.

## How to add a new project

Each project is one self-contained `<article class="project-card">` block inside `<div class="project-list">` in `index.html`. Cards appear in the order they're written.

1. **Copy** an existing card. The Bolt Length Calculator card is the simplest one to copy.
2. **Pick a short id** for the project, e.g. `snake`, and use it in the four places that need to be unique:
   - `aria-labelledby="snake-title"` on the `<article>`
   - `id="snake-title"` on the `<h3>`
   - `data-expand="snake-more" aria-controls="snake-more"` on the Read more button
   - `id="snake-more"` on the `project-card__more` div
3. **Edit the content**: meta line, title, one-line pitch, 2–3 highlights, tech tags and links.
4. **Add a screenshot** at `assets/img/projects/snake.png` and update the `<img>`'s `src` and `alt`. The `alt` should describe what the screenshot shows.
5. Remove anything you don't need. If there's no extra detail, delete the Read more button **and** the `project-card__more` div together.

Template:

```html
<article class="project-card" aria-labelledby="snake-title">
  <figure class="project-card__media" data-placeholder="Screenshot coming soon">
    <img src="assets/img/projects/snake.png" alt="DESCRIBE THE SCREENSHOT" width="1280" height="800" loading="lazy" decoding="async">
  </figure>

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

## Changing the look

All colors, spacing, font sizes, radii and animation timings live in `assets/css/tokens.css`. For example, change `--color-accent` to re-theme the whole site. If you change colors, also update the copies at the top of `404.html`, because that page inlines its styles so it works at any URL.

Animations respect `prefers-reduced-motion`.

## Deploying with GitHub Pages

### 1. Turn on Pages (do this now)

1. On GitHub, open the **my_portfolio** repo → **Settings** → **Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Set **Branch** to `main` and the folder to `/ (root)`, then click **Save**.
4. After a minute or two the site is live at **https://remustrapsa.github.io/my_portfolio/**. The Actions tab shows the "pages build and deployment" run.

Pages on a free account needs the repo to be **public**.

### 2. After you buy remustrapsa.com

Do the steps in this order: DNS first, then GitHub.

**a) Verify the domain (recommended, protects against domain takeover).**
GitHub → your profile picture → **Settings** → **Pages** → **Add a domain** → enter `remustrapsa.com`. GitHub shows a `TXT` record. Add it at your registrar, wait, then click **Verify**.

**b) Add these DNS records at your registrar.** Delete any existing default `A`/`AAAA`/`CNAME` "parking" records for `@` and `www` first.

| Type  | Host / Name | Value |
|-------|-------------|-------|
| A     | `@`         | `185.199.108.153` |
| A     | `@`         | `185.199.109.153` |
| A     | `@`         | `185.199.110.153` |
| A     | `@`         | `185.199.111.153` |
| AAAA  | `@`         | `2606:50c0:8000::153` |
| AAAA  | `@`         | `2606:50c0:8001::153` |
| AAAA  | `@`         | `2606:50c0:8002::153` |
| AAAA  | `@`         | `2606:50c0:8003::153` |
| CNAME | `www`       | `remustrapsa.github.io` |

Some registrars write `@` as blank or as `remustrapsa.com`. TTL can stay at the default. The `www` CNAME points at your **user** domain, with no `/my_portfolio`. DNS can take from a few minutes to 24 hours to update. Check from PowerShell:

```powershell
Resolve-DnsName remustrapsa.com -Type A
Resolve-DnsName www.remustrapsa.com
```

**c) Connect it in the repo.** In the repo, go to **Settings** → **Pages** → **Custom domain**, enter `remustrapsa.com` and click **Save**. GitHub commits a `CNAME` file containing `remustrapsa.com` to `main` for you, so run `git pull` afterwards. (Or create that file yourself and push it, then enter the domain in settings.)

**d) Turn on HTTPS.** Once the DNS check passes (the certificate can take up to an hour), tick **Enforce HTTPS**.

**e) Update the absolute URLs.** Link-preview tags need full URLs. In `index.html`, find the `SITE_URL` comment and replace `https://remustrapsa.github.io/my_portfolio/` with `https://remustrapsa.com/` in the `canonical`, `og:url`, `og:image` and `twitter:image` tags. Commit and push.

The `github.io` address will then redirect to the custom domain automatically.

### Testing the link preview

After deploying, paste the URL into the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) to see (and refresh) the preview card. Discord caches previews for a while, so a changed image may take time to show.
