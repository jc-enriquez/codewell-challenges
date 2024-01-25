"use strict";

const containerInfluentialUsers = document.querySelector(".influential__users");

const displayInfluentialUsers = () => {
  for (let i = 1; i <= 8; i++) {
    const influentialEl = `
    <img src="assets/images/user-${i}.png" alt="User ${i}" class="influential__img" />
    `;
    containerInfluentialUsers.insertAdjacentHTML("beforeend", influentialEl);
  }
};

displayInfluentialUsers();
