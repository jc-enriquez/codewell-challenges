"use strict";

const btnNav = document.querySelector(".btn-nav");
const nav = document.querySelector(".navigation");

const showMobileNav = function () {
  nav.classList.toggle("active");
};

btnNav.addEventListener("click", showMobileNav);
