let body = document.querySelector('body');
let openMenu = document.querySelector('.header .openMenu');
let menu = document.querySelector('.menu');
let menuBtn = document.querySelector('.menu .menu-btn');

openMenu.addEventListener('click', function () {
    if (menu.style.display = 'none') {
        menu.style.display = 'flex';
        body.style.overflow = 'hidden';
    }
})
menuBtn.addEventListener('click', function () {
    if (menu.style.display = 'flex') {
        menu.style.display = 'none';
        body.style.overflow = 'auto';
    }
})

window.addEventListener("orientationchange", function() {
    if (window.orientation == 90) {
        if (window.screen.width > 610) {
            menu.style.display = 'flex';
            console.log('90')
        }
    }
    if (window.orientation == 0) {
        if (window.screen.width <= 610) {
            menu.style.display = 'none';
            console.log('0')
        }
    }
}, false);