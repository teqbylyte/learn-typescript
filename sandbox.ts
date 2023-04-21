// When a variable has been declared, 
// the type with which it was declared remains the type of 
// the variable whenever it is to be reassigned.

let my_name = 'Lyte';

let age = 17;

let isFootballer = false;

// We can also define the type a function argument should have.

const circleArea = (radius: number) => {
    return Math.PI * Math.pow(radius, 2);
}

// console.log(circleArea('Lyte')) // Throws an error

console.log(circleArea(7))

function bio(name: string, age: number, showAge: boolean = false) {
    return 'They go by the name ' + name.toUpperCase() + ' and they\'re ' + age + ' years old.'
}

console.log(bio(my_name, age));
