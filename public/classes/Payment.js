// Classes with Access Modifiers
export class Payment {
    constructor(receiver, amount, info) {
        this.receiver = receiver;
        this.amount = amount;
        this.info = info;
    }
    format() {
        return this.receiver + ` is owed $` + this.amount;
    }
}
