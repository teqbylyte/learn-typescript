import './lessons/generics.js';
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
let order;
let shop;
let price = 40000;
order = new Invoice('Lyte', price, 'Cars and accessories');
shop = new Payment('Iwu', price);
console.log(order.format());
console.log(shop.format());
let form = document.querySelector('.new-item-form');
//inputs
let type = document.querySelector('#type');
let details = document.querySelector('#details');
let user = document.querySelector('#toFrom');
let amount = document.querySelector('#amount');
const ul = document.getElementById('doc-list');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let entry;
    if (type.value == 'invoice') {
        entry = new Invoice(user.value, amount.valueAsNumber, details.value);
    }
    else {
        entry = new Payment(user.value, amount.valueAsNumber);
    }
    list.render(entry, type.value.toUpperCase());
});
