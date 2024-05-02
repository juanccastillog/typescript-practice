
import SinglyLinkedList from "../singly-linked-list";
import sumLinkedLists from "../algorithms/sum-linked-lists";


document.getElementById("processButton")?.addEventListener("click", () => {process()})

const process = () => {
  try {
    const inputList = (<HTMLInputElement>document.getElementById("inputList")).value;
    const inputList2 = (<HTMLInputElement>document.getElementById("inputList2")).value;
    const numberList = inputList.split(',').filter(listElement => !isNaN(parseInt(listElement, 10))).map(n => parseInt(n,10));
    const numberList2 = inputList2.split(',').filter(listElement => !isNaN(parseInt(listElement, 10))).map(n => parseInt(n,10));
    const numberLinkedList = new SinglyLinkedList(numberList);
    const numberLinkedList2 = new SinglyLinkedList(numberList2);
    const numberListSum = sumLinkedLists(numberLinkedList, numberLinkedList2);
    document.getElementById('resultLabel')!.textContent = numberListSum.toArray().toString();
  } catch (e) {
    document.getElementById('resultLabel')!.textContent = 'An error occurred.';
  }
}