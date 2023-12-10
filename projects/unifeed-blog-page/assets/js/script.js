"use strict";

const nav = document.querySelector(".navigation");
const btnMobile = document.querySelector(".btn-mobile");
const html = document.querySelector("html");
const body = document.querySelector("body");

const showMobileNav = function () {
  html.classList.toggle("u-prevent-scroll");
  body.classList.toggle("u-prevent-scrol");
  nav.classList.toggle("active");
};

btnMobile.addEventListener("click", showMobileNav);
