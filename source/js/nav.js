const burger = document.querySelector(".page-header__burger");
const main_nav = document.querySelector(".main-nav");

main_nav.classList.remove("main-nav--nojs");
burger.classList.remove("page-header__burger--nojs");
main_nav.classList.add("main-nav--closed");

burger.onclick = function() {
  main_nav.classList.toggle("main-nav--closed");
  burger.classList.toggle("page-header__burger--closed");
}
