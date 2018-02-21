let numSquares = 6;
let colors = generateRandomColors(numSquares);
let pickedColor = pickColor();


let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyButton = document.querySelector("#easyBtn");
let hardButton = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;


for(let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function() {
    let clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColor(clickedColor);
      h1.style.backgroundColor = clickedColor;
      resetButton.textContent = "Play Again?";
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

resetButton.addEventListener("click", () => {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  h1.style.backgroundColor = "steelblue";
  colorDisplay.textContent  = pickedColor;
  messageDisplay.textContent = "";
  this.textContent = "New Colors";
  for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
});

easyButton.addEventListener("click", () => {
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(let i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardButton.addEventListener("click", () => {
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

function changeColor(color) {
  for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  let arr = [];
  for(let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
