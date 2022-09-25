'user strict';

const openButton = document.querySelector('[data-nav-open]');

const navbar = document.querySelector('[data-navbar]');

const closeButton = document.querySelector('[data-nav-close]');

const navLinks = document.querySelectorAll('.navbar-link');

function addEvent(button) {
    button.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
}

addEvent(openButton);
addEvent(closeButton);

navLinks.forEach( item => {
    addEvent(item);
})


const hero = document.querySelector('[data-hero]');
const readMoreBtn = document.querySelector('[data-read-more]');
if(readMoreBtn) {
    readMoreBtn.addEventListener('click', function(){
        hero.classList.toggle('enabled');
    });
}


/*
BUTTON TO TOP
*/

const btnToTop = document.querySelector('[data-to-top]');

window.addEventListener('scroll', function(){
    if(window.scrollY > 400) {
        btnToTop.classList.add('active');
    } else {
        btnToTop.classList.remove('active');
    }
});

btnToTop.addEventListener('click', function(){
    window.scrollTo(null, 0);
});