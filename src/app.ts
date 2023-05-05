import './lessons/generics.js';

import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter";

let order: HasFormatter;
let shop: HasFormatter;

let price = 40000;

order = new Invoice('Lyte', price, 'Cars and accessories')
shop = new Payment('Iwu', price, 'Hi')

console.log(order.format());
console.log(shop.format());

let form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
let type = document.querySelector('#type') as HTMLSelectElement,
    details = document.querySelector('#details') as HTMLInputElement,
    user = document.querySelector('#toFrom') as HTMLInputElement,
    amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.getElementById('doc-list') as HTMLUListElement;

const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let entry: HasFormatter;

    // Tuples: Define the type for each postion in an array and the length of the array.
    let values: [string, number, string]
    values = [user.value, amount.valueAsNumber, details.value]

    entry = type.value == 'invoice' ? new Invoice(...values) :  new Payment(...values)

    list.render(entry, type.value.toUpperCase())
})