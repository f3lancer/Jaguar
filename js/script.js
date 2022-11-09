const swiper = new Swiper('.whatlike__swiper', {
    spaceBetween: 30,
    navigation: {
        nextEl: '.whatlike__swiper-button-next',
        prevEl: '.whatlike__swiper-button-prev',
    },

});

let menulinck = document.querySelectorAll('.header__items');

if (menulinck) {
    for (let i = 0; i < menulinck.length; i++) {
        menulinck[i].onclick = function () {
            menulinck[i].classList.add('header__link--active');
            removeActiveMenu(menulinck[i]);
            closeMenu();
        }
    }
}

function removeActiveMenu(number) {
    for (let i = 0; i < menulinck.length; i++) {
        if (menulinck[i] !== number) {
            menulinck[i].classList.remove('header__link--active');
        }
    }
}
let CloseMobail = document.querySelector('.menu-mobail__close');
let MobailMenu = document.querySelector('.header');

if (CloseMobail) {
    CloseMobail.onclick = function () {
        MobailMenu.classList.toggle('active')
    }
}

function closeMenu() {
    if (CloseMobail) {
        MobailMenu.classList.remove('active')
    }
}

let oldImg = document.querySelectorAll('.whatlike__swip-img img');

window.onresize = () => {
    if (innerWidth < 768) {
        for (let i = 0; i < oldImg.length; i++) {
            newImg = oldImg[i].src.replace('UA.png', 'UAt.png');
            oldImg[i].src = newImg;

        }
    }
    if (innerWidth > 768) {
        for (let i = 0; i < oldImg.length; i++) {
            newImg = oldImg[i].src.replace('UAt.png', 'UA.png');
            oldImg[i].src = newImg;

        }
    }
}
if (innerWidth < 768) {
    for (let i = 0; i < oldImg.length; i++) {
        newImg = oldImg[i].src.replace('UA.png', 'UAt.png');
        oldImg[i].src = newImg;

    }
}
if (innerWidth > 768) {
    for (let i = 0; i < oldImg.length; i++) {
        newImg = oldImg[i].src.replace('UAt.png', 'UA.png');
        oldImg[i].src = newImg;

    }
}