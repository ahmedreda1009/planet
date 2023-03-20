import { checkUrl, user } from './posts'

// set user image in profile card.
const profileCardImg = document.querySelector('.profile-icon .profile-img-icon img') as HTMLImageElement;
if (Object.keys(user.profile_image).length !== 0 && checkUrl(user.profile_image)) {
    profileCardImg.src = user.profile_image;
}
profileCardImg.dataset.userid = user.id;

// set user name in profile card.
const profileCardName = document.querySelector('#profile-card .name-and-username .name') as HTMLDivElement;
const userName = user.name.split(" ").map((element: string) => {
    return element[0].toUpperCase() + element.slice(1);
});
profileCardName.innerHTML = userName.join(' ');

// set user username in profile card.
const profileCardUsername = document.querySelector('#profile-card .name-and-username .username span') as HTMLSpanElement;
profileCardUsername.innerHTML = user.username;

let profileBtns = document.querySelectorAll('.profile-btn');
profileBtns.forEach(btn => {
    (btn as HTMLElement).dataset.userid = user.id;
    btn.addEventListener('click', () => {
        window.localStorage.setItem('userProfileId', user.id);
        window.location.href = 'profile.html';
    });
});