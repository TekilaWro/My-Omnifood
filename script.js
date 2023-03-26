"use strict";

const actionBtn = document.querySelector(".cta-btn");

actionBtn.addEventListener("click", function () {
  document.querySelector(".modal").classList.toggle("hidden");
  document.querySelector(".overlay").classList.toggle("hidden");
});

const closemodal = function () {
  document.querySelector(".modal").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
};

document.querySelector(".closemodal").addEventListener("click", closemodal);
document.querySelector(".overlay").addEventListener("click", closemodal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closemodal();
  }
});
