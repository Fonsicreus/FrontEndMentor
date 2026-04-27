let rating;
const btnRating = document.querySelectorAll(".btn-rating");

btnRating.forEach((botonRating) => {
  botonRating.addEventListener("click", () => {
    btnRating.forEach((btn) => {
      btn.style.backgroundColor = "";
    });
    rating = botonRating.textContent;
    botonRating.style.backgroundColor = "white";
  });
});

document.querySelector(".btn-submit").addEventListener("click", () => {
  if (rating != undefined) {
    document.getElementById("selected-rating").textContent = rating;
    document.getElementById("rating-state").classList.add("hidden");
    document.getElementById("thank-you-state").classList.remove("hidden");
  }
});
