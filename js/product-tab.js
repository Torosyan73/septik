const tab = document.querySelectorAll('[data-tab]');
const tabContent = document.querySelectorAll('[data-tab-content]');

tab.forEach(function(item) {
    item.addEventListener('click', function(){

        tab.forEach(function(item) {
            item.classList.remove('catalog__item--active');
        });

        this.classList.add('catalog__item--active');
        
        
        tabContent.forEach(function(item) {
            item.classList.add('catalog__content--hidden'); 
        });

        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('catalog__content--hidden');

    });
});