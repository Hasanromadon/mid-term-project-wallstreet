const navButtonEl = document.querySelector('.nav__btn');
const navButtonSpanEl = document.querySelector('.nav__btn-span');
const navHeader = document.querySelector('header');
const navLink = document.querySelector('.nav__link');
const main = document.querySelector('main');
const floatButton = document.querySelector('.float-button');

const btnTab1 = document.querySelector('.btn-tab--1');
const btnTab2 = document.querySelector('.btn-tab--2');
const tab1 = document.querySelector('.tab--1');
const tab2 = document.querySelector('.tab--2');

const darkmodeBtn = document.querySelector('.darkmode-btn');



darkmodeBtn.addEventListener('click', () => {
    if (darkmodeBtn.classList.contains('on')) {
        darkmodeBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
        stroke="rgb(156, 163, 175)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
        class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23">
        </line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" 
        y2="19.78"></line><line x1="1" y1="12" 
        x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12">
        </line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
        `;
    } else {
        darkmodeBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
        stroke="rgb(156, 163, 175)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
        class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>

        `
    }
    document.querySelector('html').classList.toggle('dark');
    darkmodeBtn.classList.toggle('on');
})

// nav button
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

// Back top to button
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

// tab
btnTab1.addEventListener('click', () => {
    btnTab1.classList.add('btn-tab-selected');
    btnTab1.classList.remove('btn-tab-unselected');
    btnTab2.classList.remove('btn-tab-selected');
    btnTab2.classList.add('btn-tab-unselected');
    tab1.classList.remove('hidden');
    tab2.classList.add('hidden');
})

btnTab2.addEventListener('click', () => {
    btnTab2.classList.remove('btn-tab-unselected');
    btnTab2.classList.add('btn-tab-selected');
    btnTab1.classList.add('btn-tab-unselected');
    btnTab1.classList.remove('btn-tab-selected');
    tab2.classList.remove('hidden');
    tab1.classList.add('hidden');
})
