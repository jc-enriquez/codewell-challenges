"use strict";

const containerHeroUsers = document.querySelector(".hero__users");
const containerFeatures = document.querySelector(".features__content");
const containerTestimonials = document.querySelector(".testimonials__content");

const features = [
  {
    icon: "📈",
    title: "Analytics",
    description:
      "We constantly monitor your audience as it grows — so you can Tweet when your followers are most likely to be online and ready to engage with your content.",
  },
  {
    icon: "🤓",
    title: "Smart Analyzer",
    description:
      "Chirp automatically recognizes your followers' most active times and automatically sends you notifications if you're missing out an opportunity.",
  },
  {
    icon: "🗞️",
    title: "Scheduled Your Tweets",
    description:
      "Quality tweets drive tons of engagement. With Chirp, you can write tweets in an advance and schedule them when your audience is most likely to read.",
  },
  {
    icon: "🔆",
    title: "Dark Mode",
    description:
      "Friendly on the eyes, no matter what time you write your Tweets. All colors are chosen to make sure your eyes are at ease at all times.",
  },
];

const testimonials = [
  {
    name: "Sara May",
    username: "sara_may",
    review:
      "I tried out @chirp and it's amazing, love all the analytics I can see.",
    numberHearts: 2,
    numberImg: 1,
  },
  {
    name: "Jack Scott",
    username: "jackscott_",
    review:
      "I initially started using Chirp to support the co-founder as I personally know him, but after having tried it out for a few weeks, I can genuinely say this changed my Twitter game.",
    numberHearts: 32,
    numberImg: 4,
  },
  {
    name: "Jessica May",
    username: "jmay98",
    review:
      "Absolutely love everything about Chirp, from the design to how everything works smoothly.",
    numberHearts: 221,
    numberImg: 8,
  },
];

const displayHeroUsers = () => {
  for (let i = 1; i <= 9; i++) {
    const heroUserEl = `
    <img src="assets/images/user-avatar-0${i}.svg" alt="User avatar 0${i}" class="hero__users__img"/>
    `;
    containerHeroUsers.insertAdjacentHTML("afterbegin", heroUserEl);
  }
};

displayHeroUsers();

const displayFeatures = () => {
  features.forEach(({ icon, title, description }) => {
    const featureEl = `
    <figure class="feature">
      <span class="feature__icon">${icon}</span>
      <p class="feature__title">${title}</p>
      <p class="paragraph">${description}</p>
    </figure>
    `;
    containerFeatures.insertAdjacentHTML("beforeend", featureEl);
  });
};

displayFeatures();

const displayTestimonials = () => {
  testimonials.forEach(
    ({ name, username, review, numberHearts, numberImg }) => {
      const testimonialEl = `
      <figure class="testimonial">
        <div class="testimonial__header">
          <div class="testimonial__info">
            <img src="assets/images/user-avatar-0${numberImg}.svg" alt="User avatar 01" class="testimonial__img"/>
            <div class="testimonial__names">
              <p class="testimonial__name">${name}</p>
              <p class="testimonial__user-name">@${username}</p>
            </div>
          </div>
          <img src="assets/images/icon-twitter-blue.svg" alt="Twitter icon" />
        </div>
        <p class="paragraph">${review}</p>
        <div class="testimonial__footer">
          <div class="testimonial__stats">
            <img src="assets/images/icon-like.svg" alt="Heart icon" />
            <span>${numberHearts}</span>
          </div>
          <time class="testimonial__date">March 2, 2021</time>  
        </div>
      </figure>
      `;
      containerTestimonials.insertAdjacentHTML("beforeend", testimonialEl);
    }
  );
};

displayTestimonials();
