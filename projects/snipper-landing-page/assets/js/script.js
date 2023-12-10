"use strict";

const btnMobile = document.querySelector(".btn--mobile");
const header = document.querySelector(".header");

const html = document.querySelector("html");
const body = document.querySelector("body");

const showMobileNav = function () {
  html.classList.toggle("u-prevent-scroll");
  body.classList.toggle("u-prevent-scroll");
  header.classList.toggle("active-mobile");
};

btnMobile.addEventListener("click", showMobileNav);
