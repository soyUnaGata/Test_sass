const burger = document.querySelector('.header__burger');
const mainMenu = document.querySelector('.menu');
const body = document.querySelector('body')

burger.addEventListener('click', openMenu);

function openMenu (e){
    burger.classList.toggle('active');
    mainMenu.classList.toggle('active');
    body.classList.toggle('lock')

}