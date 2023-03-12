// calculate the height of the text area after writing soem text.
function calcHeight(value: string): number {
	let numberOfLineBreaks: number = (value.match(/\n/g) || []).length;
	// min-height + lines x line-height + padding + border
	let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
	return newHeight;
}

// change text area height when writing inside it.
let textarea = document.querySelector(".post-text-area") as HTMLTextAreaElement;
textarea.addEventListener("keyup", () => {
	textarea.style.height = calcHeight(textarea.value) + "px";
});
