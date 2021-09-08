let xBtn = document.querySelector(".x-btn");
let targetTag = document.querySelector(".m-nav");
xBtn.addEventListener("click", function () {
  targetTag.style.opacity = "0";
  targetTag.style.visibility = "hidden";
});

let mLink = document.querySelectorAll(".m-link");
mLink.forEach(function (item) {
  item.addEventListener("click", function () {
    targetTag.style.opacity = "0";
    targetTag.style.visibility = "hidden";
  });
});

let hamBtn = document.querySelector("#ham-burger");
hamBtn.addEventListener("click", function () {
  // targetTag.classList.toggle('d-none');
  targetTag.style.opacity = "1";
  targetTag.style.visibility = "visible";
});

let time = document.querySelector("#time");
let day = document.querySelector("#day");
time.innerHTML = new Date().toTimeString().slice(0, 5);
let weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
day.innerHTML = weekday[new Date().getUTCDay()];

// Preloader

let loader = document.querySelector("#loader");
let mainContainer = document.querySelector("#main-container");
window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.height = 0;
    loader.style.opacity = 0;
    loader.style.visibility = "hidden";
    mainContainer.style.opacity = "1";
  }, 500);
});

// Swiper Settings
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  loopSlides: 2,
  loopAdditionalSlides: 2,
  slidesPerView: "2",
  slideToClickedSlide: true,
  dragSize: 10,
  // autoplay: true,
  // initialSlide: 4,
  autoHeight: true,
  coverflowEffect: {
    rotate: 0,
    // stretch: 0,
    depth: 80,
    modifier: 7.5,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    // dynamicBullets: true,
    clickable: true,
  },
});
