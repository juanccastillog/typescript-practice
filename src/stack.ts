import { ListNode } from './list-node';


    export class Stack <ElementType> {
        #top: ListNode<ElementType> | null
        constructor(){
            this.#top = null;
        }

        push(element : ElementType){
            const newNode = new ListNode(element);
            newNode.next = this.#top;
            this.#top = newNode;
        }

        peek(){
            return this.#top?.element || null;
        }

        pop(){
            const formerTop = this.#top;
            this.#top = this.#top?.next || null;
            return formerTop;
        }
    }

