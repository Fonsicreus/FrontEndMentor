const bill = document.getElementById("bill");
const people = document.getElementById("people");
const customBtn = document.getElementById("customBtn");
const percentButtons = document.querySelectorAll(".tip-btn");
const tipAmount = document.getElementById("tip-amount");
const total = document.getElementById("total");
const resetBtn = document.getElementById("reset-btn");

let tip = 0;

function calculate() {
  const billVal = parseFloat(bill.value);
  const peopleVal = parseInt(people.value);

  if (billVal > 0 && peopleVal > 0) {
    const tipPerPerson = (billVal * (tip / 100)) / peopleVal;
    const totalPerPerson = billVal / peopleVal + tipPerPerson;

    tipAmount.textContent = "$" + tipPerPerson.toFixed(2);
    total.textContent = "$" + totalPerPerson.toFixed(2);
  } else {
    tipAmount.textContent = "$0.00";
    total.textContent = "$0.00";
  }

  if (bill.value !== "" || people.value !== "" || customBtn.value !== "" || tip > 0) {
    resetBtn.classList.add("active-btn");
  } else {
    resetBtn.classList.remove("active-btn");
  }
}

function removeActiveClasses() {
  percentButtons.forEach((btn) => btn.classList.remove("active-btn"));
}

percentButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeActiveClasses();
    e.target.classList.add("active-btn");
    customBtn.value = "";
    tip = parseFloat(e.target.textContent);
    calculate();
  });
});

customBtn.addEventListener("input", () => {
  removeActiveClasses();
  if (customBtn.value === "" || customBtn.value < 0) {
    tip = 0;
    if (customBtn.value < 0) customBtn.value = "";
  } else {
    tip = parseFloat(customBtn.value);
  }
  calculate();
});

bill.addEventListener("input", () => {
  if (bill.value < 0 && bill.value !== "") {
    bill.value = "";
  }
  if (bill.value === "0") {
    bill.style.borderColor = "red";
  } else {
    bill.style.borderColor = "";
  }
  calculate();
});

people.addEventListener("input", () => {
  const errorMsg = document.getElementById("people-error");

  if (people.value < 0 && people.value !== "") {
    people.value = "";
  }

  if (people.value === "0") {
    people.style.borderColor = "red";
    if (errorMsg) errorMsg.textContent = "Can't be zero";
  } else {
    people.style.borderColor = "";
    if (errorMsg) errorMsg.textContent = "";
  }
  calculate();
});

resetBtn.addEventListener("click", () => {
  if (resetBtn.classList.contains("active-btn")) {
    bill.value = "";
    people.value = "";
    customBtn.value = "";
    tip = 0;

    removeActiveClasses();

    bill.style.borderColor = "";
    people.style.borderColor = "";
    const errorMsg = document.getElementById("people-error");
    if (errorMsg) errorMsg.textContent = "";

    calculate();
  }
});
