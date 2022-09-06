'user strict';

const openButton = document.querySelector('[data-nav-open]');

const navbar = document.querySelector('[data-navbar]');

const closeButton = document.querySelector('[data-nav-close]');

const buttonsContainer = document.querySelector('[data-button-container]');

function addEvent(button, addCls, removeCls) {
    button.addEventListener('click', function() {
        navbar.classList.toggle('active');
        buttonsContainer.classList.add(addCls);
        buttonsContainer.classList.remove(removeCls);
    });
}

addEvent(openButton, 'opened', 'closed');
addEvent(closeButton, 'closed', 'opened');