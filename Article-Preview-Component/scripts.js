const customProperties = getComputedStyle(document.documentElement);
const shareButton = document.querySelector(".share-icon");
let shareMenu = false;

shareButton.addEventListener("click", () => {
  const shareIconContainer = document.querySelector(".share-icon");
  const socialsContainer = document.querySelector(".socials-container");

  if (!window.matchMedia("(min-width: 800px)").matches) {
    const socials = document.querySelector(".socials");
    const avatar = socials.querySelector("#avatar");
    const subcontainer = document.querySelector(".subcontainer");

    if (shareMenu === false) {
      socials.style.backgroundColor = customProperties.getPropertyValue("--very-dark-grayish-blue");
      shareIconContainer.style.setProperty(
        "background-color",
        customProperties.getPropertyValue("--light-grayish-blue"),
        "important",
      );
      avatar.style.display = "none";
      subcontainer.style.display = "none";
      socialsContainer.style.display = "flex";
      shareMenu = true;
    } else {
      socials.style.backgroundColor = "white";
      shareIconContainer.style.setProperty(
        "background-color",
        customProperties.getPropertyValue("--grayish-blue"),
        "important",
      );
      avatar.style.display = "block";
      subcontainer.style.display = "block";
      socialsContainer.style.display = "none";
      shareMenu = false;
    }
  } else {
    if (socialsContainer.style.display === "flex") {
      socialsContainer.style.display = "none";
      shareIconContainer.style.backgroundColor = customProperties.getPropertyValue("--light-grayish-blue");
      shareIconContainer.style.filter = "none";
    } else {
      socialsContainer.style.display = "flex";
      shareIconContainer.style.backgroundColor = customProperties.getPropertyValue("--desaturated-dark-blue");
    }
  }
});
