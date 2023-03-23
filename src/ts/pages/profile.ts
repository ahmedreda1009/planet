import '../../scss/pages/profile.scss';
import '../components/post/newPostBox';
import '../components/global/navBar';
import '../global';
import '../components/global/connect';
import '../components/profile/profilePosts';
import '../components/profile/profileData';
import user from '../components/global/getUser';

if (user.id == window.localStorage.getItem('userProfileId')) {
    let profileBtnNav = document.querySelector('.icons > div.profile');
    profileBtnNav?.classList.add('text-info');

    let profileLeftNav = document.querySelector("body > div.main-wrapper > div > div.profile > div.profile-btn.btn.btn-light.fw-bold");
    profileLeftNav?.classList.add('text-info');
}