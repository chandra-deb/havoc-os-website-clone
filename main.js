const log = console.log;
let a = document.querySelectorAll('.link');
a.forEach(function (item, index) {
    console.log(item);
});

// window.outerWidth < 880 ? document.querySelector('#menu-bg').style.display = 'none' : document.querySelector('#menu-bg').style.display = 'initial';

// onresize = function () {
//     log(window.innerWidth);
//     let targetTag = document.querySelector('#menu-bg');
//     let mobileNav = document.querySelector('#mob-nav');

//     if (window.innerWidth >= 880) {
//         targetTag.style.display = 'initial';
//     }
//     else if (window.innerWidth < 880) {
//         targetTag.style.display = 'none';
//         console.log(mobileNav);
//     }
// }
