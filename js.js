let numberCells;
function newGrid(numberCells) {
  let a = prompt();
  if (a != typeof String) {
    numberCells = a;
  } else {
  }
  numberCells = numberCells || 16;
  let cellWidth = 40 / numberCells + "rem";
  let cellHeight = 40 / numberCells + "rem";
  console.log(cellHeight, cellWidth);

  const mainContainerDiv = document.querySelector(".maincontainer");
  ar = [];

  for (i = 0; i < numberCells; i++) {
    ar[i] = document.createElement("div");

    mainContainerDiv.appendChild(ar[i]);

    for (j = 0; j < numberCells; j++) {
      const newDiv = document.createElement("div");
      ar[i].appendChild(newDiv);
      const classAttribute = document.createAttribute("class");
      classAttribute.value = "gameCell";
      newDiv.setAttributeNode(classAttribute);
      const widthHeightAttribute = document.createAttribute("style");
      widthHeightAttribute.value = `width: ${cellWidth}; height: ${cellHeight};`;
      newDiv.setAttributeNode(widthHeightAttribute);
    }
  }
}
newGrid();
const box = document.querySelectorAll(".gameCell");
console.log(box);
box.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.classList.add("lol");
  });
});
let button = document.querySelectorAll(".btn");

button[0].addEventListener("click", () => {
  numberCells = numberCells || 20000;
  for (i = 0; i < numberCells * numberCells; i++) {
    let boxes = document.querySelectorAll(".gameCell");
    console.log(boxes);
    boxes[i].classList.remove("lol");
  }
});
