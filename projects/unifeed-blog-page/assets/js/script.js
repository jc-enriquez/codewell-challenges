"use strict";

const nav = document.querySelector(".navigation");
const btnMobile = document.querySelector(".btn-mobile");

const showMobileNav = function () {
  nav.classList.toggle("active");
};

btnMobile.addEventListener("click", showMobileNav);
