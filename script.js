const sketchScreen = document.querySelector(".main-container");

for (let i = 1; i < 257; i++) {
  const divs = document.createElement('div');
  sketchScreen.appendChild(divs);
  divs.style.border = "1px solid black";
  divs.style.height = "25px";
  divs.style.width = "25px";
}


