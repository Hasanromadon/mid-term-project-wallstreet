const navButtonEl = document.querySelector('.nav__btn');
const navButtonSpanEl = document.querySelector('.nav__btn-span');
const navHeader = document.querySelector('header');
const navLink = document.querySelector('.nav__link');
const main = document.querySelector('main');
const floatButton = document.querySelector('.float-button');

const items = document.querySelector('.nav__link');
navButtonEl.addEventListener('click', () => {
    navButtonEl.classList.toggle('nav__btn--close');
    navLink.classList.toggle('hidden');
    navHeader.classList.toggle('show-nav');
    navButtonSpanEl.classList.toggle('nav__btn-span');

    for (let i = 0; i < items.childElementCount; ++i) {
        animateLink(items.children[i], i * 100)
    }
    function animateLink(item, delay) {
        setTimeout(() => {
            item.classList.toggle('show-link')
        }, delay)
    }
})

// top
window.addEventListener('scroll', () => {
    const value = window.scrollY;
    if (value > 0) {
        floatButton.classList.add('visible-button')
        floatButton.classList.remove('hidden-button')
    } else {
        floatButton.classList.remove('visible-button')
        floatButton.classList.add('hidden-button')
    }
})