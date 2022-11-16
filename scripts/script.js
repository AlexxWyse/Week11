// const greet = (name, time = 'day') => {    
//     console.log(`Good ${time} ${name}`);
// }

// greet(`Alex`, 'Night');


// let rad = prompt('Enter a radius: ')

// let circleArea = (radius) => {
//     const radiusP = document.querySelector('#radius')
//     const resultP = document.querySelector('#result')
//     radiusP.textContent = radius;
//     let CalculatedArea = Math.PI * radius * radius;
//     resultP.textContent = CalculatedArea;
//     return CalculatedArea;
// }

// let area = circleArea(rad);
// alert(`The area of this circle's radius is ${area.toFixed(2)}!`)

const unorderedList = document.querySelector(".shopping")

let populateList = (list) => {
    for (let i = 0;  i < list.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = list[i];
        unorderedList.appendChild(listItem);       
        }
}

let changeListStyle = () => {
    unorderedList.classList.replace("circleList", "squareList")
}
const shoppingList = ["cheese", "bread", "green pepper"]


changeListStyle();
populateList(shoppingList)

const listItems = document.querySelectorAll(".shopping ul");

let changecolor = (list) => {
    list.forEach(item)
        if (item.textContent.includes("green")) {
            item.classList.add("green");
        }
    }
changecolor(listItems)