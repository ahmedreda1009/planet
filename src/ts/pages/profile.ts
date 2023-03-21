import '../../scss/pages/profile.scss';
import '../components/postBox';
import '../components/navBar';
import '../global';
import '../components/connect';
import '../components/profilePosts';
import '../components/profileData';
import { user } from '../components/posts';

if (user.id == window.localStorage.getItem('userProfileId')) {
    let profileBtnNav = document.querySelector('.icons > div.profile');
    profileBtnNav?.classList.add('text-info');

    let profileLeftNav = document.querySelector("body > div.main-wrapper > div > div.profile > div.profile-btn.btn.btn-light.fw-bold");
    profileLeftNav?.classList.add('text-info');
}