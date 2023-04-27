"use strict";
// Interface
const person1 = {
    name: 'Lyte',
    age: 24,
    sex: 'M',
    canDrink() {
        return this.age > 18;
    },
    spends(amount) {
        return `They can spend ${amount}`;
    }
};
console.log(person1);
console.log(person1.canDrink(), person1.spends(4000));
