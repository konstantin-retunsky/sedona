"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelectorAll(".burger-ico").forEach(function (burger) {
    return burger.addEventListener("click", function (eBurger) {
      this.querySelector("span") ? this.querySelector("span").classList.toggle("burger-ico__active") : false;
    });
  });
});
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