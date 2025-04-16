// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import logoAnimation from './src/integrations/astro-logo-animation.js';

// https://astro.build/config
export default defineConfig({
  site: 'https://studio10b.com',
  integrations: [tailwind(), logoAnimation(), mdx()],
  outDir: './dist',
  publicDir: './public',
  
  // Change from 'server' to 'static'
  output: 'static',
  
  // Server options
  server: {
    host: '0.0.0.0',
    port: 3000
  },

  // Build options
  build: {
    format: 'directory',
  },
  
  // Markdown options
  markdown: {
    syntaxHighlight: 'prism'
  },
  
  // Image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});