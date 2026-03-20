import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        "blog-preview-card": resolve(__dirname, 'Blog preview card/index.html'),
        "four-card-feature-section": resolve(__dirname, 'Four Card Feature Section/index.html'),
        "product-preview-card-component": resolve(__dirname, 'Product Preview Card Component/index.html'),
        "qr-code-component": resolve(__dirname, 'QR code component/index.html'),
        "recipe-page": resolve(__dirname, 'Recipe page/index.html'),
        "social-links-profile": resolve(__dirname, 'Social links profile/index.html'),
        "testimonials-grid-section": resolve(__dirname, 'Testimonials Grid Section/index.html'),
      }
    }
  }
});