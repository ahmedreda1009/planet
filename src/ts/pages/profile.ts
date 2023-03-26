import '../../scss/pages/profile.scss';
import '../components/global/post/newPostBox';
import '../components/global/navBar';
import '../global';
import '../components/profile/profilePosts';
import '../components/profile/profileData';
import '../components/profile/profileEdit';
import user from '../components/global/getUser';
// import '../components/global/connect';

if (user.id == window.localStorage.getItem('userProfileId')) {
    let profileBtnNav = document.querySelector('.icons > div.profile');
    profileBtnNav?.classList.add('text-info');

    let profileLeftNav = document.querySelector("body > div.main-wrapper > div > div.profile > div.profile-btn.btn.btn-light.fw-bold");
    profileLeftNav?.classList.add('text-info');
}