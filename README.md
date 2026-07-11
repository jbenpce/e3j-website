# E3J — Website (e3j.xyz)

A static website for E3J, built with [Astro](https://astro.build/). It mirrors
the Infinita design system ([infinita.one](https://infinita.one)) — same
palette, type, and layout — with minimal copy and links back to Infinita.

> **Note:** this site lives on the `claude/e3j-website-rebuild-iemkpu` branch
> of the Infinita-website repository. Do **not** merge it into `main` (that
> would replace the infinita.one site). To go live, move this branch into its
> own repository (e.g. `jbenpce/e3j-website`), enable GitHub Pages there, and
> point the `e3j.xyz` DNS at it — `public/CNAME` is already set to `e3j.xyz`.

## Develop

```bash
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  layouts/Layout.astro       # shared <head>, header, footer wrapper
  components/Header.astro    # sticky nav (responsive) + Infinita link
  components/Footer.astro
  pages/index.astro          # Home
  pages/about.astro          # About
  pages/contact.astro        # Contact (correspondence via Infinita)
  styles/global.css          # design tokens + base styles (Infinita system)
public/                      # favicon.svg, CNAME (e3j.xyz)
```

## Design tokens

Colors and type live as CSS custom properties at the top of
`src/styles/global.css` (`--ink`, `--paper`, `--gold`, fonts, spacing) and are
identical to the Infinita site. Adjust there to retheme globally.
