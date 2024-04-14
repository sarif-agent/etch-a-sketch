const container = document.querySelector(".container");
const resetButton = document.querySelector(".reset");
const rainbowMod = document.querySelector("#rainbowMod");
const darkMod = document.querySelector('#darkMod');
const eraser = document.querySelector('#eraser');
const screen = document.querySelector('.screen');

const deleteBorder = document.querySelector('#deleteBorder');



// sizeOfGrid = 16;

function randomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}

console.log(randomInteger(255));

function randomRgbColor() {
  let r = randomInteger(255);
  let g = randomInteger(255);
  let b = randomInteger(255);
  return `rgb(${r},${g},${b})`;
}


console.log(randomRgbColor());

const createGrid = (amtOfGrids) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  for (let i = 0; i < amtOfGrids; i++) {
    const row = document.createElement('div');
    row.classList.add('grid-row');

    for (let j = 0; j < amtOfGrids; j++) {
      const widthAndHeight = 500 / amtOfGrids
      const gridBox = document.createElement('div');
      gridBox.classList.add('grid-box');
      gridBox.style.width = `${widthAndHeight}px`;
      gridBox.style.height = `${widthAndHeight}px`;
      row.appendChild(gridBox)

      // adding mousehover listener to change background color
      darkMod.addEventListener('click', () => {
        gridBox.addEventListener('mouseover', () => {
          gridBox.style.backgroundColor = 'black';
        })
      })

      rainbowMod.addEventListener('click', () => {
        gridBox.addEventListener('mouseover', () => {
          gridBox.style.backgroundColor = randomRgbColor();
        })
      })

      eraser.addEventListener('click', () => {
        gridBox.addEventListener('mouseover', () => {
          gridBox.style.backgroundColor = "";
        })
      })

      deleteBorder.addEventListener('click', () => {
        gridBox.classList.toggle("noborder");
      })


    }

    wrapper.appendChild(row);
  }
  container.appendChild(wrapper);
}




resetButton.addEventListener('click', () => {
  let userSize = Number(prompt('What dimensions do you want for the new grid?'))

  while (userSize > 100) {
    userSize = Number(prompt('Pick a smaller number than 100'))
  }

  const wrapper = document.querySelector('.wrapper');

  if (!wrapper) {
    createGrid(userSize)
    screen.style.border = "2px solid red";
  } else {
    wrapper.remove()
    createGrid(userSize)
    screen.style.border = "2px solid red";
  }
})











