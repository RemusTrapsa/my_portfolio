# Remus Trapsa · Portfolio

**Live site: [remustrapsa.com](https://remustrapsa.com)**

My personal portfolio, built from scratch with plain HTML, CSS and vanilla JavaScript. It has no framework and no build step, and it's hosted on GitHub Pages.

## Highlights

- **Accessible:** semantic HTML, a skip link, visible focus styles, labelled regions and screen-reader text on links that open a new tab.
- **Works without JavaScript:** the "Read more" sections are visible by default, and the script only adds the collapse toggle.
- **Respects reduced motion:** animations turn off under `prefers-reduced-motion`.
- **Design tokens:** colors, spacing, type scale and motion all live in one file (`tokens.css`), so the whole site can be re-themed from there.
- **Responsive:** the layout adapts from phone to desktop.
- **Link previews:** Open Graph and Twitter card tags with a custom preview image for LinkedIn and Discord.

## Structure

```
├── index.html              # hero, projects, about/skills, contact
├── 404.html                # custom "page not found"
├── resume.pdf
└── assets/
    ├── css/
    │   ├── tokens.css      # design tokens
    │   ├── base.css        # reset, typography, focus styles
    │   ├── layout.css      # page layout and sections
    │   └── components.css  # buttons, project cards, tags, skills
    ├── js/main.js          # "Read more" toggles, footer year
    └── img/                # favicons and link-preview image
```

## Run locally

```bash
npx serve .
# or
python -m http.server 8000
```
