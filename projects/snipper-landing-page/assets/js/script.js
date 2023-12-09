const btnMobile = document.querySelector(".btn--mobile");
const header = document.querySelector(".header");

const showMobileNav = function () {
  header.classList.toggle("active-mobile");
};

btnMobile.addEventListener("click", showMobileNav);
