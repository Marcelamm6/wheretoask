"use strict";

let comer = document.querySelector(".comida");
const btn = document.querySelector(".btn");

const comidas = ["Pizza", "Lasanha", "Coxinha", "Hamburguer"];

//  = Math.trunc(Math.random() * comidas.length);

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let comidasIndex = Math.trunc(Math.random() * comidas.length);
  // console.log(comidasIndex);
  comer.innerHTML = comidas[comidasIndex];
});
