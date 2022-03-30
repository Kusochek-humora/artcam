const formArr = document.querySelectorAll('.form'),
formTab = document.querySelector('.form__tab'),
formTabButton = document.querySelectorAll('.form__tab-button');

formTab.addEventListener('click', (e) => {
formTabButton.forEach((item, index) => {
    if (e.target === item) {
        item.classList.add('active');
        formArr[index].classList.add('active');
    }
    else {
        item.classList.remove('active');
        formArr[index].classList.remove('active');
    }
})
})