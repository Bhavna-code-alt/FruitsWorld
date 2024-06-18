document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const newfruits = document.querySelector('.fruits');
    const getTotalFruits = document.getElementById('Fruit-Count');

    const alt = () => {
        const evenFruit = document.querySelectorAll('.fruit:nth-child(even)');
        evenFruit.forEach(fruit => fruit.style.backgroundColor = '#C2E78E');
        
    }

const updateCount = () => {
    const fruitCount = document.querySelectorAll('.fruit').length; 
    getTotalFruits.textContent = `Total Fruits: ${fruitCount.toString().padStart(2, '0')}`;
   
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const addFruits = document.getElementById('add');
    if(addFruits.value.trim()) {
        const newList = document.createElement('li');
        newList.innerHTML = addFruits.value + '<button class="del">x</button><button class="edit-btn">Edit</button>';
        newList.className = 'fruit';
        
        newfruits.appendChild(newList);
        addFruits.value = '';
        
    }
    
    updateCount();
   
});

newfruits.addEventListener('click', function(event) {
    if(event.target.classList.contains('del')) {
        const deleteFruit = event.target.parentElement;
        newfruits.removeChild(deleteFruit);
        
    } else if(event.target.classList.contains('edit-btn')) {
        const editButton = event.target.parentElement;
        
        const newFruit = prompt("Edit fruit:", editButton.textContent.replace('xEdit', '').trim());
            if (newFruit) {
                editButton.firstChild.textContent = `${newFruit} `;
                
            }
            
    }
    updateCount();
    
});

updateCount();
alt();
});






