import SinglyLinkedList from "./singly-linked-list";

const removeDups = (list: SinglyLinkedList<number>) => {
    let iterationNode = list.firstNode;
    const map = new Map();
    while(iterationNode !== null){
        map.set(iterationNode.element, true);
        while(map.get(iterationNode.next?.element)){
            iterationNode.next = iterationNode.next?.next || null;
        }
        iterationNode = iterationNode.next;        
    }
    return list;
}

export default removeDups;