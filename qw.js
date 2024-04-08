const menu = document.getElementById("menu");
const buttonMenu = document.getElementById("button-menu");
const hideMenu = document.getElementById("hideMenu");
const BrandSonic = document.getElementById("BrandSonic");
const BrandSony = document.getElementById("BrandSony");
const BrandHidden = document.getElementById("hidden-slide");
const ShowAll = document.getElementById("ShowAll");
const HideButton = document.getElementById("HideButton");

ShowAll.addEventListener("click", () => {
  BrandHidden.style.display = "flex";
  ShowAll.style.display = "none";
  HideButton.style.display = "flex";
});

HideButton.addEventListener("click", () => {
  BrandHidden.style.display = "none";
  ShowAll.style.display = "flex";
  HideButton.style.display = "none";
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 16,
  direction: "horizontal",
  loop: true,

  dynamicBullets: true,
  dynamicMainBullets: 2,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    720: {
      spaceBetween: 24,
    },

    1120: {
      spaceBetween: 32,
    },
  },
});

if (window.innerWidth >= 760) {
  swiper.disable();
}

if (window.innerWidth >= 1120) {
  BrandSonic.style.display = "flex";
  BrandSony.style.display = "flex";
}

buttonMenu.addEventListener("click", () => {
  menu.style.display = "flex";
});

hideMenu.addEventListener("click", () => {
  menu.style.display = "none";
});

window.addEventListener("resize", (e) => {
  if (e.target.innerWidth > 760) {
    BrandSonic.style.display = "none";
    BrandSony.style.display = "none";
    swiper.disable();
  }
  if (e.target.innerWidth < 760) {
    swiper.enable();
    BrandSonic.style.display = "flex";
    BrandSony.style.display = "flex";
  }
  if (e.target.innerWidth >= 1120) {
    BrandSonic.style.display = "flex";
    BrandSony.style.display = "flex";
  }
});
