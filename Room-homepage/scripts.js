const slides = [
  {
    className: "hero-1",
    title: "Discover innovative ways to decorate",
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    className: "hero-2",
    title: "We are available all across the globe",
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    className: "hero-3",
    title: "Manufactured with the best materials",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

let currentSlide = 0;

const heroImage = document.getElementById("hero-image");
const heroTitle = document.getElementById("hero-title");
const heroText = document.getElementById("hero-text");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Mobile Menu Logic
const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");
const menuBackdrop = document.getElementById("menu-backdrop");

function toggleMenu(show) {
  if (show) {
    mobileMenu.classList.remove("-translate-y-full", "opacity-0", "pointer-events-none");
    menuBackdrop.classList.remove("opacity-0", "pointer-events-none");
    document.body.classList.add("overflow-hidden");
  } else {
    mobileMenu.classList.add("-translate-y-full", "opacity-0", "pointer-events-none");
    menuBackdrop.classList.add("opacity-0", "pointer-events-none");
    document.body.classList.remove("overflow-hidden");
  }
}

menuOpen.addEventListener("click", () => toggleMenu(true));
menuClose.addEventListener("click", () => toggleMenu(false));
menuBackdrop.addEventListener("click", () => toggleMenu(false));

function updateSlide() {
  const slide = slides[currentSlide];

  // Remove previous hero classes
  heroImage.classList.remove("hero-1", "hero-2", "hero-3");
  // Add new hero class
  heroImage.classList.add(slide.className);

  heroTitle.textContent = slide.title;
  heroText.textContent = slide.text;
}

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
});

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
});

// Support keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
  } else if (e.key === "ArrowRight") {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
  }
});

// Initialize first slide class
updateSlide();
