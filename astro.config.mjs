import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  // TODO: replace with the real production URL after the first Netlify deploy
  site: 'https://ishraq-alam.netlify.app',
  integrations: [react()],
});
