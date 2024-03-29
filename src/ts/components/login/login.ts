import Swal from "sweetalert2";
import axios from "axios";

// const baseUrl = "https://reqres.in";
const baseUrl = "https://tarmeezacademy.com/api/v1";

let loader = document.querySelector('.login-box .login-loader') as HTMLElement;

// modal fires when user clicks on the forget password button.
const forgottenPasswordBtn = document.getElementById(
	"forgotten-password"
) as HTMLHeadingElement;
forgottenPasswordBtn.addEventListener("click", () => {
	Swal.fire({
		title: "Forgot your password?",
		text: "Don't forget it again, ok?",
		icon: "info",
		confirmButtonColor: "#3fc3ee",
	});
});

// login function
function login(username: string, password: string): void {
	loader.classList.remove('hide');

	axios.post(`${baseUrl}/login`, {
		"username": username,
		"password": password,
	}).then((response) => {
		window.localStorage.setItem("token", response.data.token);
		window.localStorage.setItem("user", JSON.stringify(response.data.user));

		window.location.href = "home.html";
	}).catch((response) => {
		window.localStorage.removeItem("user");
		window.localStorage.removeItem("token");

		Swal.fire({
			title: response.response.data.message,
			showConfirmButton: true,
			// 'We will miss you.',
			icon: 'error'
		})
	}).finally(() => {
		loader.classList.add('hide');
	});
}
// password input
const passwordInput = document.getElementById("password-login") as HTMLInputElement;

// trigger login.
const loginBtn = document.getElementById("login-btn") as HTMLButtonElement;
loginBtn.addEventListener("click", (e) => {
	e.preventDefault();

	const emailInput = document.getElementById("email-login") as HTMLInputElement;

	// trigger login request.
	login(emailInput.value, passwordInput.value);
});

// toggle show password
const showIconBtn = document.getElementById("show-password") as HTMLElement;
showIconBtn.addEventListener("click", () => {
	if (showIconBtn.classList.contains("fa-eye")) {
		showIconBtn.classList.remove("fa-eye");
		showIconBtn.classList.add("fa-eye-slash");
		passwordInput.setAttribute("type", "text");
	} else {
		showIconBtn.classList.add("fa-eye");
		showIconBtn.classList.remove("fa-eye-slash");
		passwordInput.setAttribute("type", "password");
	}
});
