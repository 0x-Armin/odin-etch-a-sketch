// create 16 by 16 grid
function createGrid() {
  const container = document.querySelector('#container');

  for (let i = 0; i < 16; i++) {
    // create a new row
    let row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < 16; j++) {
      // add each column grid within the row here
      let square = document.createElement('div');
      square.classList.add('square');

      row.appendChild(square);
    }

    container.appendChild(row);
  }
}

createGrid();

function changeHover(e) {
  this.classList.add('hover');
}

const squares = Array.from(document.querySelectorAll('.square'));
squares.forEach(square => square.addEventListener('mouseover', changeHover));