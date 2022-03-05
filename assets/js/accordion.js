document.addEventListener('DOMContentLoaded', () => {
    const mainLists = document.querySelectorAll(".accordion-list");
    const mainListsHeader = document.querySelectorAll(".accordion-list .accordion-header");
    const accordion = document.querySelector('.accordion');

    function closeAll(item) {
        mainListsHeader.forEach((mainList, _) => {
            if(mainList !== item) {
                mainList.classList.remove("open");
            }
        });
    };

    mainListsHeader.forEach((item) => {
        item.addEventListener("click", () => {
            closeAll(item);
            item.classList.toggle("open");
        });
    });
});

const accordionMenu = document.querySelectorAll('.accordion-list .accordion-item > li');
accordionMenu.forEach((e, index)=>{
    e.addEventListener("click", ()=>{
        for(let i=0;i<accordionMenu.length;i++){
            accordionMenu[i].classList.remove('active');
        }
        e.classList.add('active');
    });
});