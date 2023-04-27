// Interface

// This is used to enforce certain rules that are neccessary for classes or objects that implement it.
interface Person {
    name: string
    age: number
    sex: string;

    canDrink(): boolean

    spends(a: number): string
}

const person1: Person = {
    name: 'Lyte',
    age: 24,
    sex: 'M',

    canDrink() {
        return this.age > 18;
    },

    spends(amount) {
        return `They can spend ${amount}`;
    }
}

console.log(person1)

console.log(person1.canDrink(), person1.spends(4000))