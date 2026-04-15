const form = document.querySelector("form");
const button = document.querySelectorAll("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form.querySelector("input[type='email']");
  const emailValue = email.value.trim();

  if (!email.checkValidity()) {
    const error = form.querySelector(".error-message");
    error.style.display = "block";
    email.style.borderColor = "var(--red)";
    email.style.color = "var(--red)";
    return;
  }

  const boldText = document.querySelector("b");
  boldText.textContent = emailValue;

  document.querySelector(".container").style.display = "none";
  document.querySelector(".success-container").style.display = "flex";
});

button.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.style.background = "linear-gradient(-90deg, var(--red), rgba(255, 82, 121))";
  });

  btn.addEventListener("mouseout", () => {
    btn.style.background = "";
  });
});
