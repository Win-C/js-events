"use strict";

const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(evt){
  evt.stopPropagation(); // stop bubbling (which is from bottom to top)
  console.log(this.classList.value);
}

divs.forEach(div => div.addEventListener('click', logText, { 
  capture: false, // false by default, set to true to go top to bottom 
  // once: true // is same as unbinding from event listener so no future clicks
}));

// Useful for store checkouts so can only click checkout once
button.addEventListener('click', () => {
  console.log('Click!!!');
}, {
  once: true
});
