'user strict';

const openButton = document.querySelector('[data-nav-open]');

const navbar = document.querySelector('[data-navbar]');

const closeButton = document.querySelector('[data-nav-close]');


function addEvent(button, addCls, removeCls) {
    button.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
}

addEvent(openButton, 'opened', 'closed');
addEvent(closeButton, 'closed', 'opened');


const hero = document.querySelector('[data-hero]');
const readMoreBtn = document.querySelector('[data-read-more]');
if(readMoreBtn) {
    readMoreBtn.addEventListener('click', function(){
        hero.classList.toggle('enabled');
    })
}


/*
CAROUSEL
*/ 

const carousel__inner = document.querySelector('[data-carousel]');
const btnPrev = document.querySelector('[data-carousel-prev]');
const btnNext = document.querySelector('[data-carousel-next]');


btnPrev.addEventListener('click', function(){
    carousel__inner.scrollLeft = 0;
});

btnNext.addEventListener('click', function(){
    carousel__inner.scrollLeft = carousel__inner.offsetWidth;
});