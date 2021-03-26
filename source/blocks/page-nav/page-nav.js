document.addEventListener("DOMContentLoaded", function (event) {
	let btnToggle = document.querySelector(".page-nav__toggle");
	let pageNavList = document.querySelector(".page-nav__list");

	if (pageNavList)
		btnToggle.addEventListener("click", () =>
			pageNavList.classList.toggle("page-nav__list--active")
		);
});
