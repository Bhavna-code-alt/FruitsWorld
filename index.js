document.addEventListener('DOMContentLoaded', () => {
    const alt = () => {
        const evenFruit = document.querySelectorAll('.fruit:nth-child(even)');

        for(let i=0; i<evenFruit.length; i++) {
            evenFruit[i].style.backgroundColor = '#C2E78E';
        }
    }
    


const form = document.querySelector('form');
const newfruits = document.querySelector('.fruits');
const getTotalFruits = document.getElementById('Fruit-Count');

const updateCount = () => {
    const fruitCount = document.querySelectorAll('.fruit').length; 
    getTotalFruits.textContent = `Total Fruits: ${fruitCount.toString().padStart(2, '0')}`;
    alt();
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const addFruits = document.getElementById('add');
    if(addFruits.value.trim()) {
        const newList = document.createElement('li');
        newList.innerHTML = addFruits.value + '<button class="del">x</button>';
        newList.className = 'fruit';
        newfruits.appendChild(newList);
        addFruits.value = '';
    }
    updateCount();
    alt();
});

newfruits.addEventListener('click', function(event) {
    if(event.target.classList.contains('del')) {
        const deleteFruit = event.target.parentElement;
        newfruits.removeChild(deleteFruit);
    }
    updateCount();
    alt();
});
updateCount();
alt();
});






