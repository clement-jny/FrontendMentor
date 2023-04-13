window.addEventListener("load", () => {
	console.log("Window loaded!");

	fetch("./data.json")
		.then((res) => {
			if (res.ok) {
				return res.json();
			} else {
				throw new Error(res.status);
			}
		})
		.then((res) => {
			res.forEach(element => {
				const categoryName = element.category.toLowerCase();

				document.getElementById(`${categoryName}__img`).src = element.icon;
				document.getElementById(`${categoryName}__text-span`).textContent = element.category;
				document.getElementById(`${categoryName}__score-span`).textContent = element.score;
			});
		})
		.catch((err) => {
			console.log(err);
		});
});