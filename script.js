const container = document.querySelector(".container");
const resetButton = document.querySelector(".reset");
const rainbowMod = document.querySelector("#rainbowMod");
const darkMod = document.querySelector('#darkMod');
const eraser = document.querySelector('#eraser');
const screen = document.querySelector('.screen');
const title = document.querySelector('.title');
const colorPick = document.querySelector('.pick-button');

const deleteBorder = document.querySelector('#deleteBorder');


// Random RGB number generator
function randomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}

// checking if it works
console.log(randomInteger(255));

// random RGB for rainbow mode
function randomRgbColor() {
  let r = randomInteger(255);
  let g = randomInteger(255);
  let b = randomInteger(255);
  return `rgb(${r},${g},${b})`;
}

// checking if it works 
console.log(randomRgbColor());

const redSlider = document.getElementById("redSlider");
const greenSlider = document.getElementById("greenSlider");
const blueSlider = document.getElementById("blueSlider");
const colorBox = document.getElementById("colorBox");
const rgbValue = document.getElementById("rgbValue");

rgbValue.style.color = 'white';
rgbValue.style.fontWeight = '600';

function updateColor() {
  const redValue = redSlider.value;
  const greenValue = greenSlider.value;
  const blueValue = blueSlider.value;

  const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  colorBox.style.backgroundColor = rgbColor;
  rgbValue.textContent = `RGB(${redValue}, ${greenValue}, ${blueValue})`;
}

redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);

// İlk açılışta renk güncelleme
updateColor();

// creating grids using Flexbox. row and column.
const createGrid = (amtOfGrids) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  for (let i = 0; i < amtOfGrids; i++) {
    const row = document.createElement('div');
    row.classList.add('grid-row');

    for (let j = 0; j < amtOfGrids; j++) {
      const widthAndHeight = 480 / amtOfGrids
      const gridBox = document.createElement('div');
      gridBox.classList.add('grid-box');
      gridBox.style.width = `${widthAndHeight}px`;
      gridBox.style.height = `${widthAndHeight}px`;
      row.appendChild(gridBox)

      // black coloring
      darkMod.addEventListener('click', () => {
        gridBox.addEventListener('mouseover', () => {
          gridBox.style.backgroundColor = 'black';
        })
      })

      // rainbow mode
      rainbowMod.addEventListener('click', () => {
        gridBox.addEventListener('mouseover', () => {
          gridBox.style.backgroundColor = randomRgbColor();
        })
      })

      // eraser
      eraser.addEventListener('click', () => {
        gridBox.addEventListener('mouseover', () => {
          gridBox.style.backgroundColor = "";
        })
      })

      // no border with "toggle" method
      deleteBorder.addEventListener('click', () => {
        gridBox.classList.toggle("noborder");
      })

      // pick color
      colorPick.addEventListener('click', () => {
        const redValue = redSlider.value;
        const greenValue = greenSlider.value;
        const blueValue = blueSlider.value;
        const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

        gridBox.addEventListener('mouseover', () => {
          gridBox.style.backgroundColor = rgbColor;
        });
      });



    }

    wrapper.appendChild(row);
  }
  container.appendChild(wrapper);
}



// reset mechanism
resetButton.addEventListener('click', () => {
  let userSize = Number(prompt('What dimensions do you want for the new grid?'));

  const existingAlert = document.querySelector('h4');
  if (existingAlert) {
    existingAlert.remove();
  }

  if (isNaN(userSize) || userSize <= 0) {
    const alertMessage = document.createElement('h4');
    alertMessage.textContent = "Please Enter a Valid Number";
    title.appendChild(alertMessage);
  } else {
    while (userSize > 100) {
      userSize = Number(prompt('Pick a smaller number than 100'));
    }

    const wrapper = document.querySelector('.wrapper');

    if (!wrapper) {
      createGrid(userSize);
    } else {
      wrapper.remove();
      createGrid(userSize);
    }
  }
})











