"use strict";

const banner = document.querySelector(".banner");
const navigation = document.querySelector(".navigation");
const btnCloseBanner = document.querySelector(".banner__btn");
const btnMobile = document.querySelector(".btn--mobile");

btnCloseBanner.addEventListener("click", function () {
  banner.classList.add("hidden");
});

btnMobile.addEventListener("click", function () {
  navigation.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  if (navigation.classList.contains("active")) {
    navigation.classList.remove("active");
  }
});
