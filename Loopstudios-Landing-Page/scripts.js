const hamburgerMenu = document.getElementById("hamburger-menu");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

hamburgerMenu.addEventListener("click", () => {
  mobileMenu.classList.add("max-xl:flex");
  mobileMenu.classList.remove("max-xl:hidden");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("max-xl:hidden");
  mobileMenu.classList.remove("max-xl:flex");
});
