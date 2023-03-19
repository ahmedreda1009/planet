import axios from "axios";
import { checkUrl } from './posts';

// main api url.
// const apiLink = 'https://tarmeezacademy.com/api/v1/users?page=3&limit=15';

// the div where we eill put the users cards that we get from the api.
let usersBlock = document.querySelector('.connect .user-cards') as HTMLDivElement;

// page numbers.
let currentPage: number = 1;
let lastPage: number = 1;

// manage getting posts throttle when reaching the end of the page.
let throttleTimer: boolean = false;

// trigger getting users on page load.
window.addEventListener('load', () => {
    getUsersPages(currentPage, usersBlock);
});

// getting a new page when reaching end of page.
usersBlock.addEventListener('scroll', () => {
    let endOfUsersDiv: boolean = usersBlock.scrollTop + usersBlock.clientHeight >= usersBlock.scrollHeight - 500;
    // console.log('scroll top', usersBlock.scrollTop);
    // console.log('clientHeight', usersBlock.clientHeight);
    // console.log('scrollHeight', usersBlock.scrollHeight);
    if (endOfUsersDiv && currentPage <= lastPage) {
        if (throttleTimer) return;
        console.log('hi');

        throttleTimer = true;
        console.log('hi');
        setTimeout(() => {
            currentPage++;
            getUsersPages(currentPage, usersBlock);
            throttleTimer = false;
        }, 500);
    }
});

function getUsersPages(currPage: number, usersBlock: HTMLDivElement) {
    getUsers(`https://tarmeezacademy.com/api/v1/users?page=${currPage}&limit=15`, usersBlock);
}

function getUsers(url: string, div: HTMLDivElement) {
    axios.get(url).then(res => {
        res.data.data.map((user: any) => {
            let userImageUrl = checkUrl(user.profile_image) ? user.profile_image : require('../../assets/profile_picture.png');

            let userSkeleton = `
                <div class="user-card">
                    <div class="profile-icon">
                        <div class="profile-img-icon">
                            <img src="${userImageUrl}" alt="user image" />
                        </div>
                    </div>
                    <div class="profile-name">
                        <div class="name">${user.name}</div>
                        <div class="username">
                            @<span>${user.username}</span>
                        </div>
                    </div>
                </div>
            `;

            div.innerHTML += userSkeleton;
        });

        lastPage = res.data.meta.last_page;
    }).catch(error => {
        console.log(error);
    });
}

// floating users box
// manage getting posts throttle when reaching the end of the page.
let throttleTimerFloating: boolean = false;

// the div where we eill put the users cards that we get from the api.
let floatingUsersBlock = document.querySelector('.floating-connect-box .connect .user-cards') as HTMLDivElement;

if (window.innerWidth <= 1100) {
    console.log('hello');
    getUsersPages(currentPage, floatingUsersBlock);
    console.log('hello');
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 1100) {
        floatingUsersBlock.innerHTML = usersBlock.innerHTML;
    }
});

// getting a new page when reaching end of page.
floatingUsersBlock.addEventListener('scroll', () => {
    let endOfUsersDiv: boolean = floatingUsersBlock.scrollTop + floatingUsersBlock.clientHeight >= floatingUsersBlock.scrollHeight - 500;
    // console.log('scroll top', usersBlock.scrollTop);
    // console.log('clientHeight', usersBlock.clientHeight);
    // console.log('scrollHeight', usersBlock.scrollHeight);
    if (endOfUsersDiv && currentPage <= lastPage) {
        if (throttleTimerFloating) return;
        console.log('hi');

        throttleTimerFloating = true;
        console.log('hi');
        setTimeout(() => {
            currentPage++;
            getUsersPages(currentPage, floatingUsersBlock);
            throttleTimerFloating = false;
        }, 500);
    }
});
