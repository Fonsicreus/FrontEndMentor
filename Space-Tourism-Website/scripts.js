// =========================================================================
// Image Asset Imports
// =========================================================================

import anoushehAnsariPng from "./assets/crew/image-anousheh-ansari.png";
// Crew Member Images
import douglasHurleyPng from "./assets/crew/image-douglas-hurley.png";
import markShuttleworthPng from "./assets/crew/image-mark-shuttleworth.png";
import victorGloverPng from "./assets/crew/image-victor-glover.png";
import europaPng from "./assets/destination/image-europa.png";
import marsPng from "./assets/destination/image-mars.png";
import moonPng from "./assets/destination/image-moon.png";
import titanPng from "./assets/destination/image-titan.png";
// Technology Images
import launchVehiclePortrait from "./assets/technology/image-launch-vehicle-portrait.jpg";
import spaceCapsulePortrait from "./assets/technology/image-space-capsule-portrait.jpg";
import spaceportPortrait from "./assets/technology/image-spaceport-portrait.jpg";
// Destination Planet Images
import spaceData from "./data.json" with { type: "json" };

// Grouped Assets Object for easier runtime selection
const images = {
  destination: {
    moon: { png: moonPng },
    mars: { png: marsPng },
    europa: { png: europaPng },
    titan: { png: titanPng },
  },
  crew: {
    douglasHurley: { png: douglasHurleyPng },
    markShuttleworth: { png: markShuttleworthPng },
    victorGlover: { png: victorGloverPng },
    anoushehAnsari: { png: anoushehAnsariPng },
  },
  technology: {
    launchVehicle: { portrait: launchVehiclePortrait },
    spaceport: { portrait: spaceportPortrait },
    spaceCapsule: { portrait: spaceCapsulePortrait },
  },
};

// =========================================================================
// Code
// =========================================================================

const mainContainer = document.querySelector("#main-container");
const sectionHome = document.querySelector("#home");
const sectionDestination = document.querySelector("#destination");

// Function to show the selected section
function showSection() {
  const buttonHome = document.querySelector("#button-home");
  const buttonDestination = document.querySelector("#button-destination");
  const buttonCrew = document.querySelector("#button-crew");
  const buttonTechnology = document.querySelector("#button-techonology");

  const sectionCrew = document.querySelector("#crew");
  const sectionTechnology = document.querySelector("#technology");

  buttonHome.addEventListener("click", () => {
    mainContainer.classList.add("bg-home");
    mainContainer.classList.remove("bg-destination", "bg-crew", "bg-technology");

    sectionHome.classList.remove("hidden");
    sectionHome.classList.add("flex");

    sectionDestination.classList.add("hidden");
    sectionDestination.classList.remove("flex");

    sectionCrew.classList.add("hidden");
    sectionCrew.classList.remove("flex");

    sectionTechnology.classList.add("hidden");
    sectionTechnology.classList.remove("flex");
  });

  buttonDestination.addEventListener("click", () => {
    mainContainer.classList.add("bg-destination");
    mainContainer.classList.remove("bg-home", "bg-crew", "bg-technology");

    sectionHome.classList.add("hidden");
    sectionHome.classList.remove("flex");

    sectionDestination.classList.remove("hidden");
    sectionDestination.classList.add("flex");

    sectionCrew.classList.add("hidden");
    sectionCrew.classList.remove("flex");

    sectionTechnology.classList.add("hidden");
    sectionTechnology.classList.remove("flex");
  });

  buttonCrew.addEventListener("click", () => {
    mainContainer.classList.add("bg-crew");
    mainContainer.classList.remove("bg-home", "bg-destination", "bg-technology");

    sectionHome.classList.add("hidden");
    sectionHome.classList.remove("flex");

    sectionDestination.classList.add("hidden");
    sectionDestination.classList.remove("flex");

    sectionCrew.classList.remove("hidden");
    sectionCrew.classList.add("flex");

    sectionTechnology.classList.add("hidden");
    sectionTechnology.classList.remove("flex");
  });

  buttonTechnology.addEventListener("click", () => {
    mainContainer.classList.add("bg-technology");
    mainContainer.classList.remove("bg-home", "bg-destination", "bg-crew");

    sectionHome.classList.add("hidden");
    sectionHome.classList.remove("flex");

    sectionDestination.classList.add("hidden");
    sectionDestination.classList.remove("flex");

    sectionCrew.classList.add("hidden");
    sectionCrew.classList.remove("flex");

    sectionTechnology.classList.remove("hidden");
    sectionTechnology.classList.add("flex");
  });
}

// Explore button
function exploreButton() {
  const buttonExplore = document.querySelector("#explore");
  buttonExplore.addEventListener("click", () => {
    mainContainer.classList.add("bg-destination");
    mainContainer.classList.remove("bg-home", "bg-crew", "bg-technology");

    sectionHome.classList.add("hidden");
    sectionHome.classList.remove("flex");

    sectionDestination.classList.remove("hidden");
    sectionDestination.classList.add("flex");

    sectionCrew.classList.add("hidden");
    sectionCrew.classList.remove("flex");

    sectionTechnology.classList.add("hidden");
    sectionTechnology.classList.remove("flex");
  });
}

