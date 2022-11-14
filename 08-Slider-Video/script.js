const toggleMenu = () => {
    const menuIcon = document.querySelector('.menuIcon');
    const navbar = document.getElementById('navbar');

    menuIcon.classList.toggle('active');
    navbar.classList.toggle('active');
}

const slideShow = document.getElementById('slideShow')
const slides = document.getElementsByTagName('video')

let index = 0;
const nextSlide = () => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.toggle('active');    
}

const prevSlide = () => {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.toggle('active');    
}

const slideShowText = document.getElementById('slideShowText');
const divVideo = slideShowText.getElementsByTagName('div');

let i = 0;
const nextText = () => {
    divVideo[i].classList.remove('active');
    i = (i + 1) % divVideo.length;
    divVideo[i].classList.toggle('active');
}

const prevText = () => {
    divVideo[i].classList.remove('active');
    i = (i - 1 + divVideo.length) % divVideo.length;
    divVideo[i].classList.toggle('active');
}