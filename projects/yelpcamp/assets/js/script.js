"use strict";

const banner = document.querySelector(".banner");
const btnCloseBanner = document.querySelector(".banner__btn");

btnCloseBanner.addEventListener("click", function () {
  banner.classList.add("hidden");
  console.log("hello");
});
