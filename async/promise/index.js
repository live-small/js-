function fetchAndDecode(url, type) {
	return fetch(url)
		.then((response) => {
			if (type === "blob") {
				return response.blob();
			}
		})
		.catch((e) => {
			console.log(
				`there has been a problem with your fetch operation: ${e.message}`
			);
		});
}

let grid = fetchAndDecode("grid.png", "blob");
let receipt = fetchAndDecode("green.jpeg", "blob");
console.log(grid, receipt);

Promise.all([grid, receipt]).then((value) => {
	console.log(value);
	let url1 = URL.createObjectURL(value[0]);
	let url2 = URL.createObjectURL(value[1]);
	let img1 = document.createElement("img");
	let img2 = document.createElement("img");
	img1.src = url1;
	img2.src = url2;
	document.body.appendChild(img1);
	document.body.appendChild(img2);
});

// 참고: MDN - https://developer.mozilla.org/ko/docs/Learn/JavaScript/Asynchronous/Promises#building_your_own_custom_promises
