function acceptAge() {
  document.getElementById('age-popup').style.display = 'none';
  document.getElementById('cookie-popup').style.display = 'flex';
}
function denyAge() {
  window.location.href = './error.html';
}
function acceptCookies() {
  document.getElementById('cookie-popup').style.display = 'none';
}


let open = document.querySelector('.open');
let close = document.querySelector('.close');
let menu = document.querySelector('.menu');

open.addEventListener('click', function () {
  menu.style.display = 'flex';
})

close.addEventListener('click', function () {
  if(window.screen.width < 800) {
    menu.style.display = 'none';
  }
})