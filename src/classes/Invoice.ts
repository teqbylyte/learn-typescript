// Classes with Access Modifiers

import { HasFormatter } from "../interfaces/HasFormatter";

export class Invoice implements HasFormatter {

    constructor (
        readonly owner: string, 
        private amount: number, 
        public info: string
    ) {}

    getDescription(): string {
        return `${this.owner} has to pay ${this.amount} for ${this.info}.`;
    }

    format(): string {
        return this.owner + ` owes $` + this.amount + ' for ' + this.info;
    }
}
