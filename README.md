# E3J — Website (e3j.xyz)

A static website for E3J, built with [Astro](https://astro.build/). It mirrors
the Infinita design system ([infinita.one](https://infinita.one)) — same
palette, type, and layout — with minimal copy and links back to Infinita.

> **Note:** this site was developed on the `claude/e3j-website-rebuild-iemkpu`
> branch of the Infinita-website repository. Do **not** merge it into that
> repo's `main` (that would replace the infinita.one site). Its home is the
> standalone `jbenpce/e3j-website` repository, deployed to GitHub Pages.

## Go live (GitHub Pages + GoDaddy DNS)

1. Push this code to `main` of `jbenpce/e3j-website` — the deploy workflow
   (`.github/workflows/deploy.yml`) builds and publishes to GitHub Pages.
2. In the repo: **Settings → Pages** — set *Source* to **GitHub Actions**, and
   *Custom domain* to `e3j.xyz` (matches `public/CNAME`). Enable
   **Enforce HTTPS** once the certificate is issued.
3. In GoDaddy DNS for `e3j.xyz` (keep the domain at GoDaddy — only DNS
   records change; any GoDaddy website/forwarding product can be cancelled):
   - Remove existing `A` records for `@` and any GoDaddy forwarding/parking.
   - Add `A` records for `@` → `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`.
   - Add `CNAME` for `www` → `jbenpce.github.io`.

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
