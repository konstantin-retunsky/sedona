document.addEventListener("DOMContentLoaded", function (event) {
	let btnToggle = document.querySelector(".page-nav__toggle");
	let pageNav = document.querySelector(".page-nav");

	pageNav
		? btnToggle.addEventListener("click", () =>
				pageNav.classList.toggle("page-nav--active")
		  )
		: false
})
