const slideWrapper = document.querySelectorAll('.facade__box-slider');

slideWrapper.forEach(item => {
    let slides = item.querySelectorAll('.facade__box-slide');
    let dots = item.querySelectorAll('.facade__box-dots>.dot');
    let index = 0;
    // код слайдера

    const activeSlide = n => {
        for (let slide of slides) {
            slide.classList.remove('active')
        }
        slides[n].classList.add('active');
    };
    const activeDot = n => {
        for (let dot of dots) {
            dot.classList.remove('active')
        }
        dots[n].classList.add('active');
    };
    const movingSlides = index => {
        activeSlide(index);
        activeDot(index)
    }

    const nextSlide = () => {
        if (index == slides.length - 1) {
            index = 0;
            movingSlides(index);
        }
        else {
            index++;
            movingSlides(index);
        }
    }
    const prevSlide = () => {
        if (index == 0) {
            index = slides.length - 1;
            activeSlide(index);
        }
        else {
            index--;
            activeSlide(index);
        }
    }
    // setInterval(nextSlide, 2500);

    dots.forEach((i, indexDot) => {
        i.addEventListener('click', () => {
            index = indexDot;
            activeSlide(index);
            activeDot(index)
        })
    })

})

const selectButtons = document.querySelectorAll('.select__header'),
    selectDropdowns = document.querySelectorAll('.select__dropdown'),
    selectDropdownItems = document.querySelectorAll('.select__dropdown-item');
selectButtons.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        if (e.target === item) {
            console.log('1')
            item.classList.toggle('active');
            selectDropdowns[index].classList.toggle('active');
        }
        else {
            item.classList.remove('active');
            selectDropdowns[index].classList.remove('active');
        }

    })
});
selectDropdownItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        item.closest('div.select__dropdown').classList.remove('active');
        item.closest('div.select__dropdown').previousElementSibling.classList.remove('active');
        item.closest('div.select__dropdown').previousElementSibling.lastElementChild.textContent = item.dataset.value;
        //
        // selectButtons[index].classList.remove('active');
        // selectDropdowns[index].classList.remove('active');
    })
})