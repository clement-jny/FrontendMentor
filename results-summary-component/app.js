let data = [];
fetch("./data.json")
	.then((res) => {
		if (res.ok) {
			return res.json();
		} else {
			throw new Error(res.status);
		}
	})
	.then((res) => {
		data = res;
	})
	.catch((err) => {
		console.log(err);
	});

/* Image */
const reaction__img = document.getElementById("reaction__img");
const memory__img = document.getElementById("memory__img");
const verbal__img = document.getElementById("verbal__img");
const visual__img = document.getElementById("visual__img");

/* Text */
const reaction__text = document.getElementById("reaction__text-span");
const memory__text = document.getElementById("memory__text-span");
const verbal__text = document.getElementById("verbal__text-span");
const visual__text = document.getElementById("visual__text-span");

/* Score */
const reaction__score = document.getElementById("reaction__score-span");
const memory__score = document.getElementById("memory__score-span");
const verbal__score = document.getElementById("verbal__score-span");
const visual__score = document.getElementById("visual__score-span");


window.addEventListener("load", () => {
	console.log("Window loaded!");

	reaction__img.src = data[0].icon;
	memory__img.src = data[1].icon;
	verbal__img.src = data[2].icon;
	visual__img.src = data[3].icon;


	reaction__text.textContent = data[0].category;
	memory__text.textContent = data[1].category;
	verbal__text.textContent = data[2].category;
	visual__text.textContent = data[3].category;


	reaction__score.textContent = data[0].score;
	memory__score.textContent = data[1].score;
	verbal__score.textContent = data[2].score;
	visual__score.textContent = data[3].score;
});