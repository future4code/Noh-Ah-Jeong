"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercicio1_1 = require("./exercicio1");
class Stack {
    constructor(items = new exercicio1_1.LinkedList()) {
        this.items = items;
        this.isEmpty = () => {
            return this.items.start === null;
        };
        this.push = (value) => {
            this.items.addToTail(value);
        };
        this.pop = () => {
            if (this.items.start === null) {
                return null;
            }
            let currentItem = this.items.start;
            const removedItem = this.items.start;
            while (currentItem && currentItem.next) {
                console.log('aqui', currentItem, currentItem.next);
                currentItem = currentItem.next;
            }
            return removedItem;
        };
        this.print = () => {
            this.items.print();
        };
    }
}
const fruits = new Stack();
console.log(fruits.isEmpty());
fruits.push('Banana');
fruits.push('Abacaxi');
fruits.push('Morango');
fruits.print();
console.log(fruits.isEmpty());
fruits.pop();
fruits.print();
//# sourceMappingURL=exercicio2.js.map