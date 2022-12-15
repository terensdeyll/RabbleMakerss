'use strict';

// Buttons
const needsBtn = document.querySelector('.needs-btn');
const charact = document.querySelector('.charact-btn');

// Box
const needs = document.querySelector('.needs');
const characteristics = document.querySelector('.characteristics');

charact.addEventListener('click', function () {
  console.log('Click');

  charact.classList.add('active');
  needs.style.display = 'none';
  characteristics.style.display = 'grid';
  needsBtn.classList.remove('active');
});

needsBtn.addEventListener('click', function () {
  needsBtn.classList.add('active');
  characteristics.style.display = 'none';
  needs.style.display = 'grid';
  charact.classList.remove('active');
});
