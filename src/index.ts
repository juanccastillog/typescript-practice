
document.getElementById("processButton")?.addEventListener("click", () => {process()})

const process = () => {
  try {
    const inputList = (<HTMLInputElement>document.getElementById("inputList")).value;
    const inputNumber = parseInt((<HTMLInputElement>document.getElementById("inputNumber")).value);
    if (isNaN(inputNumber)) {
      throw new Error('Not a number');
    }
    document.getElementById('resultLabel')!.textContent = inputList;
  } catch (e) {
    document.getElementById('resultLabel')!.textContent = 'An error occurred.';
  }
}