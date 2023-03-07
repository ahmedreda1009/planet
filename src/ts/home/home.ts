import "../../scss/pages/home/_index.scss";
import '../home/postBox';

let authorized: boolean = true;

if (!authorized) {
	window.location.href = "index.html";
}