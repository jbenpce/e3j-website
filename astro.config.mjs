import { defineConfig } from 'astro/config';

// When building for the GitHub Pages preview, the site is served from a
// sub-path (https://<owner>.github.io/Infinita-website). The deploy workflow
// sets GITHUB_PAGES=true so we can apply the correct site/base there while
// keeping the production (e3j.xyz) build at the root.
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages ? 'https://jbenpce.github.io' : 'https://e3j.xyz',
  base: isGitHubPages ? '/Infinita-website' : '/',
  build: {
    inlineStylesheets: 'auto',
  },
});
