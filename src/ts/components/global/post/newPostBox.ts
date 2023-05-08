import user from '../getUser';
import checkUrl from '../checkImageUrl';
const username = require('../../usernameSize');
export { }

// calculate the height of the text area after writing soem text.
function calcHeight(value: string): number {
	let numberOfLineBreaks: number = (value.match(/\n/g) || []).length;
	// min-height + lines x line-height + padding + border
	let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
	return newHeight;
}

// change text area height when writing inside it.
const textarea = document.querySelector(".post-text-area") as HTMLTextAreaElement;
const floatingTextarea = document.querySelector(".floating-new-post-box .post-text-area") as HTMLTextAreaElement;
textarea.addEventListener("keyup", () => {
	textarea.style.height = calcHeight(textarea.value) + "px";
});

// add the user name to the placeholder in text area.
let userFirstName = username(user.name.split(" ")[0]);
textarea.placeholder = `What's on your mind, ${userFirstName}?`;
floatingTextarea.placeholder = `What's on your mind, ${userFirstName}?`;


let loader = document.querySelector('.floating-new-post-box .create-new-post-box .new-post-loader .lds-ellipsis');

// show floating new post box.
const floatingNewPost = document.querySelector('.floating-new-post-box') as HTMLDivElement;
window.addEventListener('click', (e: Event) => {
	const isPostBox = (e.target as HTMLDivElement)?.closest('.create-new-post-box');
	const showBtn = (e.target as HTMLDivElement)?.classList.contains('post-btn');
	const showIcon = (e.target as HTMLDivElement)?.closest('.post-icon');
	const hideNewPostBox = document.querySelector('.floating-new-post-box .fa-xmark') as HTMLElement;
	const makeNewPostBtn = document.querySelector('.floating-new-post-box .post-btn');

	// if (e.target === hideNewPostBox || e.target === makeNewPostBtn) floatingNewPost?.classList.remove('active');
	if (e.target === hideNewPostBox) floatingNewPost?.classList.remove('active');
	// if (e.target === makeNewPostBtn) {
	//	loader?.classList.remove('hide');
	// }

	if (isPostBox) return;


	if (showBtn || showIcon) {
		floatingNewPost?.classList.toggle('active');
		floatingNewPost?.querySelector('textarea')?.focus();
	} else {
		floatingNewPost?.classList.remove('active');
	}

});

// add image to post box.
let addImgBtns = document.querySelectorAll('.create-new-post-box div.btns .attach-img-btn i');

addImgBtns.forEach(btn => {
	let imgBox = btn.closest('.create-new-post-box')?.querySelector('.post-img') as HTMLDivElement;
	let inputImg = btn.previousElementSibling as HTMLInputElement;

	btn.addEventListener('click', () => {
		(btn.previousElementSibling as HTMLInputElement)?.click()
	});

	inputImg?.addEventListener('change', () => {
		if (!inputImg.files) return;
		let src = URL.createObjectURL(inputImg?.files[0]);

		let postImg = `
			<img src="${src}" />
			<i class="fa-solid fa-x" title="Remove image"></i>
		`;
		imgBox.innerHTML = postImg;

		imgBox.querySelector('i')?.addEventListener('click', (e: Event) => {
			e.stopPropagation();
			imgBox.innerHTML = '';
			inputImg.value = '';
		});
	});
});

// add user image in new post box.
const userImg = document.querySelector('.create-new-post-box .profile-icon .profile-img-icon img') as HTMLImageElement;
const userImgFloatingBox = document.querySelector('.floating-new-post-box .create-new-post-box .profile-icon .profile-img-icon img') as HTMLImageElement;
if (Object.keys(user.profile_image).length !== 0 && checkUrl(user.profile_image)) {
	userImg.src = user.profile_image;
}
(userImg.closest('.profile-icon') as HTMLElement).dataset.userid = user.id;
if (Object.keys(user.profile_image).length !== 0 && checkUrl(user.profile_image)) {
	userImgFloatingBox.src = user.profile_image;
}
(userImgFloatingBox.closest('.profile-icon') as HTMLElement).dataset.userid = user.id;
