import Swal from "sweetalert2";
import axios from "axios";

import baseUrl from "../global";

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
	axios
		.post(`${baseUrl}/api/login`, {
			email: username,
			password: password,
		})
		.then((response) => {
			window.localStorage.setItem("token", response.data.token);
			window.localStorage.setItem("user", JSON.stringify(response.data));

			window.location.href = "home.html";
		})
		.catch((response) => {
			window.localStorage.removeItem("token");
			console.log(response);
			// window.location.href = "index.html";
		});
}
// password input
const passwordInput = document.getElementById(
	"password-login"
) as HTMLInputElement;

// trigger login.
const loginBtn = document.getElementById("login-btn") as HTMLButtonElement;
loginBtn.addEventListener("click", (e) => {
	e.preventDefault();

	const emailInput = document.getElementById(
		"email-login"
	) as HTMLInputElement;

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
