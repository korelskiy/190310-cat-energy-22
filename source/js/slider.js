const btn_before = document.querySelector(".effect-slider__label--before");
const btn_after = document.querySelector(".effect-slider__label--after");
const img_after = document.querySelector(".effect-slider__item--before");
const img_before = document.querySelector(".effect-slider__item--after");
const range = document.querySelector(".effect-slider__range");

btn_before.onclick = function() {
  img_before.classList.remove("effect-slider__item--off");
  img_after.classList.add("effect-slider__item--off");
}

btn_after.onclick = function() {
  img_after.classList.remove("effect-slider__item--off");
  img_before.classList.add("effect-slider__item--off");
}
