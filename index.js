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

const description = document.createElement('input');
    description.type = 'text';
    description.id = 'description';
    description.placeholder = 'About the fruit...';
    description.required = true;

    const submitButton = document.querySelector('button[type="submit"]');
    form.insertBefore(description, submitButton);

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const addFruits = document.getElementById('add');
    const descriptionText = document.getElementById('description');

    const fruitName = document.createElement('span');
        fruitName.textContent = addFruits.value;

        const para = document.createElement('p');
        para.textContent = descriptionText.value;
        para.style.fontStyle = 'italic';

    if(addFruits.value.trim()) {
        const newList = document.createElement('li');
        newList.innerHTML = addFruits.value + '<button class="del">x</button><button class="edit-btn">Edit</button>';
        newList.className = 'fruit';
        
        newfruits.appendChild(newList);
        newList.appendChild(para);
        addFruits.value = '';
        descriptionText.value = '';
        
    }
    
    updateCount();
    alt();
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
    alt();
});
const filter = document.getElementById('filter');
const fruitItems = document.getElementsByClassName('fruit');
filter.addEventListener('keyup', function(event) {

    const descriptionText = document.getElementById('description');
    const textEntered = event.target.value.toLowerCase();
    for(let i=0; i<fruitItems.length; i++) {
        const fruitText = fruitItems[i].firstChild.textContent.toLowerCase();
        if(fruitText.indexOf(textEntered) == -1) {
            fruitItems[i].style.display = 'none';
        } else {
            fruitItems[i].style.display = 'flex';
        }
    }
    
    for(let i=0; i<descriptionText.length; i++) {
        const descriptionText = descriptionText[i].firstChild.textContent.toLowerCase();
        if(descriptionText.includes(textEntered)) {
            descriptionText[i].style.display = 'flex';
        } else {
            descriptionText[i].style.display = 'none';
        }
    }
})
updateCount();
alt();
});




