const fruits = ["apple", "banana", "orange", "strawberry", "grapes", "papaya", "pineapple"];

console.log(fruits);

function printAllFruits(fruits) {
    const list = document.querySelector("#list");
    if (list) {
        list.innerHTML = '';
        for (let fruit of fruits) {
          const li = document.createElement("li");
          li.textContent = fruit;
          list.appendChild(li);
        }
    }
}

printAllFruits(fruits);

function sortFunction() {
    let lexicalOrder = true;
    return {
        sort() {
            if (lexicalOrder === true) {
                fruits.sort((a,b) => {
                    if (a > b) return 1;
                    else if (a < b) return -1;
                    else return 0;
                });
            }
            else {
                fruits.sort((a, b) => {
                  if (a < b) return 1;
                  else if (a > b) return -1;
                  else return 0;
                });
            }
            lexicalOrder = !lexicalOrder;
            printAllFruits(fruits);
        }
    };
}

function filter() {
    let filter = document.querySelector('#filterField');
    let filteredFruits = fruits.filter(fruit => fruit.includes(filter.value));
    printAllFruits(filteredFruits);
    console.log('Filter called: ',filteredFruits);
}

function resetFilter() {
    let filter = document.querySelector("#filterField");
    if (filter) {
        filter.value = '';
    }
    printAllFruits(fruits);
}


document.querySelector('#sort').addEventListener('click', sortFunction().sort);

document.querySelector('#filterField').addEventListener('keyup', filter);

document.querySelector('#reset').addEventListener('click', resetFilter);