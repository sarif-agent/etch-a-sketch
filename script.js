const sketchScreen = document.querySelector(".main-container");

for (let i = 0; i < 267; i++) {
  const divs = document.createElement('div');
  sketchScreen.appendChild(divs);
  divs.style.border = "1px solid black";
  divs.style.height = "16px";
  divs.style.width = "16px";
  divs.addEventListener('mouseover', () => {
    divs.style.backgroundColor = 'blue';
  })
}



