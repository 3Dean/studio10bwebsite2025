// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://studio10b.com',
  // Base path if deploying to a subdirectory
  // base: '/my-base-path',
  integrations: [tailwind()],
  outDir: './dist',
  publicDir: './public',
 
  
  // Server options
  server: {
    host: '0.0.0.0',
    port: 3000
  },

  // Build options
  build: {
    format: 'directory',
    // Ensure JavaScript is processed correctly
  
  },
  
  // Markdown options - fixed according to Astro's expected types
  markdown: {
    syntaxHighlight: 'prism'
  },
  
  // Image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  
  // Optional: Add more integrations if needed
  // integrations: [
  //   image(),
  //   sitemap(),
  // ],
  
  // Optional: Add SSR adapter for deployment to specific platforms
  // adapter: netlify()
});