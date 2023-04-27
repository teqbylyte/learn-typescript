// Classes with Access Modifiers
export class Payment {
    constructor(receiver, amount) {
        this.receiver = receiver;
        this.amount = amount;
    }
    format() {
        return this.receiver + ` is owed $` + this.amount;
    }
}
