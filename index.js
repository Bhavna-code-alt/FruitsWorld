const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'right';

const basketHeading = document.querySelector('#basket-heading');
basketHeading.style.margin = '10px';
basketHeading.style.color = 'brown';

const fruitItems = document.querySelector('.fruits');
fruitItems.style.backgroundColor = 'grey';
fruitItems.style.padding = '30px';
fruitItems.style.margin = '10px';
fruitItems.style.borderRadius = '5px';
fruitItems.style.width = '50%';
fruitItems.style.listStyleType = 'none';

const fruitList = document.querySelectorAll('.fruit');

for(let i=0; i<fruitList.length; i++) {
    fruitList[i].style.backgroundColor = 'white';
    fruitList[i].style.padding = '10px';
    fruitList[i].style.margin = '10px';
    fruitList[i].style.borderRadius = '5px';
}

const evenFruit = document.querySelectorAll('.fruit:nth-child(even)');

for(let i=0; i<evenFruit.length; i++) {
    evenFruit[i].style.backgroundColor = 'lightgrey';
}





