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
  if (pageNavList) btnToggle.addEventListener("click", function () {
    return pageNavList.classList.toggle("page-nav__list--active");
  });
});