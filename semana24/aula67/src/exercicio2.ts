import { ListNode, LinkedList } from './exercicio1'

class Stack {
    constructor(
        public items: LinkedList = new LinkedList()
    ) { }

    public isEmpty = (): boolean => {
        return this.items.start === null
    }

    public push = (value: any): void => {
        this.items.addToTail(value)
    }

    public pop = (): ListNode | null => {
        if (this.items.start === null) {
            return null
        }
        
        let currentItem = this.items.start
        const removedItem = this.items.start
        
        while (currentItem && currentItem.next) {
            currentItem = currentItem.next
        }

        return removedItem
    }

    public print = (): void => {
        this.items.print()
    }
}

const fruits = new Stack()

console.log(fruits.isEmpty())

fruits.push('Banana')
fruits.push('Abacaxi')
fruits.push('Morango')

fruits.print()
console.log(fruits.isEmpty())

fruits.pop()

fruits.print()