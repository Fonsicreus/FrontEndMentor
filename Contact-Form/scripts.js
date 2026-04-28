const color = getComputedStyle(document.documentElement).getPropertyValue("--red");
const queryOptions = document.querySelectorAll(".query-option");
const messageTextarea = document.getElementById("message");
let queryType = false;

queryOptions.forEach((option) => {
  option.addEventListener("click", () => {
    queryOptions.forEach((opt) => opt.classList.remove("active"));
    option.classList.add("active");
    queryType = true;
  });
});

messageTextarea.addEventListener("input", function () {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
});

document.querySelector(".submit-btn").addEventListener("click", (event) => {
  event.preventDefault();
  let validate = true;
  const inputs = document.querySelectorAll("input, textarea");
  const checkBox = document.getElementById("consent");
  document.querySelectorAll(".error-text").forEach((errorText) => errorText.remove());

  inputs.forEach((input) => {
    if (input.type === "checkbox") return;

    input.style.borderColor = "";

    if (input.id !== "email") {
      if (input.value.trim() === "") {
        validate = false;
        input.style.borderColor = color;

        const error = document.createElement("div");
        error.classList.add("error-text");
        error.textContent = "This field is required";
        error.style.color = color;
        error.style.padding = "8px 0px 0px 0px";
        input.insertAdjacentElement("afterend", error);
      }
    } else {
      const email = input.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (email === "" || !emailRegex.test(email)) {
        validate = false;
        input.style.borderColor = color;

        const error = document.createElement("div");
        error.classList.add("error-text");
        error.textContent = "Please enter a valid email adress";
        error.style.color = color;
        error.style.padding = "5px 0px 0px 0px";
        input.insertAdjacentElement("afterend", error);
      }
    }
  });

  if (!checkBox.checked) {
    validate = false;
    const error = document.createElement("div");
    error.classList.add("error-text");
    error.textContent = "To submit this form, you must consent to being contacted.";
    error.style.color = color;
    error.style.padding = "10px 0px 0px 0px";
    document.querySelector(".consent-group").insertAdjacentElement("afterend", error);
  }

  if (!queryType) {
    validate = false;
    const error = document.createElement("div");
    error.classList.add("error-text");
    error.textContent = "Please select a query type";
    error.style.color = color;
    error.style.padding = "10px 0px 0px 0px";
    document.querySelector(".query-row").insertAdjacentElement("afterend", error);
  }

  if (validate) {
    document.getElementById("success-banner").style.display = "block";
    document.getElementById("contact-form").reset();
    queryOptions.forEach((opt) => opt.classList.remove("active"));
    queryType = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
