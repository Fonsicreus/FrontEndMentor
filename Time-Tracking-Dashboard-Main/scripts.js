const timeFrameLabels = {
  daily: "Yesterday",
  weekly: "Last Week",
  monthly: "Last Month",
};

let currentData = [];
const timeFrameSelected = document.querySelectorAll(".timeframe p");

init();

async function init() {
  try {
    const response = await fetch("./data.json");
    currentData = await response.json();

    updateDashboard("weekly");
    timeFrameSelected[1].classList.add("active");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function updateDashboard(timeframe) {
  currentData.forEach((activity) => {
    const activityClassName = activity.title.toLowerCase().replace(" ", "-");
    const card = document.querySelector(`.activity-card.${activityClassName}`);

    if (card) {
      const timeElement = card.querySelector(".activity-time");
      const previousElement = card.querySelector(".activity-previous");

      const { current, previous } = activity.timeframes[timeframe];

      timeElement.textContent = `${current}hrs`;
      previousElement.textContent = `${timeFrameLabels[timeframe]} - ${previous}hrs`;
    }
  });
}

timeFrameSelected.forEach((element) => {
  element.addEventListener("click", () => {
    const timeframe = element.textContent.toLowerCase();

    timeFrameSelected.forEach((btn) => btn.classList.remove("active"));
    element.classList.add("active");

    updateDashboard(timeframe);
  });
});
