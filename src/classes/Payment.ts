// Classes with Access Modifiers

import { HasFormatter } from "../interfaces/HasFormatter";

export class Payment implements HasFormatter {

    constructor (
        readonly receiver: string, 
        private amount: number, 
        private info: string,
    ) {}

    format(): string {
        return this.receiver + ` is owed $` + this.amount;
    }
}
