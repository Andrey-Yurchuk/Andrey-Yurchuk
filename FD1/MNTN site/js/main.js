const navButton = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

navButton.addEventListener('click', function(event) {
    
    event.stopPropagation();
    mobileNav.classList.toggle('mobile-nav-active'); //добавляем к классу mobile-nav active 
    navButton.classList.toggle('nav-button-x'); //превращаем из "бургера" в "крестик"
    body.classList.toggle('no-scroll'); //не скроллирует при открытом "бургере"
})

window.addEventListener('click', function() { //ловим "клик" на устройстве за пределами открытого "бургера"

    if (body.classList.contains('no-scroll')) {
        body.classList.toggle('no-scroll');
        navButton.classList.toggle('nav-button-x');
        mobileNav.classList.toggle('mobile-nav-active');
    }
})

mobileNav.addEventListener('click', function(event) { //закрываем открытый "бургер"
    event.stopPropagation();
}) 