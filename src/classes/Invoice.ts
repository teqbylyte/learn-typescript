// Classes with Access Modifiers

export class Invoice {

    constructor (
        readonly receiver: string, 
        private amount: number, 
        public info: string
    ) {}

    getDescription(): string {
        return `${this.receiver} has to pay ${this.amount} for ${this.info}.`;
    }
}
