# Infinita — Family Office Website

A static website for the Infinita family office, built with [Astro](https://astro.build/).

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
  layouts/Layout.astro      # shared <head>, header, footer wrapper
  components/Header.astro    # sticky nav (responsive)
  components/Footer.astro
  pages/index.astro          # Home
  pages/about.astro          # About / Team
  pages/contact.astro        # Contact
  styles/global.css          # design tokens + base styles
public/                      # static assets (favicon, future logos/images)
```

## Design tokens

Colors and type live as CSS custom properties at the top of `src/styles/global.css`
(`--ink`, `--paper`, `--bronze`, fonts, spacing). Adjust there to retheme globally.

## TODO / placeholders

This is a first scaffold. Items marked with `[Placeholder]` or `NOTE:` comments
need real content:

- [ ] Replace all placeholder copy with Infinita's real messaging
- [ ] Add real team names, roles, bios, and photos (`public/`)
- [ ] Drop in the real logo / brand assets and update colors/fonts to match
- [ ] Set the real contact email and (if applicable) address
- [ ] Wire the contact form to a backend (Formspree, Netlify Forms, etc.)
- [ ] Add an OG/share image
```
