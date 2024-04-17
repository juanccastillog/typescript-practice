
    export class ListNode<ElementType> {
        #element: ElementType
        next: ListNode<ElementType> | null;
        constructor(element: ElementType) {
            this.#element = element;
            this.next = null;
        }

        get element(){
            return this.#element;
        }

    }