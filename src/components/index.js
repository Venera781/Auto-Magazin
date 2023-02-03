import '../scss/index.scss';
//Бургер-меню
const burger = document.querySelector('.burger');
const menuList = document.querySelector('.menu__nav-list');
const logoHeader = document.querySelector('.logo');
burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    menuList.classList.toggle('menu__nav-list_active');
    logoHeader.classList.toggle('logo_default');
})

//После отправки кнопки "Подписка"
let submit = document.querySelector('.form__button');
submit.addEventListener('click', () => {
    submit.textContent = 'Готово';  
})

