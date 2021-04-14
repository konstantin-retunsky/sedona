

let playerRange = document.querySelector(".video-player__range")

if (playerRange) {
	playerRange.addEventListener("input", function (e) {
		console.log(this.value)
	})
}
