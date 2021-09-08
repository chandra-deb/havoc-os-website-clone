let xBtn = document.querySelector(".x-btn"),
  targetTag = document.querySelector(".m-nav");
xBtn.addEventListener("click", function () {
  (targetTag.style.opacity = "0"), (targetTag.style.visibility = "hidden");
});
let mLink = document.querySelectorAll(".m-link");
mLink.forEach(function (e) {
  e.addEventListener("click", function () {
    (targetTag.style.opacity = "0"), (targetTag.style.visibility = "hidden");
  });
});
let hamBtn = document.querySelector("#ham-burger");
hamBtn.addEventListener("click", function () {
  (targetTag.style.opacity = "1"), (targetTag.style.visibility = "visible");
});
let time = document.querySelector("#time"),
  day = document.querySelector("#day");
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
let loader = document.querySelector("#loader"),
  mainContainer = document.querySelector("#main-container");
window.addEventListener("load", function () {
  setTimeout(function () {
    (loader.style.height = 0),
      (loader.style.opacity = 0),
      (loader.style.visibility = "hidden"),
      (mainContainer.style.opacity = "1");
  }, 500);
});
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: !0,
  centeredSlides: !0,
  loop: !0,
  loopSlides: 2,
  loopAdditionalSlides: 2,
  slidesPerView: "2",
  slideToClickedSlide: !0,
  dragSize: 10,
  autoHeight: !0,
  coverflowEffect: { rotate: 0, depth: 80, modifier: 7.5, slideShadows: !0 },
  pagination: { el: ".swiper-pagination", clickable: !0 },
});
