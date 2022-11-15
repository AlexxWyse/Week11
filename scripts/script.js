const greet = (name, time = 'day') => {    
    console.log(`Good ${time} ${name}`);
}

greet(`Alex`, 'Night');


let rad = prompt('Enter a radius: ')

let circleArea = (radius) => {
    const radiusP = document.querySelector('#radius')
    const resultP = document.querySelector('#result')
    radiusP.textContent = radius;
    let CalculatedArea = Math.PI * radius * radius;
    resultP.textContent = CalculatedArea;
    return CalculatedArea;
}

let area = circleArea(rad);
alert(`The area of this circle's radius is ${area.toFixed(2)}!`)

