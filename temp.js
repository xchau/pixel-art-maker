
let color;
let width;
let height;

// Specify custom grid size & create DOM canvas
(function() {
  'use strict';

const submitButton = document.getElementById('submit');
const canvas = document.getElementById('canvas');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  width = parseInt(document.getElementById('width').value);
  height = parseInt(document.getElementById('height').value);
  canvas.innerHTML = '';
  // console.log(typeof width);
  // console.log(typeof height);
  for (let i = 0; i < height; i++) {
    const rowDiv = document.createElement('div');
    console.log(height);
    rowDiv.classList.add('row');
  for (let j = 0; j < width; j++) {
    const div = document.createElement('div');
    div.classList.add('cell');
    rowDiv.appendChild(div);
    document.getElementById('canvas').appendChild(rowDiv);
    }
  }
  console.log(canvas);

  // Choose & paint color for DOM canvas
  const colorButtons = document.getElementsByClassName('color');

  for (const button of colorButtons) {
    button.addEventListener('click', () => {
      color = button.id;
      console.log(color);
    });
  }

  const cells = document.getElementsByClassName('cell');
  for (const cell of cells) {
    cell.addEventListener('click', () => {
      cell.setAttribute('class', 'cell ' + color);
    });
  }
});

// Add classes to rows & cells

for (let i = 0; i < height; i++) {
  const rowDiv = document.createElement('div');
  console.log(height);
  rowDiv.classList.add('row');
  for (let j = 0; j < width; j++) {
    const div = document.createElement('div');
    div.classList.add('cell');
    rowDiv.appendChild(div);
    document.getElementById('canvas').appendChild(rowDiv);
  }
}
console.log(canvas);

////////////////

const colorButtons = document.getElementsByClassName('color');

for (const button of colorButtons) {
  button.addEventListener('click', () => {
    color = button.id;
    console.log(color);
  });
}

const cells = document.getElementsByClassName('cell');
for (const cell of cells) {
  cell.addEventListener('click', () => {
    cell.setAttribute('class', 'cell ' + color);
  });
}

// Eraser: WHITE on RIGHT-CLICK
for (const cell of cells) {
  cell.addEventListener('contextmenu', function(event) {
      event.preventDefault();
      cell.setAttribute('class', 'cell white');
  });
}

// Undo: ctrl+z to go back 1 step


///////////////

// canvas.addEventListener('contextmenu', function(event) {
//     event.preventDefault();
//     color = white;
//     return false;
// }, false);



})();
