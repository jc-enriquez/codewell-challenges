"use strict";

const body = document.querySelector("body");
const containerInfluentialUsers = document.querySelector(".influential__users");
const containerPricingCards = document.querySelector(".pricing__container");

const headerContent = document.querySelector(".header__content");
const btnMobile = document.querySelector(".btn--mobile");

const pricing = [
  {
    priceMonthly: 4,
    priceYearly: 48,
    description: "Perfect plan if you're just starting out.",
    benefits: [
      "LinkedIn Integration",
      "Twitter Integration",
      "Real-time Analytics",
    ],
  },
  {
    priceMonthly: 12,
    priceYearly: 144,
    description: "Perfect plan if you're a heavy user of social media.",
    benefits: [
      "LinkedIn Integration",
      "Twitter Integration",
      "Instagram Integration",
      "Real-time Analytics",
    ],
  },
  {
    priceMonthly: 7,
    priceYearly: 84,
    description: "Perfect plan if you're just starting out.",
    benefits: ["LinkedIn Integration", "Twitter Integration"],
  },
];

btnMobile.addEventListener("click", function () {
  headerContent.classList.toggle("active");
});

const displayInfluentialUsers = () => {
  for (let i = 1; i <= 8; i++) {
    const influentialEl = `
    <img src="assets/images/user-${i}.png" alt="User ${i}" class="influential__img" />
    `;
    containerInfluentialUsers.insertAdjacentHTML("beforeend", influentialEl);
  }
};

const displayPrices = () => {
  pricing.forEach(({ priceMonthly, priceYearly, description, benefits }) => {
    let benefitsArray = [];

    benefits.forEach((benefit) => {
      benefitsArray.push(`<li class="pricing__item">
      <img src="assets/images/checkmark-icon.svg" alt="Checkmark icon"/>
      <span class="pricing__benefit">${benefit}</span>
    </li>`);
    });

    const priceEl = `
    <figure class="pricing__card">
      <p class="pricing__price">
        <span class="pricing__value">$${priceMonthly}</span>/mo
      </p>
      <p class="pricing__description">${description}</p>
      <ul class="pricing__list">
        ${benefitsArray.join("")}
      </ul>
      <a href="#" class="btn btn--solid u-w-100 u-text-center">Subscribe Now</a>
    </figure>
    `;
    containerPricingCards.insertAdjacentHTML("beforeend", priceEl);
  });
};

if (body.classList.contains("pricing-page")) displayPrices();

if (body.classList.contains("home-page")) displayInfluentialUsers();
