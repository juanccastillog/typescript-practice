import getTrappedWaterArea from "../trapping-water";


document.getElementById("processButton")?.addEventListener("click", () => {process()})

const process = () => {
  try {
    const inputList = (<HTMLInputElement>document.getElementById("inputList")).value;
    const wallHeightList = inputList.split(',').filter(listElement => !isNaN(parseInt(listElement, 10))).map(n => parseInt(n,10));
    document.getElementById('resultLabel')!.textContent = getTrappedWaterArea(wallHeightList).toString();
  } catch (e) {
    document.getElementById('resultLabel')!.textContent = 'An error occurred.';
  }
}