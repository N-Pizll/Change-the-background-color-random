//
let body = document.body;
let btncolor = document.querySelector("#btncolor");

//
btncolor.addEventListener("click", rgbcolor);

//  function  random nubmer

function randomball() {
  return Math.floor(Math.random() * 255);
}

function rgbcolor() {
  let rgb1color =`rgb(${randomball()},${randomball()},${randomball()})`;
  body.style.backgroundColor = rgb1color;
}

