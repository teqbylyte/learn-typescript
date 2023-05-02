/**
 * 1. Register the ul container
 * 2. Create a render method to add a new li to the container
 */

import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate {
    constructor (
        private conatiner: HTMLUListElement
    ) {}

     render(item: HasFormatter, title: string, position?: 'start' | 'end') {
        const li = document.createElement('li');

        const h4 = document.createElement('h4');
        h4.innerText = title;
        li.append(h4);

        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);

        switch (position) {
            case 'end':
                this.conatiner.append(li);
                break;

            default:
                this.conatiner.prepend(li);
                break;
        }

    }
}