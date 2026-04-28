document.addEventListener("DOMContentLoaded", () => {
  const description = document.querySelectorAll(".description");
  const togglesAdd = document.querySelectorAll(".toggle-icon-add");
  const togglesRemove = document.querySelectorAll(".toggle-icon-remove");

  togglesAdd.forEach((toggle, i) => {
    toggle.addEventListener("click", () => {
      console.log("Hola");
      toggle.classList.add("hidden");
      togglesRemove[i].classList.remove("hidden");
      description[i].classList.remove("hidden");
    });
  });

  togglesRemove.forEach((toggle, i) => {
    toggle.addEventListener("click", () => {
      toggle.classList.add("hidden");
      togglesAdd[i].classList.remove("hidden");
      description[i].classList.add("hidden");
    });
  });
});
