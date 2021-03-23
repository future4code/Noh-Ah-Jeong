"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.ListNode = void 0;
class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
exports.ListNode = ListNode;
class LinkedList {
    constructor(start = null) {
        this.start = start;
        this.addToTail = (value) => {
            if (!this.start) {
                this.start = new ListNode(value);
            }
            else {
                let currentNode = this.start;
                while (currentNode.next) {
                    currentNode = currentNode.next;
                }
                currentNode.next = new ListNode(value);
            }
        };
        this.print = () => {
            let currentNode = this.start;
            while (currentNode && currentNode !== undefined) {
                console.log(currentNode);
                currentNode = currentNode.next;
            }
        };
    }
}
exports.LinkedList = LinkedList;
//# sourceMappingURL=exercicio1.js.map