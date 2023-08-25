const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click',()=>{
    menu.classList.toggle('menu--active')
});

const aboutBtn = document.getElementsByClassName('about__btn');
const contentItem = document.getElementsByClassName('about__content-item');

let i;
for(i = 0; i < aboutBtn.length; i++) {
    aboutBtn[i].addEventListener('click', open)
}

function open(evt) {
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    for(i = 0; i < aboutBtn.length; i++) {
        aboutBtn[i].classList.remove('about__btn--active');
    }

    tabTarget.classList.add('about__btn--active')
}
