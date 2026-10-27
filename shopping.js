const heading = document.querySelector('#heading');
const items = document.querySelectorAll('.info');
const shoppingList = document.querySelector('#shopping-list');
const firstItem = shoppingList.firstElementChild;
const lastItem = shoppingList.lastElementChild;
heading.textContent = 'my weekly shopping';
const container = shoppingList.parentElement;

//  add a new element now

const newItem = document.createElement('li')
newItem.textContent = 'milk';
// newItem.classList.add('info')
newItem.className = 'info'
shoppingList.appendChild(newItem);

// css features
firstItem.style.color = 'red';
heading.style.textTransform = 'capitalize';

//  replacing and manipulation of the button
const clearButton = document.querySelector('.clear');
clearButton.textContent = 'remove all items';
clearButton.style.textTransform = 'capitalize';
clearButton.style.backgroundColor = 'red';
clearButton.style.padding = '10px';
clearButton.style.color = 'white';
clearButton.style.border = '1px solid black';

// remove and change or replace

function replace(){

    const replaceItem = document.createElement('li')
    replaceItem.textContent = 'whole wheat bread';
    replaceItem.style.textTransform = 'capitalize';
    replaceItem.style.backgroundColor = 'lightYellow';
    replaceItem.classList.add('info')
    firstItem.replaceWith(replaceItem);
}

replace();

// task 20 

const thirdItem = document.querySelector('li:nth-child(2)');
thirdItem.remove();

const secondItem = firstItem.nextElementSibling;
 console.log(secondItem)

// manupilate li

function replaceAll(){
    const lis = document.querySelectorAll('li')
    lis.forEach((item) =>{
    item.style.color = 'blue';
    item.style.backgroundColor = 'lightYellow';
    item.style.padding = '10px';
})
}
replaceAll();

function check(){
    lis.forEach((item, index) =>{
    if (index === 1){
        item.style.backgroundColor = 'yellow'
    }
   });
}