"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelectorAll(".burger-ico").forEach(function (burger) {
    return burger.addEventListener("click", function (eBurger) {
      this.querySelector("span") ? this.querySelector("span").classList.toggle("burger-ico--active") : false;
    });
  });
});
document.addEventListener("DOMContentLoaded", function (event) {
  var btnToggle = document.querySelector(".page-nav__toggle");
  var pageNavList = document.querySelector(".page-nav__list");
  var pageNavItems = document.querySelectorAll(".page-nav__item a");
  if (pageNavList) btnToggle.addEventListener("click", function () {
    if (pageNavList.classList.toggle("page-nav__list--active")) {
      btnToggle.attributes["aria-label"].value = "Закрыть меню";
      pageNavItems.forEach(function (el) {
        return el.tabIndex = 0;
      });
    } else {
      btnToggle.attributes["aria-label"].value = "Открыть меню";
      pageNavItems.forEach(function (el) {
        return el.tabIndex = -1;
      });
    }
  });
});