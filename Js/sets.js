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
      case "Cartesian":
        performCartesianProduct(setA, setB);
        break;
  }
};
const performUnion = (setA, setB) => {
  let setAArray = setA.split(",").map((item) => item.trim());
  let setBArray = setB.split(",").map((item) => item.trim());

  console.log("Set A Array:", setAArray);
  console.log("Set B Array:", setBArray);

  let unionResult = [...new Set([...setAArray, ...setBArray])];

  console.log("Union Result:", unionResult);

  const element = document.getElementById("text");
  element.textContent = `You have entered the following sets`;

  const setaElement = document.getElementById("seta");
  setaElement.textContent = `A = { ${setAArray.join(", ")} }`;

  const setbElement = document.getElementById("setb");
  setbElement.textContent = `B = { ${setBArray.join(", ")} }`;

  const bElement = document.getElementById("textb");
  bElement.textContent = `The union of Set A and B is`;

  const resultElement = document.getElementById("result");
  resultElement.textContent = `Result: { ${unionResult.join("")} }`;
};
const performIntersection = (setA, setB) => {
  let setAArray = setA.split(",").map((item) => item.trim());
  let setBArray = setB.split(",").map((item) => item.trim());
  let intersectionResult = [];

  for (let i = 0; i < setAArray.length; i++) {
    for (let j = 0; j < setBArray.length; j++) {
      if (setAArray[i] == setBArray[j]) {
        intersectionResult.push(setAArray[i]);
      }
    }
  }

  const element = document.getElementById("text");
  element.textContent = `You have entered the following sets`;

  const setaElement = document.getElementById("seta");
  setaElement.textContent = `A = { ${setAArray.join(", ")} }`;

  const setbElement = document.getElementById("setb");
  setbElement.textContent = `B = { ${setBArray.join(", ")} }`;

  const bElement = document.getElementById("textb");
  bElement.textContent = `The intersection of Set A and B is `;

  const resultElement = document.getElementById("result");
  resultElement.textContent = `Result: {${intersectionResult.join("")}} `;
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

  const element = document.getElementById("text");
  element.textContent = `You have entered the following sets`;

  const setaElement = document.getElementById("seta");
  setaElement.textContent = `A = { ${setAArray.join(", ")} }`;

  const setbElement = document.getElementById("setb");
  setbElement.textContent = `B = { ${setBArray.join(", ")} }`;

  const bElement = document.getElementById("textb");
  bElement.textContent = `The Complement of Set A and B is `;

  const resultElement = document.getElementById("result");
  resultElement.textContent = `Result: { ${compResult.join("")} } `;
};

const performCartesianProduct = (setA, setB) => {
  let setAArray = setA.split(",").map((item) => item.trim());
  let setBArray = setB.split(",").map((item) => item.trim());
  let cartesianProduct = [];

  for (let i = 0; i < setAArray.length; i++) {
    for (let j = 0; j < setBArray.length; j++) {
      cartesianProduct.push(`(${setAArray[i]}, ${setBArray[j]})`);
    }
  }

  const element = document.getElementById("text");
  element.textContent = `You have entered the following sets`;

  const setaElement = document.getElementById("seta");
  setaElement.textContent = `A = { ${setAArray.join(", ")} }`;

  const setbElement = document.getElementById("setb");
  setbElement.textContent = `B = { ${setBArray.join(", ")} }`;

  const bElement = document.getElementById("textb");
  bElement.textContent = `The Cartesian Product of Set A and B is `;

  const resultElement = document.getElementById("result");
  resultElement.textContent = `Result: { ${cartesianProduct.join("")} } `;
};

// VennDiagramm
// Assuming you have predefined image URL for Union Venn diagram
const unionimage = "../assesst/union.png";
const intersectionimage = "../assesst/intersection.png";
const complementimage = "../assesst/complement.png"; 
const cartesianimage = "../assesst/cartesian.png"; 


// Function to draw Union Venn diagram
const drawvenn = (event) => {
  event.preventDefault();

  // Get selected operation
  let operation = document.querySelector(".operation").value;

  // Get the image element
  const vennImage = document.querySelector(".venn-diagram img");

  // Set the source of the image based on the selected operation
  switch (operation) {
    case "Union":
      vennImage.src = unionimage;
      break;
      case "Intersection":
        vennImage.src =   intersectionimage;
        break;
        case "Complement":
          vennImage.src =   complementimage;
          break;
        case "Cartesian":
          vennImage.src =   cartesianimage;
          break;
      
      }
};
