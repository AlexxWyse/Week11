const greet = (name, time = 'day') => {    
    console.log(`Good ${time} ${name}`);
}

greet(`Alex`, 'Night');
