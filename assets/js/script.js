"use strict";
// Selectors
const containerProject = document.querySelector(".projects-container");
const year = document.querySelector(".year");

const body = document.querySelector("body");
const btnSwitch = document.querySelector(".btn--mode");
const btnScroll = document.querySelector(".btn--scroll");
const iconBtn = document.querySelector(".btn-icon");

// Setting dark mode
const switchBtnIcon = function () {
  iconBtn.getAttribute("name") === "moon"
    ? iconBtn.setAttribute("name", "sunny")
    : iconBtn.setAttribute("name", "moon");
};

const darkMode = function () {
  body.classList.toggle("dark-mode");
  btnSwitch.classList.toggle("btn--light");
  switchBtnIcon();
};

btnSwitch.addEventListener("click", darkMode);

// Scroll to top
const hideBtnScroll = function () {
  btnScroll.style.display = "none";
  btnScroll.style.visibility = "hidden";
  btnScroll.style.opacity = 0;
};

const showBtnScroll = function () {
  btnScroll.style.display = "flex";
  btnScroll.style.visibility = "visible";
  btnScroll.style.opacity = 1;
};

const watchScroll = function () {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? showBtnScroll()
    : hideBtnScroll();
};

const scrollToTop = function () {
  body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

window.addEventListener("scroll", watchScroll);
btnScroll.addEventListener("click", scrollToTop);

// Display Projects
const projects = [
  {
    title: "Spense Landing Page",
    projLink: "projects/spense-landing-page/",
    codeLink:
      "https://github.com/jc-ve/codewell-challenges/tree/main/projects/spense-landing-page",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/codewell/spense-landing-page.webp",
    skills: ["HTML", "CSS", "SASS", "JavaScript"],
  },
  {
    title: "Fiber Landing Page",
    projLink: "projects/fiber-landing-page/",
    codeLink:
      "https://github.com/jc-ve/codewell-challenges/tree/main/projects/fiber-landing-page",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/codewell/fiber-landing-page.webp",
    skills: ["HTML", "CSS", "SASS", "JavaScript"],
  },
  {
    title: "Gradie Sign Up Page",
    projLink: "projects/gradie-signup-page/",
    codeLink:
      "https://github.com/jc-ve/codewell-challenges/tree/main/projects/gradie-signup-page",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/codewell/gradie-sign-up-page.webp",
    skills: ["HTML", "CSS", "SASS"],
  },
  {
    title: "IndieBrew Landing Page",
    projLink: "projects/indiebrew-landing-page/",
    codeLink:
      "https://github.com/jc-ve/codewell-challenges/tree/main/projects/indiebrew-landing-page",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/codewell/indiebrew-landing-page.webp",
    skills: ["HTML", "CSS", "SASS", "JavaScript"],
  },
  {
    title: "Snipper Landing Page",
    projLink: "projects/snipper-landing-page/",
    codeLink:
      "https://github.com/jc-ve/codewell-challenges/tree/main/projects/snipper-landing-page",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/codewell/snipper-landing-page.webp",
    skills: ["HTML", "CSS", "SASS", "JavaScript"],
  },
  {
    title: "Comment Module",
    projLink: "projects/comment-module/",
    codeLink:
      "https://github.com/jc-ve/codewell-challenges/tree/main/projects/comment-module",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/codewell/comment-module.webp",
    skills: ["HTML", "CSS", "SASS"],
  },
  {
    title: "Commune Waitlist Page",
    projLink: "projects/commune-waitlist-page/",
    codeLink:
      "https://github.com/jc-ve/codewell-challenges/tree/main/projects/commune-waitlist-page",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/codewell/commune-waitlist-page.webp",
    skills: ["HTML", "CSS", "SASS", "JavaScript"],
  },
  {
    title: "TimeNow Landing Page",
    projLink: "projects/timenow-landing-age/",
    codeLink:
      "https://github.com/jc-ve/codewell-challenges/tree/main/projects/timenow-landing-page",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/codewell/timenow-landing-page.webp",
    skills: ["HTML", "CSS", "SASS", "JavaScript"],
  },
  {
    title: "Unifeed Blog Page",
    projLink: "projects/unifeed-blog-page/",
    codeLink:
      "https://github.com/jc-ve/codewell-challenges/tree/main/projects/unifeed-blog-page",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/codewell/unifeed-blog-page.webp",
    skills: ["HTML", "CSS", "SASS", "JavaScript"],
  },
  {
    title: "Newsletter Popup Template",
    projLink: "projects/newsletter-popup-template/",
    codeLink:
      "https://github.com/jc-ve/codewell-challenges/tree/main/projects/newsletter-popup-template",
    imgLink:
      "https://cdn.jsdelivr.net/gh/jc-ve/images-thumbnail/codewell/newsletter-popup-template.webp",
    skills: ["HTML", "CSS", "SASS"],
  },
];

const displayProjects = () => {
  projects.forEach(({ title, projLink, codeLink, imgLink, skills }) => {
    let skillsContainer = [];

    skills.forEach((skill) => {
      skillsContainer.push(
        `<span class="card__skill card__skill--${skill.toLowerCase()}">${skill}</span>`
      );
    });

    const html = `
  <div class="card">
    <img
      src="${imgLink}"
      alt="${title} preview image"
      class="card__img"
      loading="lazy"
    />

    <div class="card__body">
      <div class="card__skills">
        ${skillsContainer.join("")}
      </div>
      <div class="card__text">
        <a href="${projLink}" target="_blank" class="card__title">${title}</a>
      </div>
      <div class="card__links">
        <a href="${projLink}" target="_blank" class="btn btn--full">View Project</a>
        <a href="${codeLink}" target="_blank" class="btn btn--icon" aria-label="Link for code">
          <ion-icon name="code-slash-outline"></ion-icon>
        </a>
      </div>
    </div>
  </div>
    `;
    containerProject.insertAdjacentHTML("afterbegin", html);
  });
};
displayProjects();
// Setting year
const currentYear = new Date().getFullYear();
year.textContent = currentYear;
