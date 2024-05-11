// //
// let body = document.body;
// let btncolor = document.querySelector("#btncolor");

// //
// btncolor.addEventListener("click", rgbcolor);

// //  function  random nubmer

// function randomball() {
//   return Math.floor(Math.random() * 255)
// }

// function rgbcolor() {
//   let rgb1color = "rgb( ${randomball()},${randomball()},${randomball()})";
//   body.style.backgroundColor = rgb1color;
// }
let btncolor =document.querySelector("btncolor")
const btn = document.getElementById("btncolor");

let rgbrandom = () => {
  return Math.floor(Math.random() * 256);
};
let changcolor = () => {
  console.log("Function called");
};
// btncolor.addEventListener ("click",changcolor)