document.querySelector("#add").addEventListener("click", function () {
	fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(function(data) {
		let lst = document.querySelector("ul");
		let li = document.createElement("li");
		let image = document.createElement("img");
		image.src = data.message;
		li.append(image);
		lst.insertBefore(li, lst.firstChild);
	})
	.catch((error) => {
		console.log(error)
	});

});

document.querySelector("#clear").addEventListener("click", function () {
	document.querySelector("ul").innerHTML = "";
})

