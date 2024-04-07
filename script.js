const container = document.querySelector(".container");

const startButton = document.querySelector(".start");


const createGrid = (amtOfGrids) => {
  for (let i = 0; i < amtOfGrids; i++) {
    const row = document.createElement('div');
    row.classList.add('grid-row');

    for (let j = 0; j < amtOfGrids; j++) {
      const widthAndHeight = 960 / 24
      const gridBox = document.createElement('div');
      gridBox.classList.add('grid-box');
      gridBox.style.width = `${widthAndHeight}px`;
      gridBox.style.height = `${widthAndHeight}px`;
      row.appendChild(gridBox)

      // adding mousehover listener to change background color
      gridBox.addEventListener('mouseover', () => {
        gridBox.style.backgroundColor = 'black';
      })

    }

    container.appendChild(row);
  }
}

createGrid(24)

const allDivs = document



