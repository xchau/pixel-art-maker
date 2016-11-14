
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
  const currentColor = document.getElementById('current');
  const p = document.createElement('p');
  const hexes = document.getElementsByClassName('hex');

  for (const hex of hexes) {
    hex.addEventListener('click', () => {
      color = hex.id;
      currentColor.textContent = '';
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
  // Eraser: white on right-click @ DOM GRID
  for (const cell of cells) {
    cell.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        cell.setAttribute('class', 'cell white');
    });
  }
  /// END OF INNER IIFE ///
});

//////// DEFAULT GRID INTERACTION ////////
// Choose & paint cell color
const currentColor = document.getElementById('current');
const p = document.createElement('p');
const hexes = document.getElementsByClassName('hex');

for (const hex of hexes) {
  hex.addEventListener('click', () => {
    color = hex.id;
    currentColor.style.cssText = null;
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
    cell.style.backgroundColor = userColor;
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

// Set custom color
const userColorButton = document.getElementById('color-submit');
let userColor = '';
userColorButton.addEventListener('click', (event) => {
  event.preventDefault();
  userColor = document.getElementById('user-color').value;
  currentColor.style.backgroundColor = userColor;
  p.setAttribute('class', 'current');
  p.textContent = userColor;
  currentColor.appendChild(p);
});



//////// EXTRA FEATURES (non-DOM grid) ////////
// Eraser: white on right-click @ DEFAULT GRID
for (const cell of cells) {
  cell.addEventListener('contextmenu', function(event) {
      event.preventDefault();
      cell.setAttribute('class', 'cell white');
  });
}

// Undo: ctrl+z to go back 1 step

// Clear input field on focus
const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  input.addEventListener('focus', () => {
    input.setAttribute('value', '');
    input.classList.add('focus');
  });
}






})();
