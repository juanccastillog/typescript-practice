import SinglyLinkedList from "../singly-linked-list";

const sumLinkedLists = (linkedList1 : SinglyLinkedList<number>, linkedList2: SinglyLinkedList<number>) => {
    const result = new SinglyLinkedList<number>([]);
    let iterationNode1 = linkedList1.firstNode;
    let iterationNode2 = linkedList2.firstNode;
    let pendingSum = 0;
    while(iterationNode1 !== null || iterationNode2 !== null){
        const iterationSum = (iterationNode1?.element || 0) + (iterationNode2?.element || 0) + pendingSum;
        const iterationDigit = (iterationSum >= 10)? (iterationSum -10) : iterationSum;
        pendingSum = (iterationSum >= 10)? 1 : 0;
        result.appendToTail(iterationDigit);
        iterationNode1 = iterationNode1?.next || null;
        iterationNode2 = iterationNode2?.next || null;
    }
    return result;
}

export default sumLinkedLists;