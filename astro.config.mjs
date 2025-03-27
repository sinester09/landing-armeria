// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://sinester09.github.io',
  base: '/landing-armeria',
   build: {
    assets: true, // Asegura que los assets se manejen correctamente
  },
  vite: {
    build: {
      assetsInlineLimit: 0 // Previene la incrustación de imágenes como base64
    }
  }
});
