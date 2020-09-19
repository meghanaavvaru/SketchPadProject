let grid = document.querySelector('.grid');
let drawingB = document.querySelector('#draw');
let eraseB = document.querySelector('#erase');
let sizeB = document.querySelector('#size');

//need a function that will create a grid of sqaures depending on prompt
//creating a 16x16 square grid of sqaure divs
createGrid(16)

//begin hover effect


// if the size button is pressed then change the size of the canvas according to
// input.

sizeB.addEventListener('click', sizePrompt);
drawingB.addEventListener('click', hover);
eraseB.addEventListener('click', eraseCanvas);


function createGrid(n){
  clearGrid()
  let sN = n.toString();
  let repeat = "repeat("+ sN +", 1fr)";
  grid.style.backgroundColor = 'white';
  for (i = 0; i<n*n; i++){
    grid.style.gridTemplateColumns = repeat;
    grid.style.gridTemplateRows = repeat;
    const row = document.createElement('div');
    row.classList.add('row'+ i);
    row.style.border=  'hidden #5f5b61';
    row.style.borderWidth = '1px';
    grid.appendChild(row);
  }
}

function clearGrid(){
  let boxes = Array.from(grid.children)
  boxes.forEach((element) => {
    element.remove();

  });
}

function sizePrompt(){

  let n = prompt('Enter canvas size. Example: Typing 50 creates a 50x50 canvas.');
  if (n===null) return;

  while(!isValidNumber(parseInt(n))){
    alert('You must enter a valid number. Try again');
    n = prompt('Enter canvas size. Example: Typing 50 creates a 50x50 canvas.');
    if (n===null) return;
  }

  createGrid(n);
}


function isValidNumber(num){
  if (!Number.isInteger(num) || num == null || num <= 0){
    return false;
  }
  else{
    return true;
  }
}

/*
Setting up a "hover" effect for the squares so that the grid divs change color
when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
 */

function hover(){
  let boxes = Array.from(grid.children)
  boxes.forEach((element) => {
    element.addEventListener("mouseover", color);

  });
}

function color(e){
  this.style.backgroundColor = document.querySelector('input[type="color"]').value;
}


function eraseCanvas(){
  let boxes = Array.from(grid.children)
  boxes.forEach((element) => {
    element.style.backgroundColor = 'white';
  });
}
