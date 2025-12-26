/** @format */

//--============= TOGGLE BUTTON ============= //
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  hamburger.classList.toggle("ri-close-large-line");
});
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
  });
});

// Carousel //
let onslide = false;

window.addEventListener("load", () => {
  autoSlide();

  const buttonPrev = document.querySelector(".carousel_button_prev");
  const buttonNext = document.querySelector(".carousel_button_next");

  buttonNext.addEventListener("click", () => slide(getItemActiveIndex() + 1));
  buttonPrev.addEventListener("click", () => slide(getItemActiveIndex() - 1));
});
function autoSlide() {
  setInterval(() => {
    slide(getItemActiveIndex() + 1);
  }, 5000);
}

function slide(toIndex) {
  if (onslide) return;

  onslide = true;

  const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
  const itemActive = document.querySelector(".carousel_item_active");
  const itemActiveIndex = itemsArray.indexOf(itemActive);
  let newItemActive = null;

  if (toIndex > itemActiveIndex) {
    if (toIndex >= itemsArray.length) {
      toIndex = 0;
    }
    newItemActive = itemsArray[toIndex];

    newItemActive.classList.add("carousel_item_pos_next");
    setTimeout(() => {
      newItemActive.classList.add("carousel_item_next");
      itemActive.classList.add("carousel_item_next");
    }, 20);
  } else {
    if (toIndex < 0) {
      toIndex = itemsArray.length - 1;
    }
    newItemActive = itemsArray[toIndex];

    newItemActive.classList.add("carousel_item_pos_prev");
    setTimeout(() => {
      newItemActive.classList.add("carousel_item_prev");
      itemActive.classList.add("carousel_item_prev");
    }, 20);
  }

  newItemActive.addEventListener(
    "transitionend",
    () => {
      itemActive.className = "carousel_item";
      newItemActive.className = "carousel_item carousel_item_active";
      onslide = false;
    },
    {
      once: true,
    }
  );
}
function getItemActiveIndex() {
  const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
  const itemActive = document.querySelector(".carousel_item_active");
  const itemActiveIndex = itemsArray.indexOf(itemActive);
  return itemActiveIndex;
}