// Destination Section
function updateDestination(planetName) {
  if (!spaceData) return;

  const planet = spaceData.destinations.find((d) => d.name.toLowerCase() === planetName.toLowerCase());

  if (!planet) return;

  const destinationName = document.querySelector("#destination-name");
  const destinationDescription = document.querySelector("#destination-description");
  const destinationDistance = document.querySelector("#destination-distance");
  const destinationTravel = document.querySelector("#destination-travel");
  const destinationImage = document.querySelector("#destination-image");

  destinationName.textContent = planet.name;
  destinationDescription.textContent = planet.description;
  destinationDistance.textContent = planet.distance;
  destinationTravel.textContent = planet.travel;

  if (destinationImage) {
    const planetKey = planet.name.toLowerCase();
    // Use the bundled image from our imports if available, otherwise fall back to the path in JSON
    destinationImage.src = images.destination[planetKey]?.png || planet.images.png;
    destinationImage.alt = planet.name;
  }

  // Update active tab styles
  const tabs = document.querySelectorAll("#destination button");
  tabs.forEach((tab) => {
    if (tab.textContent.trim().toLowerCase() === planetName.toLowerCase()) {
      tab.className = "text-white border-b-2 border-white pb-2 hover:cursor-pointer uppercase";
    } else {
      tab.className = "text-gray-400 hover:text-white hover:border-b-2 hover:border-white/50 pb-2 hover:cursor-pointer uppercase";
    }
  });
}

function setupDestinationTabs() {
  const tabs = document.querySelectorAll("#destination button");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const planetName = tab.textContent.trim();
      updateDestination(planetName);
    });
  });
}

// Crew Section
function updateCrew(index) {
  if (!spaceData?.crew[index]) return;

  const member = spaceData.crew[index];

  const crewRole = document.querySelector("#crew-role");
  const crewName = document.querySelector("#crew-name");
  const crewBio = document.querySelector("#crew-bio");
  const crewImage = document.querySelector("#crew-image");

  if (crewRole) crewRole.textContent = member.role;
  if (crewName) crewName.textContent = member.name;
  if (crewBio) crewBio.textContent = member.bio;

  if (crewImage) {
    const nameKey = member.name.replace(/\s+/g, "").replace(/^\w/, (c) => c.toLowerCase());
    crewImage.src = images.crew[nameKey]?.png || member.images.png;
    crewImage.alt = member.name;
  }

  // Update dots styling
  const dots = document.querySelectorAll('#crew button[aria-label^="Crew member"]');
  dots.forEach((dot, idx) => {
    if (idx === index) {
      dot.className = "w-[15px] h-[15px] rounded-full bg-white hover:cursor-pointer";
    } else {
      dot.className = "w-[15px] h-[15px] rounded-full bg-white/20 hover:bg-white/50 hover:cursor-pointer";
    }
  });
}

function setupCrewDots() {
  const dots = document.querySelectorAll('#crew button[aria-label^="Crew member"]');
  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      updateCrew(idx);
    });
  });
}

// Technology Section
function updateTechnology(index) {
  if (!spaceData?.technology[index]) return;

  const tech = spaceData.technology[index];

  const techName = document.querySelector("#technology-name");
  const techDescription = document.querySelector("#technology-description");
  const techImage = document.querySelector("#technology-image");

  if (techName) techName.textContent = tech.name;
  if (techDescription) techDescription.textContent = tech.description;

  if (techImage) {
    const nameKey = tech.name.replace(/\s+/g, "").replace(/^\w/, (c) => c.toLowerCase());
    techImage.src = images.technology[nameKey]?.portrait || tech.images.portrait;
    techImage.alt = tech.name;
  }

  // Update number buttons styling
  const buttons = document.querySelectorAll("#technology button");
  buttons.forEach((btn, idx) => {
    if (idx === index) {
      btn.className =
        "w-20 h-20 rounded-full border border-white bg-white text-space-dark font-bellefair text-3xl hover:cursor-pointer flex justify-center items-center";
    } else {
      btn.className =
        "w-20 h-20 rounded-full border border-white/25 text-white font-bellefair text-3xl hover:border-white hover:cursor-pointer flex justify-center items-center";
    }
  });
}

function setupTechnologyButtons() {
  const buttons = document.querySelectorAll("#technology button");
  buttons.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      updateTechnology(idx);
    });
  });
}

function setupMobileMenu() {
  const menuToggle = document.querySelector("#menu-toggle");
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector("#navbar");

  if (!menuToggle || !menuIcon || !navbar) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = navbar.classList.contains("translate-x-0");
    if (isOpen) {
      navbar.classList.add("translate-x-full");
      navbar.classList.remove("translate-x-0");
      menuIcon.src = "./assets/shared/icon-hamburger.svg";
      menuIcon.alt = "menu";
    } else {
      navbar.classList.remove("translate-x-full");
      navbar.classList.add("translate-x-0");
      menuIcon.src = "./assets/shared/icon-close.svg";
      menuIcon.alt = "close";
    }
  });

  const navButtons = navbar.querySelectorAll("button");
  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      navbar.classList.add("translate-x-full");
      navbar.classList.remove("translate-x-0");
      menuIcon.src = "./assets/shared/icon-hamburger.svg";
      menuIcon.alt = "menu";
    });
  });
}

function init() {
  showSection();
  exploreButton();
  setupDestinationTabs();
  setupCrewDots();
  setupTechnologyButtons();
  setupMobileMenu();

  // Default
  updateDestination("Moon");
  updateCrew(0);
  updateTechnology(0);
}

init();
