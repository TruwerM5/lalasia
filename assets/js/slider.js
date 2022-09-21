
window.addEventListener('load', function(){



    'use strict';

    const slider__inner = document.querySelector('[data-slider]');
    const sliderItems = document.querySelectorAll('[data-slider-item]')
    const sliderEllipses = document.querySelectorAll('[data-slider-ellipse]');
    const sliderPrevBtn = document.querySelector('[data-slide-prev]');
    const sliderPrevNext = document.querySelector('[data-slide-next]');


    let currentIndex = 1;
    let direction = 'left';
    



    for(let i = 0; i < sliderEllipses.length; i++) {
        sliderEllipses[i].setAttribute('index', i);
    }
    
    function styleButtons(index) {
        for(let i = 0; i < sliderEllipses.length; i++) {
            sliderEllipses[i].classList.remove('active');
            if(i == index) {
                sliderEllipses[i].classList.add('active');
            }
        }
    }
    
    function move() {
        styleButtons(currentIndex);
        slider__inner.style.transform = `translateX(${-currentIndex * 100}%)`;
        if(direction == 'left') { 
            if(currentIndex == sliderItems.length - 1) {
                direction = 'right';
                currentIndex--;
            } else currentIndex++;
        } else if(direction == 'right') {
            if(currentIndex == 0) {
                direction = 'left';
                currentIndex++;
            } else currentIndex--;
        }
        
    }
    
    let timer = setInterval(move, 5500);
     
    sliderEllipses.forEach( item => {
        let btnIndex = +item.getAttribute('index');
        item.addEventListener('click', function() {
            clearInterval(timer);
            currentIndex = btnIndex;
            
            move();
            console.log(currentIndex);
            timer = setInterval(move, 5500);
        });
    });

});



