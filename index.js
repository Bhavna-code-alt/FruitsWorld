
const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'center';
mainHeading.style.border = "double";
mainHeading.style.textTransform = 'uppercase';
mainHeading.style.fontSize = '50px';


const basketHeading = document.querySelector('#basket-heading');
basketHeading.style.margin = '10px';
basketHeading.style.color = 'brown';
basketHeading.style.textDecoration = 'underline';
 
const fruitItems = document.querySelector('.fruits');
fruitItems.style.backgroundColor = 'pink';
//#0B909A
fruitItems.style.padding = '30px';
fruitItems.style.margin = '10px';
fruitItems.style.borderRadius = '5px';
fruitItems.style.width = '50%';
fruitItems.style.listStyleType = 'none';

const fruitList = document.querySelectorAll('.fruit');
for(let i=0; i<fruitList.length; i++) {
    fruitList[i].style.backgroundColor = '#F3D85F';
    fruitList[i].style.padding = '10px';
    fruitList[i].style.margin = '10px';
    fruitList[i].style.borderRadius = '5px';
}

const evenFruit = document.querySelectorAll('.fruit:nth-child(even)');

for(let i=0; i<evenFruit.length; i++) {
    evenFruit[i].style.backgroundColor = '#C2E78E';
}

//const basketDiv = document.getElementById('basket-heading');
const heading3 = document.createElement('h3');
const headText = document.createTextNode('Buy High Quality Organic Fruits Online');
heading3.appendChild(headText);
basketHeading.insertBefore(heading3, basketHeading.firstChild);
heading3.style.color = '#781C50';
heading3.style.fontSize = '25px';
heading3.style.textDecoration = 'none';
heading3.style.fontStyle = 'italic';
heading3.style.backgroundColor = '#BD0872';
heading3.style.color = 'white';
console.log(heading3);

const para = document.createElement('p');
const paraText = document.createTextNode('Total Fruits: 05');
para.appendChild(paraText);

const divs = document.getElementsByTagName('div');
const thirdDiv = divs[1];
thirdDiv.appendChild(para);

para.className = 'fruitCount';
para.id = 'totalFruits';
para.setAttribute('title', 'fruits-total');
console.log(para);







