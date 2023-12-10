"use strict";

const html = document.querySelector("html");
const body = document.querySelector("body");
const nav = document.querySelector(".navigation");
const btnMobile = document.querySelector(".btn--mobile");

const showMobileNav = function () {
  html.classList.toggle("u-prevent-scroll");
  body.classList.toggle("u-prevent-scroll");
  nav.classList.toggle("active");
};

btnMobile.addEventListener("click", showMobileNav);
