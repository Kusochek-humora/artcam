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
    $('.parameters__right-button').magnificPopup({ removalDelay: 300, mainClass: 'mfp-fade' });
    $('.close').on('click', function () {
        $('.parameters__right-button').magnificPopup('close');
    });

    const buttonTab = document.querySelectorAll('.parameters__tab-button'),
        tabContent = document.querySelectorAll('.parameters__content');
    buttonTab.forEach((item, index) => {
        item.addEventListener('click', () => {
            item.classList.toggle('active')
            if (tabContent[index].style.maxHeight) {
                tabContent[index].style.maxHeight = null;
            }
            else {
                tabContent[index].style.maxHeight = tabContent[index].scrollHeight + "px";
            }
        })
    });

    const parameterTabs = document.querySelectorAll('.parameters__center-tab-item'),
        parameterTabWrapper = document.querySelector('.parameters__center-tabs'),
        parameterCenterItems = document.querySelectorAll('.parameters__center-item');

    parameterTabs.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            parameterCenterItems.forEach((i, index) => {
                i.classList.remove('active');
                parameterTabs[index].classList.remove('active');
            })



            parameterTabs[index].classList.add('active');
            parameterCenterItems[index].classList.add('active');
        })
    })