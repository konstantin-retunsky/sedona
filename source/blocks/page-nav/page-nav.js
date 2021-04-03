document.addEventListener("DOMContentLoaded", function (event) {
	let btnToggle = document.querySelector(".page-nav__toggle")
	let pageNavList = document.querySelector(".page-nav__list")
	let pageNavItems = document.querySelectorAll(".page-nav__item a")

	if (pageNavList)
		btnToggle.addEventListener("click", () => {
			if (pageNavList.classList.toggle("page-nav__list--active")) {
				btnToggle.attributes["aria-label"].value = "Закрыть меню"
				pageNavItems.forEach((el) => (el.tabIndex = 0))
			} else {
				btnToggle.attributes["aria-label"].value = "Открыть меню"
				pageNavItems.forEach((el) => (el.tabIndex = -1))
			}
		})
})
