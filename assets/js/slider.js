'use strict';

const slider__inner = document.querySelector('[data-slider]');
const sliderItems = document.querySelectorAll('[data-slider-item]')
const sliderEllipses = document.querySelectorAll('[data-slider-ellipse]');

let currentIndex = 0;
let direction = 'left';
let translate = 0;

for(let i = 0; i < sliderEllipses.length; i++) {
    sliderEllipses[i].setAttribute('index', i);
}

function move() {
    if(currentIndex < sliderItems.length - 1 && direction == 'left') {
        slider__inner.style.transform = `translateX(${translate - 100}%)`;
        translate -= 100;
        currentIndex++;
        if(currentIndex == sliderItems.length - 1) { direction = 'right'; };
    } else if(currentIndex > 0 && direction == 'right') {
        slider__inner.style.transform = `translateX(${translate + 100}%)`;
        translate += 100;
        currentIndex--;
        if(currentIndex == 0) { direction = 'left'; }
    }

    for(let i = 0; i < sliderEllipses.length; i++) {
        sliderEllipses[i].classList.remove('active');
        if(+sliderEllipses[i].getAttribute('index') == currentIndex) {
            sliderEllipses[i].classList.add('active');
        }
    }
}

let timer = setInterval(() => {
    move();
}, 5500);