let leftArrow = document.querySelector('.wrapper-arrows .arrow-left');
let rightArrow = document.querySelector('.wrapper-arrows .arrow-right');
let items = document.querySelectorAll('.wrapper-item');

itemNum = 0;

rightArrow.addEventListener('click', () => {
    displayNone();

    itemNum++;

    if(itemNum === items.length){
        itemNum = 0;
    }

    items[itemNum].style.display = 'block';
    items[itemNum].classList.add('animate');

    console.log(items[itemNum]);
})

leftArrow.addEventListener('click', () => {
    displayNone();

    itemNum--;

    if(itemNum === -1){
        itemNum = items.length -1;
    }

    items[itemNum].style.display = 'block';
    items[itemNum].classList.add('animate');

})

const displayNone = () => {
    items.forEach((item) => {
        item.style.display = 'none';
    })
}