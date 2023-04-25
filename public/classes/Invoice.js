// Classes with Access Modifiers
export class Invoice {
    constructor(receiver, amount, info) {
        this.receiver = receiver;
        this.amount = amount;
        this.info = info;
    }
    getDescription() {
        return `${this.receiver} has to pay ${this.amount} for ${this.info}.`;
    }
}
