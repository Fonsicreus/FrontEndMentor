const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const navMenu = document.getElementById("nav-menu");
const menuOverlay = document.getElementById("menu-overlay");

menuOpen.addEventListener("click", () => {
  navMenu.classList.add("active");
  menuOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
});

menuClose.addEventListener("click", () => {
  navMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
});

menuOverlay.addEventListener("click", () => {
  navMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
});
