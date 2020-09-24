const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navBar = document.querySelector('nav');    
    const footer = document.querySelector('footer')
    const banner = document.querySelector('.nosotros-banner');
    const intro = document.querySelector('.intro');
    const introTwo = document.querySelector('.intro2');
    const bannerMid = document.querySelector('.banner-mid-nosotros');

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
        intro.classList.toggle('hide-banner');
        introTwo.classList.toggle('hide-banner');
        bannerMid.classList.toggle('hide-banner');
        
    });
}

navSlide();

function scrollAppear() {
    let introText = document.querySelector('.intro-text');
    let introPosition =  introText.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5;

    if(introPosition < screenPosition) {
        introText.classList.add('intro-appear-scroll');
    }
}

window.addEventListener('scroll', scrollAppear);

function scrollAppearTwo() {
    let introTextTwo = document.querySelector('.intro-text2');
    let introPosition =  introTextTwo.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5;

    if(introPosition < screenPosition) {
        introTextTwo.classList.add('intro-appear-scroll');
    }
}

window.addEventListener('scroll', scrollAppearTwo);