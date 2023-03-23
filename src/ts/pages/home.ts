import "../../scss/pages/home/_index.scss";
import '../components/post/newPostBox';
import '../components/global/navBar';
import '../global';
import '../components/post/posts';
import '../components/home/homePosts';
// import '../components/global/connect';

// set home icon color when we are on home.html
let homeBtnNav = document.querySelector('.icons > div.home');
homeBtnNav?.classList.add('text-info');

let homeLeftNav = document.querySelector("body > div.main-wrapper > div > div.profile > div.home-btn.btn.btn-light.fw-bold");
homeLeftNav?.classList.add('text-info');