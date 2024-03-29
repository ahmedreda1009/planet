import axios from "axios";
import Swal from "sweetalert2";

// const baseUrl = "https://reqres.in";
const baseUrl = "https://tarmeezacademy.com/api/v1/register";

let loader = document.querySelector(".sign-up .login-loader") as HTMLElement;


// click to show sign up window.
const createNewAccBtn = document.getElementById("create-new-acc") as HTMLButtonElement;
const signUpBox = document.querySelector(".sign-up") as HTMLDivElement;
createNewAccBtn.addEventListener("click", (e) => {
	e.preventDefault();
	signUpBox.classList.add("active");
});

// click to hide sign up window.
const closeSignUp = document.getElementById("close-sign-up") as HTMLElement;
closeSignUp.addEventListener("click", () => {
	signUpBox.classList.remove("active");
});

// hide sign up when clicking on empty space.
const overlayLayer = document.querySelector(".sign-up .overlay") as HTMLDivElement;
overlayLayer.addEventListener("click", () => {
	signUpBox.classList.remove("active");
});

// register function
function register(name: string, username: string, password: string, img?: File): void {
	loader.classList.remove('hide');

	let formData = new FormData();
	formData.append("name", name);
	formData.append("username", username);
	formData.append("password", password);

	if (img) {
		formData.append("image", img);
	}

	let headers = {
		"Content-Type": 'multipart/form-data'
	}

	axios.post(baseUrl, formData, { headers }).then((response) => {
		window.localStorage.setItem("token", response.data.token);
		window.localStorage.setItem("user", JSON.stringify(response.data.user));

		window.location.href = "home.html";
	}).catch((res: any) => {
		window.localStorage.removeItem("token");
		window.localStorage.removeItem("user");

		let errMsg;

		if (res.response.data.message === "The image failed to upload.") {
			errMsg = "Image size is too big."
		} else {
			errMsg = res.response.data.message;
		}

		Swal.fire({
			title: errMsg,
			showConfirmButton: true,
			icon: 'error'
		})
	}).finally(() => {
		loader.classList.add('hide');
	});
}

// trigger sign-up.
const firstNameSignUp = document.getElementById("first-name-sign-up") as HTMLInputElement;
const lastNameSignUp = document.getElementById("last-name-sign-up") as HTMLInputElement;
const emailSignUp = document.getElementById("email-sign-up") as HTMLInputElement;
const passwordSignUp = document.getElementById("password-sign-up") as HTMLInputElement;
const pictureSignUpValue = document.getElementById("profile-pic") as HTMLInputElement;
// const imgInput = document.getElementById("select-img") as HTMLImageElement;
const signUpBtn = document.getElementById("sign-up-btn") as HTMLButtonElement;

const inputs: HTMLInputElement[] = [firstNameSignUp, lastNameSignUp, emailSignUp, passwordSignUp];
signUpBtn.addEventListener("click", (e) => {
	e.preventDefault();


	const nameValue = `${firstNameSignUp.value.trim()} ${lastNameSignUp.value.trim()}`;

	// let inputs: HTMLInputElement[] = [emailSignUp, passwordSignUp];

	// check if any input is empty.
	if (inputs.every((ele: HTMLInputElement) => Boolean(ele.value))) {
		// remove red border from input file.
		// imgInput.classList.remove("empty");

		// remove red border from all inputs.
		inputs.forEach((input: HTMLInputElement) => {
			input.classList.remove("empty");
		});

		// trigger register request.
		// register(nameSignUp.value, emailSignUp.value, passwordSignUp.value, pictureSignUpValue.files[0]);
		if (pictureSignUpValue.files) {
			register(nameValue, emailSignUp.value, passwordSignUp.value, pictureSignUpValue.files[0]);
		} else {
			console.log('no images');
			register(nameValue, emailSignUp.value, passwordSignUp.value);
		}
	} else {
		// remove red border from input image
		// imgInput.classList.remove("empty");

		// add red border to the empty inputs.
		inputs.forEach((input) => {
			input.classList.remove("empty");

			if (!input.value) {
				input.classList.add("empty");
			}
		});

		// add red border to input image when it is empty.
		// if (!pictureSignUpValue.value) {
		// 	imgInput.classList.add("empty");
		// }
	}
	// inputs.forEach((ele) => {
	// 	console.log(ele.value);
	// });
});

// handle border color of inputs when changing values
inputs.forEach((input: HTMLInputElement) => {
	input.addEventListener("input", () => {
		if (input.value) {
			input.classList.remove("empty");
		} else {
			input.classList.add("empty");
		}

		// imgInput.classList.remove('empty');
		// // add red border to input image when it is empty.
		// if (!pictureSignUpValue.value) {
		// 	imgInput.classList.add('empty');
		// }
	});
});

// change file input.
const inputFile = document.getElementById("profile-pic") as HTMLInputElement;
const selectedImg = document.querySelector("#selected-img img") as HTMLImageElement;
const removePicBtn = document.getElementById("remove-profile-picture") as HTMLSpanElement;

inputFile.addEventListener("change", () => {
	// const selectImgBtn = document.getElementById("select-img") as HTMLSpanElement;
	// selectImgBtn.classList.remove("empty");

	// create the images url
	// if files is null return.
	if (!inputFile.files) return;
	const src = URL.createObjectURL(inputFile.files[0]);

	// if (!src) {
	// 	selectImgBtn.classList.add("empty");
	// } else {
	// 	selectImgBtn.classList.remove("empty");
	// }

	selectedImg.src = src;

	removePicBtn.addEventListener("click", (e) => {
		e.preventDefault();

		// remove image when click on remove image icon.
		selectedImg.src = require("../../../assets/profile_picture.png");
		inputFile.value = "";
		// selectImgBtn.classList.add("empty");
	});
});

// // image remove button.
// const selectedImgSpan = document.querySelector("#selected-img") as HTMLSpanElement;
// selectedImgSpan.addEventListener('mouseover', () => {
// 	// check if there is files is not null
// 	// check if the files is more than 0
// 	// hide close button if there are files
// 	if (inputFile.files?.length && inputFile.files?.length > 0) {
// 		removePicBtn.classList.add('show');
// 	} else {
// 		removePicBtn.classList.remove('show');
// 	}
// });

// // hide btn when mouse leaves.
// selectedImgSpan.addEventListener('mouseout', () => {
// 	removePicBtn.classList.remove('show');
// });

// image remove button.
inputFile.addEventListener("change", () => {
	// check if there is files is not null
	// check if the files is more than 0
	// hide close button if there are files
	// if (inputFile.files?.length && inputFile.files?.length > 0) {
	// 	removePicBtn.classList.add("show");
	// } else {
	// 	removePicBtn.classList.remove("show");
	// }


	removePicBtn.classList.add("show");
});
removePicBtn.addEventListener('click', () => {
	setTimeout(() => {
		// check if there is files is not null
		// check if the files is more than 0
		// hide close button if there are files
		if (inputFile.files?.length && inputFile.files?.length > 0) {
			removePicBtn.classList.add("show");
		} else {
			removePicBtn.classList.remove("show");
		}
	}, 0);
});