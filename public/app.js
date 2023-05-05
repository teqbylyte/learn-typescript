import './lessons/generics.js';
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
let order;
let shop;
let price = 40000;
order = new Invoice('Lyte', price, 'Cars and accessories');
shop = new Payment('Iwu', price, 'Hi');
console.log(order.format());
console.log(shop.format());
let form = document.querySelector('.new-item-form');
//inputs
let type = document.querySelector('#type'), details = document.querySelector('#details'), user = document.querySelector('#toFrom'), amount = document.querySelector('#amount');
const ul = document.getElementById('doc-list');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let entry;
    // Tuples: Define the type for each postion in an array and the length of the array.
    let values;
    values = [user.value, amount.valueAsNumber, details.value];
    entry = type.value == 'invoice' ? new Invoice(...values) : new Payment(...values);
    list.render(entry, type.value.toUpperCase());
});
