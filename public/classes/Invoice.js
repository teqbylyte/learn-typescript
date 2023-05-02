// Classes with Access Modifiers
export class Invoice {
    constructor(owner, amount, info) {
        this.owner = owner;
        this.amount = amount;
        this.info = info;
    }
    getDescription() {
        return `${this.owner} has to pay ${this.amount} for ${this.info}.`;
    }
    format() {
        return `${this.owner} owes $${this.amount} for ${this.info}`;
    }
}
