import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        "blog-preview-card": resolve(__dirname, 'Blog-Preview-Card/index.html'),
        "four-card-feature-section": resolve(__dirname, 'Four-Card-Feature-Section/index.html'),
        "product-preview-card-component": resolve(__dirname, 'Product-Preview-Card-Component/index.html'),
        "qr-code-component": resolve(__dirname, 'QR-Code-Component/index.html'),
        "recipe-page": resolve(__dirname, 'Recipe-Page/index.html'),
        "social-links-profile": resolve(__dirname, 'Social-Links-Profile/index.html'),
        "testimonials-grid-section": resolve(__dirname, 'Testimonials-Grid-Section/index.html'),
        "article-preview-component": resolve(__dirname, 'Article-Preview-Component/index.html')
      }
    }
  }
});