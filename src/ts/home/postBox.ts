// calculate the height of the text area after writing soem text.
function calcHeight(value: string): number {
	let numberOfLineBreaks: number = (value.match(/\n/g) || []).length;
	// min-height + lines x line-height + padding + border
	let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
	return newHeight;
}

// change text area height when writing inside it.
const textarea = document.querySelector(".post-text-area") as HTMLTextAreaElement;
textarea.addEventListener("keyup", () => {
	textarea.style.height = calcHeight(textarea.value) + "px";
});

// tags list
const listBtn = document.querySelector('.create-new-post-box div.btns .tags .tags-btn') as HTMLDivElement;
const list = document.querySelector('.create-new-post-box div.btns .tags ul.tags-selectbox') as HTMLUListElement;
const listItems = list.querySelectorAll('li');

// toggle tags list
listBtn.addEventListener('click', () => {
	listBtn.querySelector('i')?.classList.toggle('active');
	list.classList.toggle('active');
});

// // add tags to tags box
// listItems.forEach(item => {
// 	item.addEventListener('click', () => {

// 	});
// });