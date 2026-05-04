import iconDelete from "./images/icon-delete.svg";
import productThumbnail from "./images/image-product-1-thumbnail.jpg";

const previusBtn = document.querySelector(".previus-image");
const nextBtn = document.querySelector(".next-image");
const slider = document.querySelector(".slider");
const images = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];
let currentImageIndex = 0;

const hamburgerBtn = document.querySelector(".hamburger-button");
const closeMenuBtn = document.querySelector(".close-menu");
const sideMenu = document.querySelector(".side-menu");
const menuOverlay = document.querySelector(".menu-overlay");

const lessBtn = document.querySelector(".less-quantity");
const moreBtn = document.querySelector(".more-quantity");
const quantity = document.querySelector(".select-quantity span");
const addToCart = document.querySelector(".add-to-cart");
const cartBtn = document.querySelector(".cart-button");
const cartBadge = document.querySelector(".cart-badge");
const cart = document.querySelector(".cart-container");
const productCart = document.querySelector(".product-cart-container");

const thumbnails = document.querySelectorAll(".thumbnail");

function updateSlider() {
  slider.style.transform = `translateX(-${currentImageIndex * 100}%)`;

  thumbnails.forEach((thumb, i) => {
    if (i === currentImageIndex) {
      thumb.classList.add("active");
    } else {
      thumb.classList.remove("active");
    }
  });
}

previusBtn.addEventListener("click", () => {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  updateSlider();
});

nextBtn.addEventListener("click", () => {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  updateSlider();
});

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    currentImageIndex = parseInt(thumbnail.dataset.index);
    updateSlider();
  });
});

function toggleMenu() {
  sideMenu.classList.toggle("is-open");
  menuOverlay.classList.toggle("is-open");
}

hamburgerBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
menuOverlay.addEventListener("click", toggleMenu);

lessBtn.addEventListener("click", () => {
  quantity.textContent = Number(quantity.textContent) > 0 ? Number(quantity.textContent) - 1 : 0;
});

moreBtn.addEventListener("click", () => {
  quantity.textContent = Number(quantity.textContent) + 1;
});

addToCart.addEventListener("click", () => {
  const currentQuantity = Number(quantity.textContent);

  if (currentQuantity <= 0) {
    if (!productCart.querySelector("span")) {
      const emptyMsg = document.createElement("span");
      emptyMsg.textContent = "Your cart is empty.";
      productCart.appendChild(emptyMsg);
      productCart.style.padding = "";
    }
  } else {
    const productName = document.querySelector(".product-container h1").textContent;
    const priceValue = 125.0;
    const totalPrice = priceValue * currentQuantity;

    productCart.style.padding = "20px 20px 20px 20px";

    productCart.innerHTML = `
      <div class="cart-product-item">
        <img src="${productThumbnail}" alt="Product Thumbnail" class="cart-thumb" />
        <div class="cart-product-info">
          <p class="cart-product-name">${productName}</p>
          <p class="cart-product-pricing">
            $${priceValue.toFixed(2)} x ${currentQuantity} <strong class="cart-total-price">$${totalPrice.toFixed(2)}</strong>
          </p>
        </div>
        <img src="${iconDelete}" alt="Delete Icon" class="cart-delete-btn" />
      </div>
      <button class="checkout-button">Checkout</button>
    `;

    const cartProductItem = productCart.querySelector(".cart-product-item");
    cartProductItem.style.paddingTop = "0px";

    cartBadge.textContent = currentQuantity;
    cartBadge.style.display = "block";

    const deleteBtn = productCart.querySelector(".cart-delete-btn");
    deleteBtn.addEventListener("click", () => {
      productCart.innerHTML = `<span class="empttext">Your cart is empty.</span>`;
      productCart.style.padding = "";
      cartBadge.style.display = "none";
    });
  }
});

cartBtn.addEventListener("click", () => {
  cart.classList.toggle("is-open");
});
