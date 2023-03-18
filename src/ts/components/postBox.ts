import axios from 'axios';
import Swal from 'sweetalert2';
export { }

// get user data from local storage.
const userData: string = window.localStorage.getItem('user') as string;
const user = JSON.parse(userData);

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

// add the user name to the placeholder in text area.
textarea.placeholder = `What's on your mind, ${user.name.split(' ')[0]}?`;

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
if (Object.keys(user.profile_image).length !== 0) {
	userImg.src = user.profile_image;
}
userImg.dataset.id = user.id;
if (Object.keys(user.profile_image).length !== 0) {
	userImgFloatingBox.src = user.profile_image;
}
userImgFloatingBox.dataset.id = user.id;

// add new post request.
let postBtn = document.querySelectorAll('.create-new-post-box div.btns button.post-btn') as NodeList;
let postBodyElements = document.querySelectorAll('.create-new-post-box textarea') as NodeList;
let postImageElements = document.querySelectorAll('.create-new-post-box div.btns input') as NodeList;
postBtn.forEach(btn => {
	btn.addEventListener('click', (e: Event) => {
		console.log('hi');
		let postBody = (e.target as HTMLElement).closest('.create-new-post-box')?.querySelector('textarea') as HTMLTextAreaElement;
		let postImage = (e.target as HTMLElement).closest('.create-new-post-box')?.querySelector('div.btns input') as HTMLInputElement;

		console.log(postBody?.value);
		console.log(postImage?.value);
		if (postImage?.files) {
			console.log(postImage?.files[0]);
			if (postBody?.value === '' && postImage.value === '') return;
			createNewPost(postBody.value, postImage.files[0]);
		}

	});
});

function createNewPost(body: string, img: File) {
	let token = window.localStorage.getItem('token');

	let url = 'http://tarmeezacademy.com/api/v1/posts';
	let headers = {
		"authorization": `Bearer ${token}`,
		"Content-Type": 'multipart/form-data'
	}

	let formData = new FormData();
	formData.append('body', body);
	if (img) {
		formData.append('image', img);
	}


	axios.post(url, formData, { headers }).then(_ => {
		postBodyElements.forEach(ele => (ele as HTMLTextAreaElement).value = '');
		postImageElements.forEach(ele => (ele as HTMLInputElement).value = '');
		(document.querySelector('.create-new-post-box .post-img') as HTMLDivElement).innerHTML = '';
		window.location.reload();
	}).catch(error => {
		console.log(error.response.data.message);
		Swal.fire({
			icon: 'error',
			title: `${error.response.data.message}`,
			text: 'Something went wrong!'
		})
	});
}