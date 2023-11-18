const items = document.querySelector("ul#categories");
const categoriesQuantity = items.children.length;
console.log(`Number of categories: ${categoriesQuantity}`);

for (let index = 0; index < categoriesQuantity; index++) {
	const category = items.children[index];
	const categoryTitle = category.firstElementChild.textContent;
	const elements = category.lastElementChild.children.length;

	console.log(`Category: ${categoryTitle}`);
	console.log(`Elements: ${elements}`);
}
