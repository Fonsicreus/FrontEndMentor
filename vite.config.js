import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "blog-preview-card": resolve(__dirname, "Blog-Preview-Card/index.html"),
        "four-card-feature-section": resolve(__dirname, "Four-Card-Feature-Section/index.html"),
        "product-preview-card-component": resolve(__dirname, "Product-Preview-Card-Component/index.html"),
        "qr-code-component": resolve(__dirname, "QR-Code-Component/index.html"),
        "recipe-page": resolve(__dirname, "Recipe-Page/index.html"),
        "social-links-profile": resolve(__dirname, "Social-Links-Profile/index.html"),
        "testimonials-grid-section": resolve(__dirname, "Testimonials-Grid-Section/index.html"),
        "article-preview-component": resolve(__dirname, "Article-Preview-Component/index.html"),
        "newsletter-sign-up-form": resolve(__dirname, "Newsletter-sign-up-form-with-success-message/index.html"),
        "time-tracking-dashboard": resolve(__dirname, "Time-Tracking-Dashboard-Main/index.html"),
        "tip-calculator-app": resolve(__dirname, "Tip-Calculator-App/index.html"),
        "interactive-rating-component": resolve(__dirname, "Interactive-Rating-Component/index.html"),
      },
    },
  },
});
