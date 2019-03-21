'use strict';

(function() {
	const tagsSelect = new CustomSelect({
        elem: document.getElementById('tags')
    });
  
    function CustomSelect(options) {
        const elem = options.elem;

        const clickOnDropdown = (e) => {
            e.preventDefault();
            if (elem.contains(e.target)) {
                selectTab(e.target);    
                toggle();
            }
        }

        const clickOnList = (e) => {
            e.preventDefault();
            if (elem.contains(e.target)) {
                selectTab(e.target);    
            }
        }

        // проверка разрешения media query
        const WidthChange = (mq) => {
            if (mq.matches) {
                elem.removeEventListener('click', clickOnList);
                elem.addEventListener('click', clickOnDropdown);
            } else {
                elem.removeEventListener('click', clickOnDropdown);
                elem.addEventListener('click', clickOnList)
            }
        }

        // слушаем изменения media query
        if (matchMedia) {
            const mq = window.matchMedia("(max-width: 800px)");
            mq.addListener(WidthChange);
            WidthChange(mq);
        }

        // вешаем класс на тег по клику
        const selectTab = (targetTab) => {
            elem.querySelector('.tags__item--active').classList.remove('tags__item--active');
            targetTab.classList.add('tags__item--active');
        }

        let isOpen = false;

        // закрыть menu, если клик вне его
        const onDocumentClick = (e) => (!elem.contains(e.target)) ? close() : null;

        const toggle = () => {
            console.log('toggle');
            isOpen ? close() : open();
        }

        const open = () => {
            elem.classList.add('tags--open');
            document.addEventListener('click', onDocumentClick);
            isOpen = true;
        }

        const close = () => {
            elem.classList.remove('tags--open');
            document.removeEventListener('click', onDocumentClick);
            isOpen = false;
        }
    }
})()




