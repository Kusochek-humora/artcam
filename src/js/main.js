//burger start
const header = document.querySelector('.header'),
    burgerButton = document.querySelector('.burger'),
    burgerOverlay = document.querySelector('.outter'),
    headerNav = document.querySelector('.header__nav'),
    headerNavLink = document.querySelectorAll('.header__list-link'),
    closeMenuFunction = () => {
        burgerButton.classList.remove('active');
        document.querySelector('body').classList.remove('active');
        burgerOverlay.classList.remove('active');
        headerNav.classList.remove('active');
    };

let headerHeight;
burgerButton.addEventListener('click', (e) => {
    headerNav.classList.toggle('active');
    burgerButton.classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
    burgerOverlay.classList.toggle('active');
})
burgerOverlay.addEventListener('click', closeMenuFunction);
window.addEventListener('resize', (e) => {
    if (window.innerWidth <= 1024) {
        headerNav.addEventListener('click', (e) => {
            headerNavLink.forEach(item => {
                if (e.target === item) {
                    closeMenuFunction();
                }
            })
        })
    }
    if (window.innerWidth >= 1024) {
        closeMenuFunction();
    }
})

//burger end

window.addEventListener('scroll', (e) => {
    headerHeight = header.clientHeight;
    if (window.scrollY >= 1) {
        header.classList.add('active');
    }
    else {
        header.classList.remove('active');
    }
    // console.log(headerHeight)
    //  console.log(window.scrollY)
})

// hover tariffs
const featureItemArr = document.querySelectorAll('.tariffs__list-item');

function handleMouseEnter(el) {
    const children = el.parentNode.children;
    for (const child of children) {
        if (child !== el) {
            child.classList.remove("active");
        }
    }
    el.classList.add("active");
}
featureItemArr.forEach((el) => {
    el.addEventListener("mouseenter", () => {
        handleMouseEnter(el);
    });
});
// EN
// end hover tariffs 

const swiper = new Swiper('.comments__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 20,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev"
    },
    pagination: {
        el: '.comments__pagination',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        1100: {
            slidesPerView: 3,
        },
        700: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        }
        // 499: {
        //     direction: 'horizontal',
        //     slidesPerView: 1,
        //     slidesPerGroup: 1,
        // }, 0: {
        //     direction: 'vertical',
        //     slidesPerView: 2,
        //     slidesPerGroup: 2,
        //     effect: 'fade'
        // }

    }
});

//popups

$('.gallery__box-item').magnificPopup({ type: 'image', preload: [0, 2], mainClass: 'mfp-fade' });