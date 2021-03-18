export class ListNode {
    constructor(
        public value: any,
        public next: ListNode | null = null
    ) { }
}

export class LinkedList {
    constructor(
        public start: ListNode | null = null
    ) { }

    public addToTail = (value: any): void => {
        if (!this.start) {
            this.start = new ListNode(value)
        } else {
            let currentNode = this.start

            while (currentNode.next) {
                currentNode = currentNode.next
            }

            currentNode.next = new ListNode(value)
        }
    }

    public print = (): void => {
        let currentNode = this.start

        while (currentNode && currentNode !== undefined) {
            console.log(currentNode)
            currentNode = currentNode.next
        }
    }
}

// const fruits: LinkedList = new LinkedList()

// fruits.addToTail('Banana')
// fruits.addToTail('Maçã')
// fruits.addToTail('Pêra')

// fruits.print()