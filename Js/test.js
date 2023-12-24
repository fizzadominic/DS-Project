let setAArray = ["1","2","3","4","5","6","7"];
let setBArray = ["4","5","6"];
let compResult = [];
  for (let i = 0; i < setAArray.length; i++) {
    let found = false;
 for (let j = 0; j < setBArray.length; j++) {
      if (setAArray[i] == setBArray[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      compResult.push(setAArray[i]);
    }
  }

for(let i = 0; i<compResult.length; i++){
    console.log(compResult[i]);
}

let AArray = [1, 2, 3, 4];
let BArray = [3, 4, 5, 6];

let unionResult = [...new Set([...AArray, ...BArray])];

console.log(unionResult);
