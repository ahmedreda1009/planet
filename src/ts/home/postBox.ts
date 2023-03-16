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

// show floating new post box.
const floatingNewPost = document.querySelector('.floating-new-post-box') as HTMLDivElement;
window.addEventListener('click', (e: Event) => {
	const isPostBox = (e.target as HTMLDivElement)?.closest('.create-new-post-box');
	const showBtn = (e.target as HTMLDivElement)?.classList.contains('post-btn');
	const showIcon = (e.target as HTMLDivElement)?.closest('.post-icon');
	const hideNewPostBox = document.querySelector('.floating-new-post-box .fa-xmark') as HTMLElement;

	if (e.target === hideNewPostBox) floatingNewPost?.classList.remove('active');
	if (isPostBox) return;

	if (showBtn || showIcon) {
		floatingNewPost?.classList.toggle('active');
	} else {
		floatingNewPost?.classList.remove('active');
	}

});

// // tags list
// const listBtn = document.querySelector('.create-new-post-box div.btns .tags .tags-btn') as HTMLDivElement;
// const list = document.querySelector('.create-new-post-box div.btns .tags ul.tags-selectbox') as HTMLUListElement;
// const listItems = list.querySelectorAll('li');

// // toggle tags list
// listBtn.addEventListener('click', () => {
// 	listBtn.querySelector('i')?.classList.toggle('active');
// 	list.classList.toggle('active');
// });

// // add tags to tags box
// listItems.forEach(item => {
// 	item.addEventListener('click', () => {

// 	});
// });