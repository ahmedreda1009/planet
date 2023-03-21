import "../../scss/pages/home/_index.scss";
import '../components/postBox';
import '../components/navBar';
import '../global';
import '../components/posts';
import '../components/connect';

// set home icon color when we are on home.html
let homeBtnNav = document.querySelector('.icons > div.home');
homeBtnNav?.classList.add('text-info');

let homeLeftNav = document.querySelector("body > div.main-wrapper > div > div.profile > div.home-btn.btn.btn-light.fw-bold");
homeLeftNav?.classList.add('text-info');