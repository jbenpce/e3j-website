import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://infinita.one',
  build: {
    inlineStylesheets: 'auto',
  },
});
