
let btnLeft = document.querySelector("#mainbanner .btn-left");
let btnRight = document.querySelector("#mainbanner .btn-right");

console.log(btnLeft);
console.log(btnRight);

btnLeft.addEventListener("click", function () {
    if (btnLeft.classList.contains("anime")) {
        btnLeft.classList.remove("anime");
    }
    else {
        btnLeft.classList.add("anime");
    }
});
btnRight.addEventListener("click", function () {
    if (btnRight.classList.contains("anime")) {
        btnRight.classList.remove("anime");
    }
    else {
        btnRight.classList.add("anime");
    }
});

let tabs = document.querySelectorAll('.products-block__tab');
let contents = document.querySelectorAll('.products-block__wrapper');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach((tab_2) => {
            tab_2.classList.remove('active');
        })
        contents.forEach((content) => {
            content.classList.remove('active');
        })
        tab.classList.add('active');
        contents[index].classList.add('active');
    })

})
// toggleContentByTab();

var burger = document.querySelector('.burger');
var mobileMenu = document.querySelector('.mobile-menu');
var cross = document.querySelector('.mobile-menu__cross');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

cross.addEventListener('click', () => {
    burger.classList.remove('active');
    mobileMenu.classList.remove('active');
});
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.btn-right',
        prevEl: '.btn-left',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

