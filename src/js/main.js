const burger = document.querySelector('.header__burger');
const mainMenu = document.querySelector('.menu');
const body = document.querySelector('body');
const slides = document.querySelectorAll('.slider');
const backBtn = document.querySelector('.hero__btn-back');
const forwardBtn = document.querySelector('.hero__btn-forward')
const sliderNumberEl = document.querySelector('#slider-number')
const slidersTotalEl = document.querySelector('#total-sliders')
const contactForm = document.querySelector('.contact__us-form');

let currentSliderIndex = 0;

burger.addEventListener('click', openMenu);

function openMenu (e){
    burger.classList.toggle('active');
    mainMenu.classList.toggle('active');
    body.classList.toggle('lock')

}

slidersTotalEl.innerHTML = formatNumber(slides.length);

forwardBtn.addEventListener('click', function(){
    if(currentSliderIndex + 1 >= slides.length){
        currentSliderIndex = 0;
    }else{
        currentSliderIndex++;
    }
   
    sliderNumberEl.innerHTML = formatNumber((currentSliderIndex+1));
    slides.forEach((slide, index) => {
        index === currentSliderIndex 
        ? slide.classList.add('slider--active')
        : slide.classList.remove('slider--active')
    })

    
})

backBtn.addEventListener('click', function(){
    if(currentSliderIndex > 0){
        currentSliderIndex--;
    }else{
        currentSliderIndex = slides.length - 1;
    }

    sliderNumberEl.innerHTML = formatNumber((currentSliderIndex+1)) 

    slides.forEach((slide, index) => {
        index === currentSliderIndex 
        ? slide.classList.add('slider--active')
        : slide.classList.remove('slider--active')
    })
})

function formatNumber(num) {
    return num >= 10 ? num.toString() : num.toString().padStart(2, '0')
};

contactForm.addEventListener('submit', e => {
    e.preventDefault();
    e.target.reset();
    alert('Thank you for your submission. You can expect to receive a response as soon as it is available.')
})