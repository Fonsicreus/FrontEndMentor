// Eagerly import all food product images so Vite processes them in the build.
// import.meta.glob with eager:true returns { './assets/images/filename.jpg': { default: resolvedUrl } }
const imageModules = import.meta.glob("./assets/images/image-*.jpg", { eager: true });

// Build a lookup map: relative path → resolved URL
// e.g. "./assets/images/image-waffle-desktop.jpg" → "/assets/image-waffle-desktop-abc123.jpg"
const images = {};
for (const [path, mod] of Object.entries(imageModules)) {
  images[path] = mod.default;
}

/**
 * Resolve a relative image path from data.json to the Vite-processed URL.
 * Falls back to the original path if not found (works fine in dev).
 */
export function resolveImage(path) {
  return images[path] || path;
}

export default images;
