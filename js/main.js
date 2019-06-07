const tabItems = document.querySelectorAll('.tab-item');
const tabItemsContent = document.querySelectorAll('.tab-content-item');

//Select tab content
function selectItem(e) {
    removeBorder();
    removeShow();
    //Add border to current tab
    this.classList.add('tab-border');

    //Grab content item from DOM
    const tabItemContent = document.querySelector(`#${this.id}-content`);


    //Add show class]
    tabItemContent.classList.add('show')
}


//Removes border from unselected tabs
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
    tabItemsContent.forEach(item => item.classList.remove('show'))
}

//Listens to tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
