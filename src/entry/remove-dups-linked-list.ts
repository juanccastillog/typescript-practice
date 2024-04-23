import removeDups from "../remove-dups-linked-lists";
import SinglyLinkedList from "../singly-linked-list";


document.getElementById("processButton")?.addEventListener("click", () => {process()})

const process = () => {
  try {
    const inputList = (<HTMLInputElement>document.getElementById("inputList")).value;
    const numberList = inputList.split(',').filter(listElement => !isNaN(parseInt(listElement, 10))).map(n => parseInt(n,10));
    const numberLinkedList = new SinglyLinkedList(numberList);
    document.getElementById('resultLabel')!.textContent = removeDups(numberLinkedList).toArray().toString();
  } catch (e) {
    document.getElementById('resultLabel')!.textContent = 'An error occurred.';
  }
}