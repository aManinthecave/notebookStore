const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navBar = document.querySelector('nav');    
    const products = document.querySelector('.mainCont');
    const footer = document.querySelector('footer')
    const banner = document.querySelector('.banner-container-products');
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
        products.classList.toggle('hide-products');
        footer.classList.toggle('footer-none');
        banner.classList.toggle('hide-banner');
        body.classList.toggle('body-background');
        
    });
}

navSlide();
