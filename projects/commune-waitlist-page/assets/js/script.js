"use strict";

const btnNav = document.querySelector(".btn-nav");
const nav = document.querySelector(".navigation");
const html = document.querySelector("html");
const body = document.querySelector("body");

const showMobileNav = function () {
  html.classList.toggle("prevent-scroll");
  body.classList.toggle("prevent-scroll");
  nav.classList.toggle("active");
  console.log(body);
};

btnNav.addEventListener("click", showMobileNav);
