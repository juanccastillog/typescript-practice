import { Stack } from "./stack";

document.getElementById("processButton")?.addEventListener("click", () => {process()})

interface Wall {
  height: number,
  xIndex: number,
}

const getTrappedWaterArea = (wallHeightList : number[]): number => {
  const pendingWallStack = new Stack<Wall>();
  let collectedWater = 0;
  for(let i= 0; i < wallHeightList.length; i++){
    let firstPendingWallToTheLeft = pendingWallStack.peek();
    let secondPendingWallToTheLeft: Wall | null = null;
    while(firstPendingWallToTheLeft !== null && wallHeightList[i] >= firstPendingWallToTheLeft.height){
      pendingWallStack.pop();
      secondPendingWallToTheLeft = pendingWallStack.peek();
      if(secondPendingWallToTheLeft !== null){
        const chunkWaterHeight = Math.min(wallHeightList[i] - firstPendingWallToTheLeft.height, secondPendingWallToTheLeft.height - firstPendingWallToTheLeft.height)
        const chunkWaterWidth =  i - secondPendingWallToTheLeft.xIndex - 1;
        collectedWater = collectedWater + chunkWaterHeight*chunkWaterWidth;
      }
      firstPendingWallToTheLeft = pendingWallStack.peek();
    }
    pendingWallStack.push({height: wallHeightList[i], xIndex: i});
  }
  return collectedWater;
}

const process = () => {
  try {
    const inputList = (<HTMLInputElement>document.getElementById("inputList")).value;
    const wallHeightList = inputList.split(',').filter(listElement => !isNaN(parseInt(listElement, 10))).map(n => parseInt(n,10));
    document.getElementById('resultLabel')!.textContent = getTrappedWaterArea(wallHeightList).toString();
  } catch (e) {
    document.getElementById('resultLabel')!.textContent = 'An error occurred.';
  }
}