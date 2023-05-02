import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter";

let order: HasFormatter;
let shop: HasFormatter;

let price = 40000;

order = new Invoice('Lyte', price, 'Cars and accessories')
shop = new Payment('Iwu', price)

console.log(order.format());
console.log(shop.format());

let form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
let type = document.querySelector('#type') as HTMLSelectElement;
let details = document.querySelector('#details') as HTMLInputElement;
let user = document.querySelector('#toFrom') as HTMLInputElement;
let amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.getElementById('doc-list') as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let entry: HasFormatter;

    if (type.value == 'invoice') {
        entry = new Invoice(user.value, amount.valueAsNumber, details.value)
    }
    else {
        entry = new Payment(user.value, amount.valueAsNumber)
    }

    list.render(entry, type.value.toUpperCase())
})