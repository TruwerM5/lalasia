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