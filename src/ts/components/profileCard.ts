// get user data from local storage.
const userData: string = window.localStorage.getItem('user') as string;
const user = JSON.parse(userData);

// set user image in profile card.
const profileCardImg = document.querySelector('.profile-icon .profile-img-icon img') as HTMLImageElement;
if (Object.keys(user.profile_image).length !== 0) {
    profileCardImg.src = user.profile_image;
}
profileCardImg.dataset.id = user.id;

// set user name in profile card.
const profileCardName = document.querySelector('#profile-card .name-and-username .name') as HTMLDivElement;
const userName = user.name.split(" ").map((element: string) => {
    return element[0].toUpperCase() + element.slice(1);
});
profileCardName.innerHTML = userName.join(' ');

// set user username in profile card.
const profileCardUsername = document.querySelector('#profile-card .name-and-username .username span') as HTMLSpanElement;
profileCardUsername.innerHTML = user.username;