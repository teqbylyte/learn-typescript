// Classes 

class Invoice {
    receiver: string;
    amount: number;
    info: string;


    constructor (receiver: string, amount: number, info: string) {
        this.receiver = receiver;
        this.amount = amount;
        this.info = info;
    }

    getDescription(): string {
        return `${this.receiver} has to pay ${this.amount} for ${this.info}`;
    }
}

let invoices: Invoice[] = [];

const firstInvoice = new Invoice('Lyte', 400, 'for house job');
const secondInvoice = new Invoice('Chima', 700, 'for paintings');

invoices.push(firstInvoice, secondInvoice);

console.log(invoices);


let anchor = document.querySelector('a')

console.log(anchor?.href) // Add null check cos it could be null

let form = document.querySelector('form')!; // Ensure that it is never null

console.log(form.action);

// Cast type because class could be used on none form element but you want to ensure it isn't
form = document.querySelector('.new-item-form') as HTMLFormElement;

console.log(form.children);

//inputs
let type = document.querySelector('#type') as HTMLSelectElement;

let details = document.querySelector('#details') as HTMLInputElement;

let amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        details.value,
        amount.valueAsNumber,
    )

})
