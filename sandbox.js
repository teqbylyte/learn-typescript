// When a variable has been declared, 
// the type with which it was declared remains the type of 
// the variable whenever it is to be reassigned.
var my_name = 'Lyte';
var age = 17;
var isFootballer = false;
// We can also define the type a function argument should have.
var circleArea = function (radius) {
    return Math.PI * Math.pow(radius, 2);
};
// console.log(circleArea('Lyte')) // Throws an error
console.log(circleArea(7));
function bio(name, age, showAge) {
    if (showAge === void 0) { showAge = false; }
    return 'They go by the name ' + name.toUpperCase() + ' and they\'re ' + age + ' years old.';
}
console.log(bio(my_name, age));
