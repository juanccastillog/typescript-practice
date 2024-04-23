import { ListNode } from "./list-node";

class SinglyLinkedList<NodeType>{
    firstNode: ListNode<NodeType> | null;

    constructor(array: NodeType[]){
        this.firstNode = null;
        for(let i = 0; i < array.length; i++){
            this.appendToTail(array[i])
        }
    }

    appendToTail(element: NodeType){
        const newNode = new ListNode(element);        
        if(this.firstNode === null){
           this.firstNode = newNode; 
           return;
        }
        let iterationNode: ListNode<NodeType> = this.firstNode;
        while(iterationNode.next !== null){
            iterationNode = iterationNode.next;
        }
        iterationNode.next = newNode;
        return;
    }

    toArray(){
        const result = [];
        let node = this.firstNode;
        while (node !== null){
            result.push(node.element);
            node = node.next;
        }
        return result;
    }

}

export default SinglyLinkedList;