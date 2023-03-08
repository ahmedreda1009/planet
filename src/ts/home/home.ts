if (!window.localStorage.getItem("token")) {
	window.location.href = "index.html";
}

import "../../scss/pages/home/_index.scss";
import '../home/postBox';
