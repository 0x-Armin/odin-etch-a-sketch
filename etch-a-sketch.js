// create 16 by 16 grid
function createGrid(numSquaresPerRow = 16) {
  const container = document.querySelector("#grids-container");

  while (container.childElementCount > 0)
    container.removeChild(container.lastChild);

  for (let i = 0; i < numSquaresPerRow; i++) {
    // create a new row
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < numSquaresPerRow; j++) {
      // add each column grid within the row here
      let square = document.createElement("div");
      square.classList.add("square");

      row.appendChild(square);
    }
    container.appendChild(row);
  }
}

function setListening() {
  const squares = Array.from(document.querySelectorAll(".square"));
  squares.forEach((square) =>
    square.addEventListener("mouseover", changeHover)
  );
  squares.forEach((square) => square.addEventListener("mouseout", changeOut));
}

function setupGrid(numSquaresPerRow = 16) {
  createGrid(numSquaresPerRow);
  setListening();
}

function changeHover(e) {
  this.classList.add("hover");
}

function changeOut(e) {
  this.classList.remove("hover");
  this.classList.add("out");
}

function askForNumSquares(e) {
  let numSquaresPerRowInput = prompt(
    "How many squares do you want each row to have?",
    "16"
  );
  let numSquaresPerRow = parseInt(numSquaresPerRowInput);

  if (
    Number.isInteger(numSquaresPerRow) &&
    1 <= numSquaresPerRow &&
    numSquaresPerRow <= 100
  ) {
    setupGrid(numSquaresPerRow);
  }
}

const promptBtn = document.querySelector(".prompt-btn");
promptBtn.addEventListener("click", askForNumSquares);

setupGrid();
