const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navBar = document.querySelector('nav');    
    const footer = document.querySelector('footer')
    const banner = document.querySelector('.banner-container');
    const body = document.querySelector('body');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s `
            }
        });

        burger.classList.toggle('toggle');
        navBar.classList.toggle('nav-color');
        footer.classList.toggle('footer-none');
        banner.classList.toggle('hide-banner');
        body.classList.toggle('body-background');
        
    });
}

navSlide();

const text = ['Potenciá', 'tu futuro.', '']
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){

    if(count === text.length){
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 200);

}())