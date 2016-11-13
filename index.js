
let color;
let width;
let height;

//////// DOM GRID ////////
// Specify custom grid size & create DOM grid
(function() {
  'use strict';

const submitButton = document.getElementById('submit');
const canvas = document.getElementById('canvas');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  width = parseInt(document.getElementById('width').value);
  height = parseInt(document.getElementById('height').value);
  canvas.innerHTML = '';
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

//////// DOM GRID INTERACTION ////////
  // Choose & paint color for DOM canvas
  const colorButtons = document.getElementsByClassName('color');
  const currentColor = document.getElementById('current');
  const p = document.createElement('p');

  for (const button of colorButtons) {
    button.addEventListener('click', () => {
      color = button.id;
      currentColor.setAttribute('class', color);
      p.setAttribute('class', 'current');
      p.textContent = color;
      currentColor.appendChild(p);
      console.log(color);
    });
  }

  const cells = document.getElementsByClassName('cell');
  for (const cell of cells) {
    cell.addEventListener('click', () => {
      cell.setAttribute('class', 'cell ' + color);
    });
  }
  // Right-click clear for DOM canvas
  for (const cell of cells) {
    cell.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        cell.setAttribute('class', 'cell white');
    });
  }
});

//////// DEFAULT GRID INTERACTION ////////
// Choose & paint cell color
const colorButtons = document.getElementsByClassName('color');
const currentColor = document.getElementById('current');
const p = document.createElement('p');

for (const button of colorButtons) {
  button.addEventListener('click', () => {
    color = button.id;
    currentColor.setAttribute('class', color);
    p.setAttribute('class', 'current');
    p.textContent = color;
    currentColor.appendChild(p);
    console.log(color);
  });
}

const cells = document.getElementsByClassName('cell');

for (const cell of cells) {
  cell.addEventListener('click', () => {
    cell.setAttribute('class', 'cell ' + color);
  });
}

//////// UTILITY ////////
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

// Right-shadow
// const rowsInCanvas = document.getElementsByClassName('row');
//
// for (const row of rowsInCanvas) {
//   row.lastChild.classList.add('right-shadow')
// }



//////// EXTRA FEATURES (non-DOM grid) ////////
// Eraser: white on right-click @ DEFAULT GRID
for (const cell of cells) {
  cell.addEventListener('contextmenu', function(event) {
      event.preventDefault();
      cell.setAttribute('class', 'cell white');
  });
}

// Undo: ctrl+z to go back 1 step

// Change input field on focus
const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  input.addEventListener('focus', () => {
    input.setAttribute('value', '');
    input.classList.add('focus');
  });
}




///////END////////

})();
