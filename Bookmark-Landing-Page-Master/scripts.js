import imgTab1 from "./images/illustration-features-tab-1.svg";
import imgTab2 from "./images/illustration-features-tab-2.svg";
import imgTab3 from "./images/illustration-features-tab-3.svg";

const FILTER_ORANGE = "invert(53%) sepia(85%) saturate(1634%) hue-rotate(346deg) brightness(101%) contrast(101%)";

function initTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContent = document.getElementById("tab-content");

  const tabsData = [
    {
      id: "1",
      title: "Bookmark in one click",
      desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      img: imgTab1,
    },
    {
      id: "2",
      title: "Intelligent search",
      desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      img: imgTab2,
    },
    {
      id: "3",
      title: "Share your bookmarks",
      desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      img: imgTab3,
    },
  ];

  function setTabActive(btn) {
    tabBtns.forEach((b) => {
      b.style.color = "";
      const indicator = b.querySelector("span");
      if (indicator) indicator.style.transform = "scaleX(0)";
    });
    btn.style.color = "var(--color-blue-950)";
    const indicator = btn.querySelector("span");
    if (indicator) indicator.style.transform = "scaleX(1)";
  }

  function updateTab(tabId) {
    const data = tabsData.find((t) => t.id === tabId);
    if (!data) return;

    const panel = document.createElement("div");
    panel.classList.add("flex", "flex-col", "md:flex-row", "items-center", "gap-16", "md:gap-32");
    panel.style.animation = "fadeIn 0.5s ease-in-out";

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("md:w-1/2", "relative");

    const img = document.createElement("img");
    img.src = data.img;
    img.alt = data.title;
    img.classList.add("relative", "z-10");

    const bgShape = document.createElement("div");
    bgShape.classList.add(
      "absolute",
      "-left-96",
      "top-36",
      "w-[120%]",
      "h-[80%]",
      "bg-blue-600",
      "rounded-r-full",
      "z-0",
    );

    imgContainer.appendChild(img);
    imgContainer.appendChild(bgShape);

    const textContainer = document.createElement("div");
    textContainer.classList.add("md:w-1/2", "text-center", "md:text-left");

    const title = document.createElement("h3");
    title.classList.add("text-3xl", "font-medium", "mb-6");
    title.textContent = data.title;

    const desc = document.createElement("p");
    desc.classList.add("text-grey-500", "mb-8", "leading-relaxed");
    desc.textContent = data.desc;

    const btnElement = document.createElement("button");
    btnElement.classList.add(
      "hidden",
      "md:block",
      "bg-blue-600",
      "text-white",
      "px-8",
      "py-3",
      "rounded-md",
      "border-2",
      "border-transparent",
      "transition-all",
    );
    btnElement.textContent = "More Info";
    btnElement.addEventListener("mouseenter", () => {
      btnElement.style.backgroundColor = "white";
      btnElement.style.color = "var(--color-blue-600)";
      btnElement.style.borderColor = "var(--color-blue-600)";
    });
    btnElement.addEventListener("mouseleave", () => {
      btnElement.style.backgroundColor = "";
      btnElement.style.color = "";
      btnElement.style.borderColor = "";
    });

    textContainer.appendChild(title);
    textContainer.appendChild(desc);
    textContainer.appendChild(btnElement);

    panel.appendChild(imgContainer);
    panel.appendChild(textContainer);

    tabContent.replaceChildren(panel);
  }

  const firstTab = tabBtns[0];
  if (firstTab) {
    firstTab.style.color = "var(--color-blue-950)";
    const firstIndicator = firstTab.querySelector("span");
    if (firstIndicator) firstIndicator.style.transform = "scaleX(1)";
  }

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      setTabActive(btn);
      updateTab(btn.dataset.tab);
    });
  });
}

function initAccordion() {
  const faqBtns = document.querySelectorAll(".faq-btn");

  faqBtns.forEach((btn) => {
    const span = btn.querySelector("span");
    const arrow = btn.querySelector("img");

    btn.addEventListener("mouseenter", () => {
      if (span) span.style.color = "var(--color-red-400)";
      if (arrow) arrow.style.filter = FILTER_ORANGE;
    });

    btn.addEventListener("mouseleave", () => {
      if (btn.dataset.active !== "true") {
        if (span) span.style.color = "";
        if (arrow) arrow.style.filter = "";
      }
    });

    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      const isActive = btn.dataset.active === "true";

      faqBtns.forEach((b) => {
        b.dataset.active = "false";
        const s = b.querySelector("span");
        const a = b.querySelector("img");
        if (s) s.style.color = "";
        if (a) {
          a.style.transform = "rotate(0deg)";
          a.style.filter = "";
        }
        if (b.nextElementSibling) {
          b.nextElementSibling.style.height = "0";
        }
      });

      if (!isActive) {
        btn.dataset.active = "true";
        if (span) span.style.color = "var(--color-red-400)";
        if (arrow) {
          arrow.style.transform = "rotate(180deg)";
          arrow.style.filter = FILTER_ORANGE;
        }
        content.style.height = content.scrollHeight + "px";
      }
    });
  });
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const emailInput = form.querySelector("input");
  const errorMsg = form.querySelector(".error-msg");
  const errorIcon = form.querySelector("img[alt='Error']");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
      emailInput.style.border = "2px solid var(--color-red-400)";
      if (errorMsg) errorMsg.style.display = "block";
      if (errorIcon) errorIcon.style.display = "block";
    } else {
      emailInput.style.border = "";
      if (errorMsg) errorMsg.style.display = "none";
      if (errorIcon) errorIcon.style.display = "none";
      alert("Form submitted successfully!");
      form.reset();
    }
  });

  emailInput.addEventListener("input", () => {
    emailInput.style.border = "";
    if (errorMsg) errorMsg.style.display = "none";
    if (errorIcon) errorIcon.style.display = "none";
  });
}

function initSocialIcons() {
  const iconFacebook = document.getElementById("icon-facebook");
  const iconTwitter = document.getElementById("icon-twitter");

  [iconFacebook, iconTwitter].forEach((icon) => {
    if (!icon) return;
    icon.addEventListener("mouseenter", () => {
      icon.style.filter = FILTER_ORANGE;
    });
    icon.addEventListener("mouseleave", () => {
      icon.style.filter = "";
    });
  });
}

function initMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const menuClose = document.getElementById("menu-close");
  const mobileMenu = document.getElementById("mobile-menu");
  const headerLogo = document.querySelector("header .logo");

  if (!menuToggle || !menuClose || !mobileMenu) return;

  const openMenu = () => {
    mobileMenu.classList.remove("translate-x-full");
    if (headerLogo) headerLogo.classList.add("opacity-0", "pointer-events-none");
    menuToggle.classList.add("opacity-0", "pointer-events-none");
  };

  const closeMenu = () => {
    mobileMenu.classList.add("translate-x-full");
    if (headerLogo) headerLogo.classList.remove("opacity-0", "pointer-events-none");
    menuToggle.classList.remove("opacity-0", "pointer-events-none");
  };

  menuToggle.addEventListener("click", openMenu);
  menuClose.addEventListener("click", closeMenu);

  mobileMenu.querySelectorAll("a, button").forEach((element) => {
    element.addEventListener("click", closeMenu);
  });
}

function init() {
  initTabs();
  initAccordion();
  initContactForm();
  initSocialIcons();
  initMobileMenu();
}

document.addEventListener("DOMContentLoaded", init);
