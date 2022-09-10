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

readMoreBtn.addEventListener('click', function(){
    hero.classList.toggle('enabled');
})