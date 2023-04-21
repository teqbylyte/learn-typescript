// Explicit types
// Stating the type of a variable at declaration before assigning values.

let my_name: string;
my_name = 'Lyte';

// array
let names: string[] = [];

names.push(my_name);

console.log(names);

// union type variables
let gift: (string|number)[] = [];

gift.push('car');
gift.push(5000);
// gift.push(null) //fails

let uid: string|number;

uid = 'slj02joflas';
uid = 2384304249;

// objects (2 ways)
let course: object;

let lesson: {
    name: string,
    resource: string,
    views: number,
    published: boolean
}


