import { Invoice } from "./classes/Invoice.js";
let invoices = [];
const firstInvoice = new Invoice('Lyte', 400, 'for house job');
const secondInvoice = new Invoice('Chima', 700, 'for paintings');
invoices.push(firstInvoice, secondInvoice);
invoices.forEach((invoice, i) => console.log(`${i + 1}: ${invoice.getDescription()}`));
let anchor = document.querySelector('a');
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href); // Add null check cos it could be null
let form = document.querySelector('form'); // Ensure that it is never null
console.log(form.action);
// Cast type because class could be used on none form element but you want to ensure it isn't
form = document.querySelector('.new-item-form');
console.log(form.children);
//inputs
let type = document.querySelector('#type');
let details = document.querySelector('#details');
let amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, details.value, amount.valueAsNumber);
});
