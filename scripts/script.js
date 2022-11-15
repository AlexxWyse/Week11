const greet = (name, time = 'day') => {    
    console.log(`Good ${time} ${name}`);
}

greet(`Alex`, 'Night');


let rad = prompt('Enter a radius: ')

let circleArea = (radius) => {
    return Math.PI * radius * radius;
}

let area = circleArea(rad);
alert(`The area of this circle's radius is ${area.toFixed(2)}!`)