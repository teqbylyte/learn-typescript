"use strict";
let greet;
greet = () => {
    console.log('Hello people!');
};
const sum = (a, b) => {
    console.log(a + b);
};
function getBio(name, sex = 'male', age) {
    console.log(name + ' is a ' + sex);
    console.log(age);
}
greet();
sum(3, 5);
getBio('Lyte');
