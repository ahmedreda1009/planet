import axios from "axios";

// const baseUrl = "https://reqres.in";
const baseUrl = "https://tarmeezacademy.com/api/v1/'";

// click to show sign up window.
const createNewAccBtn = document.getElementById(
	"create-new-acc"
) as HTMLButtonElement;
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
const overlayLayer = document.querySelector(
	".sign-up .overlay"
) as HTMLDivElement;
overlayLayer.addEventListener("click", () => {
	signUpBox.classList.remove("active");
});

// register function
function register(username: string, password: string): void {
	axios
		.post(`${baseUrl}/api/register`, {
			email: username,
			password: password,
		})
		.then((response) => {
			window.localStorage.setItem("token", response.data.token);

			window.location.href = "home.html";
		});
}

// trigger sign-up.
const nameSignUp = document.getElementById("name-sign-up") as HTMLInputElement;
const emailSignUp = document.getElementById(
	"email-sign-up"
) as HTMLInputElement;
const passwordSignUp = document.getElementById(
	"password-sign-up"
) as HTMLInputElement;
const pictureSignUpValue = document.getElementById(
	"profile-pic"
) as HTMLInputElement;
const imgInput = document.getElementById("select-img") as HTMLImageElement;
const signUpBtn = document.getElementById("sign-up-btn") as HTMLButtonElement;
const inputs: HTMLInputElement[] = [
	nameSignUp,
	emailSignUp,
	passwordSignUp,
	pictureSignUpValue,
];
signUpBtn.addEventListener("click", (e) => {
	e.preventDefault();

	// let inputs: HTMLInputElement[] = [emailSignUp, passwordSignUp];

	// check if any input is empty.
	if (inputs.every((ele: HTMLInputElement) => Boolean(ele.value))) {
		// remove red border from input file.
		imgInput.classList.remove("empty");

		// remove red border from all inputs.
		inputs.forEach((input: HTMLInputElement) => {
			input.classList.remove("empty");
		});

		// trigger register request.
		register(emailSignUp.value, passwordSignUp.value);
	} else {
		// remove red border from input image
		imgInput.classList.remove("empty");

		// add red border to the empty inputs.
		inputs.forEach((input) => {
			input.classList.remove("empty");

			if (!input.value) {
				input.classList.add("empty");
			}
		});

		// add red border to input image when it is empty.
		if (!pictureSignUpValue.value) {
			imgInput.classList.add("empty");
		}
	}
	inputs.forEach((ele) => {
		console.log(ele.value);
	});
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
	const selectImgBtn = document.getElementById("select-img") as HTMLSpanElement;
	selectImgBtn.classList.remove("empty");

	// create the images url
	// if files is null return.
	if (!inputFile.files) return;
	const src = URL.createObjectURL(inputFile.files[0]);

	if (!src) {
		selectImgBtn.classList.add("empty");
	} else {
		selectImgBtn.classList.remove("empty");
	}

	selectedImg.src = src;

	removePicBtn.addEventListener("click", (e) => {
		e.preventDefault();

		// remove image when click on remove image icon.
		selectedImg.src = require("../../assets/profile_picture.png");
		inputFile.value = "";
		selectImgBtn.classList.add("empty");
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
	if (inputFile.files?.length && inputFile.files?.length > 0) {
		removePicBtn.classList.add("show");
	} else {
		removePicBtn.classList.remove("show");
	}
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