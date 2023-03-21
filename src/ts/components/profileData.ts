import axios from 'axios';
import { user, checkUrl } from './posts';

// user id
let userId: string = window.localStorage.getItem('userProfileId') as string;

// user images.
let images = document.querySelectorAll('.profile-page-card img') as NodeList;

// user name
let nameOfUser = document.querySelector('.profile-page-card .name') as HTMLDivElement;

// user username
let username = document.querySelector('.profile-page-card .username') as HTMLDivElement;

// edit button.
let editBtn = document.querySelector('.profile-page-card .edit-btn') as HTMLButtonElement;

// api link
let apiUrl: string = `https://tarmeezacademy.com/api/v1/users/${userId || user.id}`;

axios.get(apiUrl).then((res: any) => {
    let data = res.data.data;

    if (Object.keys(data.profile_image).length !== 0 && checkUrl(data.profile_image)) {
        images.forEach((img) => {
            (img as HTMLImageElement).src = data.profile_image;
        });
    }

    nameOfUser.innerHTML = data.name;
    username.innerHTML = `@${data.username}`;
    if (user.id === parseInt(userId)) {
        editBtn.classList.remove('hide');
    }
});