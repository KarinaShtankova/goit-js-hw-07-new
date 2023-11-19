const items = document.querySelector("#categories");
const categoriesQuantity = items.children.length;
console.log(`Number of categories: ${categoriesQuantity}`);

for (let index = 0; index < categoriesQuantity; index++) {
	const category = items.children[index];
	const categoryTitle = category.firstElementChild.textContent;
	const elements = category.lastElementChild.children.length;

	console.log(`Category: ${categoryTitle}`);
	console.log(`Elements: ${elements}`);
}




// const items = document.querySelectorAll(".item");
// const categoriesQuantity = items.length;

// console.log(`Number of categories:`, categoriesQuantity);

// const categoriesData = items.forEach(element => {
// 	const categories = element.querySelector("h2").textContent;
// 	const guantity = element.querySelectorAll("li").length;

// 	console.log(`Category:`, categories);
// 	console.log(`Elements:`, guantity);
// });
