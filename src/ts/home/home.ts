import "../../scss/pages/home/_index.scss";

let authorized: boolean = true;

if (!authorized) {
	window.location.href = "index.html";
}
