'use strict';

const slider__inner = document.querySelector('[data-slider]');
const sliderItems = document.querySelectorAll('[data-slider-item]')
const sliderEllipses = document.querySelectorAll('[data-slider-ellipse]');

let currentIndex = 0;
let direction = 'left';
let translate = 1;

for(let i = 0; i < sliderEllipses.length; i++) {
    sliderEllipses[i].setAttribute('index', i);
}

function move(start) {
    let j;
    if(start != undefined || start != null) {
        currentIndex = start;
        j = start;
        translate = start;

        if(start >= sliderItems.length - 1) {
            direction = 'right';
        } else {
            direction = 'left';
        }
    } else j = currentIndex;

    if(currentIndex < sliderItems.length - 1 && direction == 'left') {
        slider__inner.style.transform = `translateX(${-100*translate}%)`;
        translate++;
        currentIndex++;
        if(currentIndex == sliderItems.length - 1) { 
            direction = 'right';
            translate = 2;
        };
    } else if(currentIndex > 0 && direction == 'right') {
        slider__inner.style.transform = `translateX(${-translate * 100}%)`;
        translate--;
        currentIndex--;
        if(currentIndex == 0) { 
            direction = 'left';
            translate = 1;
        }
    }

    for(let i = 0; i < sliderEllipses.length; i++) {
       
        sliderEllipses[i].classList.remove('active');
        if(+sliderEllipses[i].getAttribute('index') == j) {
            sliderEllipses[i].classList.add('active');
        }
    }
}

let timer = setInterval(move, 5500);



sliderEllipses.forEach((item, index) => {
    item.addEventListener('click', function() {
        clearInterval(timer);
        move(index);
    });
})