import { defineConfig } from 'astro/config';

// When building for a GitHub Pages preview without the custom domain, the
// site is served from a sub-path (https://<owner>.github.io/e3j-website).
// Set GITHUB_PAGES=true to apply the correct site/base there while keeping
// the production (e3j.xyz) build at the root.
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages ? 'https://jbenpce.github.io' : 'https://e3j.xyz',
  base: isGitHubPages ? '/e3j-website' : '/',
  build: {
    inlineStylesheets: 'auto',
  },
});
