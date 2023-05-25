"use strict";

const submitBtn = document.getElementById("submit");
const rateBtns = document.querySelectorAll(".btn");
let selectedOf = document.getElementById("pee");

submitBtn.disabled = true;

const handleSubmit = () => {
  document.querySelector(".rateme").classList.toggle("hidden");
  document.querySelector(".thankyou").classList.toggle("hidden");
};

// class toggles

if (rateBtns) {
  rateBtns.forEach((el, key) => {
    el.addEventListener("click", () => {
      el.classList.toggle("white");
      selectedOf.textContent = el.textContent;
      rateBtns.forEach((ell, els) => {
        if (key !== els) ell.classList.remove("white");
      });
    });
  });
}

// enabling submit button

for (let i = 0; i < rateBtns.length; i++) {
  rateBtns[i].addEventListener("click", () => {
    console.log("clicked");
    submitBtn.disabled = false;
  });
}

submitBtn.addEventListener("click", handleSubmit);
