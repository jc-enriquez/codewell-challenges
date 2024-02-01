"use strict";

const btnMobile = document.querySelector(".btn--mobile");
const headerEl = document.querySelector(".header__content");

btnMobile.addEventListener("click", function () {
  headerEl.classList.toggle("active");
});
