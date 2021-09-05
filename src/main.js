let xBtn = document.querySelector('.x-btn');
let targetTag = document.querySelector('.m-nav');
xBtn.addEventListener('click', function () {
    targetTag.style.opacity = '0';
    targetTag.style.visibility = 'hidden';
});

let mLink = document.querySelectorAll('.m-link');
mLink.forEach(function (item) {
    item.addEventListener('click', function () {
        targetTag.style.opacity = '0';
        targetTag.style.visibility = 'hidden';
    });
});

let hamBtn = document.querySelector('#ham-burger');
hamBtn.addEventListener('click', function () {
    // targetTag.classList.toggle('d-none');
    targetTag.style.opacity = '1';
    targetTag.style.visibility = 'visible';
});

let time = document.querySelector('#time');
let day = document.querySelector('#day');
time.innerHTML = new Date().toTimeString().slice(0, 5);
let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
day.innerHTML = weekday[new Date().getUTCDay()];


// Preloader

let loader = document.querySelector('#loader');
let mainContainer = document.querySelector("#main-container");
window.addEventListener('load', function () {
    setTimeout(function () {
        loader.style.height = 0;
        loader.style.opacity = 0;
        loader.style.visibility = 'hidden';
        mainContainer.style.opacity = '1';
    }, 500);
});




// Swiper Settings
        var swiper = new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            dragSize: 10,
            autoplay: true,
            initialSlide: 5,
            autoHeight: true,
            coverflowEffect: {
                rotate: 0,
                // stretch: 0,
                // depth: 200,
                modifier: 8,
                slideShadows: true,
            },
            pagination: {
                el: ".swiper-pagination",
                // dynamicBullets: true,
                clickable:true,
            },
        });
        
        swiper.on('slideChange', function () {
            console.log(swiper.activeIndex);
        });

        let slide1 = document.querySelector('#s-1');
        let slide2 = document.querySelector('#s-2');
        let slide3 = document.querySelector('#s-3');
        let slide4 = document.querySelector('#s-4');
        let slide5 = document.querySelector('#s-5');
        let slide6 = document.querySelector('#s-6');
        let slide7 = document.querySelector('#s-7');
        let slide8 = document.querySelector('#s-8');
        let slide9 = document.querySelector('#s-9');
        let slide10 = document.querySelector('#s-10');

        slide1.addEventListener('click', function () {
            swiper.slideTo(0);
        });
        slide2.addEventListener('click', function () {
            swiper.slideTo(1);
        });
        slide3.addEventListener('click', function () {
            swiper.slideTo(2);
        });
        slide4.addEventListener('click', function () {
            swiper.slideTo(3);
        });
        slide5.addEventListener('click', function () {
            swiper.slideTo(4);
        });
        slide6.addEventListener('click', function () {
            swiper.slideTo(5);
        });
        slide7.addEventListener('click', function () {
            swiper.slideTo(6);
        });
        slide8.addEventListener('click', function () {
            swiper.slideTo(7);
        });
        slide9.addEventListener('click', function () {
            swiper.slideTo(8);
        });
        slide10.addEventListener('click', function () {
            swiper.slideTo(9);
        });
