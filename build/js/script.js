"use strict";

(function () {
  var nav = document.querySelector(".main-nav");
  var menuButton = document.querySelector(".main-nav__button");
  menuButton.classList.remove("main-nav__button--hidden");
  nav.classList.remove("main-nav--opened");
  menuButton.addEventListener("click", function () {
    var expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !expanded);

    if (expanded) {
      menuButton.classList.add("main-nav__button--closed");
      menuButton.classList.remove("main-nav__button--opened");
      nav.classList.add("main-nav--closed");
      nav.classList.remove("main-nav--opened");
    } else {
      menuButton.classList.add("main-nav__button--opened");
      menuButton.classList.remove("main-nav__button--closed");
      nav.classList.add("main-nav--opened");
      nav.classList.remove("main-nav--closed");
    }
  });
})();

data = [{
  "text": "Фото и видеоНе можете решиться на путешествие из-за курса?Фотографии помогут вам забыть о политике и экономике."
}, {
  "text": "неродные просторыАвтор фото: Борис"
}, {
  "text": "1350"
}, {
  "text": "Местная растительностьАвтор фото: Сергей"
}, {
  "text": "Дорога на северАвтор фото: Петр"
}, {
  "text": "Мост дьяволаАвтор фото: Антон"
}, {
  "text": "143"
}, {
  "text": "96"
}, {
  "text": "254"
}];