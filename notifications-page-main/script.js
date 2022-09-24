"use strict";

const button = document.querySelector(".button");

button.addEventListener("click", function () {
  document.querySelector(".number-3").classList.toggle("hidden-2");

  document.querySelector(".colored").classList.toggle("color");
  document.querySelector(".coloredd").classList.toggle("color");
  document.querySelector(".coloreddd").classList.toggle("color");

  document.querySelector(".circle").classList.toggle("c1");
  document.querySelector(".ee").classList.toggle("c1");
  document.querySelector(".eee").classList.toggle("c1");
});
