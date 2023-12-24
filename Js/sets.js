const performOperation = (event) => {
  event.preventDefault();
  let setA = document.querySelector(".setA").value;
  let setB = document.querySelector(".setB").value;
  let operation = document.querySelector(".operation").value;

  switch (operation) {
    case "Union":
      performUnion(setA, setB);
      break;
    case "Intersection":
      performIntersection(setA, setB);
      break;
    case "Complement":
      performComplement(setA, setB);
      break;
  }
};const performUnion = (setA, setB) => {
  let setAArray = setA.split(",").map((item) => item.trim());
  let setBArray = setB.split(",").map((item) => item.trim());

  console.log("Set A Array:", setAArray);
  console.log("Set B Array:", setBArray);

  let unionResult = [...new Set([...setAArray, ...setBArray])];

  console.log("Union Result:", unionResult);

  let element = document.getElementById("text");
  element.textContent = `You have entered the following sets`;

  let setaElement = document.getElementById("seta");
  setaElement.textContent = `A = { ${setAArray.join(", ")} }`;

  let setbElement = document.getElementById("setb");
  setbElement.textContent = `B = { ${setBArray.join(", ")} }`;

  let bElement = document.getElementById("textb");
  bElement.textContent = `The union of Set A and B is`;

  let resultElement = document.getElementById("result");
  resultElement.textContent = `Result: { ${unionResult.join(", ")} }`;
};


const performIntersection = (setA, setB) => {
  let setAArray = setA.split(",").map((item) => item.trim());
  let setBArray = setB.split(",").map((item) => item.trim());
  let intersectionResult = [];
  for (let i = 0; i < setA.length; i++) {
    for (let j = 0; j < setB.length; j++) {
      if (setA[i] == setB[j]) {
        intersectionResult.push(setA[i]);
      }
    }
  }

  let element = document.getElementById("text");
  element.textContent = `You have entered the following sets`;

  let setaElement = document.getElementById("seta");
  setaElement.textContent = `A = { ${setAArray.join(", ")} }`;

  let setbElement = document.getElementById("setb");
  setbElement.textContent = `B = { ${setBArray.join(", ")} }`;

  let bElement = document.getElementById("textb");
  bElement.textContent = `The intersection of Set A and B is `;

  let resultElement = document.getElementById("result");
  resultElement.textContent = `Result: {${intersectionResult.join(", ")}} `;
};
const performComplement = (setA, setB) => {
  let setAArray = setA.split(",").map((item) => item.trim());
  let setBArray = setB.split(",").map((item) => item.trim());
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
    console.log(compResult);
  let element = document.getElementById("text");
  element.textContent = `You have entered the following sets`;

  let setaElement = document.getElementById("seta");
  setaElement.textContent = `A = { ${setAArray.join(", ")} }`;

  let setbElement = document.getElementById("setb");
  setbElement.textContent = `B = { ${setBArray.join(", ")} }`;

  let bElement = document.getElementById("textb");
  bElement.textContent = `The Complement of Set A and B is `;

  let resultElement = document.getElementById("result");
  resultElement.textContent = `Result: { ${[...compResult].join(", ")} } `;
};
