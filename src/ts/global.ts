import Swal from 'sweetalert2';
import './components/profileCard';
import { user } from './components/posts';

// api url
// const baseUrl = 'https://tarmeezacademy.com/api/v1/';
// const baseUrl = "https://reqres.in";

// export default baseUrl;

// logout button.
const logoutBtns = document.querySelectorAll('.logout') as NodeList;

logoutBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        Swal.fire({
            title: 'Are you sure?',
            // text: "We will miss you.",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            // confirmButtonBorderColor: '#000',
            cancelButtonColor: '#0dcaf0',
            confirmButtonText: 'Log out!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    {
                        title: 'logged out successfully!',
                        showConfirmButton: false,
                        // 'We will miss you.',
                        icon: 'success'
                    })

                setTimeout(() => {
                    window.localStorage.removeItem('token');
                    window.location.href = 'index.html';
                }, 700)
            }
        })
    });
});
// click on home button in left side.
let homeBtn = document.querySelector('.profile .home-btn') as HTMLButtonElement;
homeBtn.addEventListener('click', () => {
    let pageName = window.location.pathname.split("/").pop();
    if (pageName === 'home.html') return;
    window.location.href = 'home.html';
});
// click on home icon in botton nav bar.
let homeIcon = document.querySelector('.icons .home') as HTMLDivElement;
homeIcon.addEventListener('click', () => {
    let pageName = window.location.pathname.split("/").pop();
    if (pageName === 'home.html') return;
    window.location.href = 'home.html';
});
// // click on profile button in left side.
// let profileBtn = document.querySelector('.profile .profile-btn') as HTMLButtonElement;
// profileBtn.addEventListener('click', () => {
//     // let pageName = window.location.pathname.split("/").pop();
//     // if (pageName === 'profile.html') return;
//     window.location.href = 'profile.html';
// });
// // click on profile icon in botton nav bar.
// let profileIcon = document.querySelector('.icons .profile') as HTMLDivElement;
// profileIcon.addEventListener('click', () => {
//     // let pageName = window.location.pathname.split("/").pop();
//     // if (pageName === 'profile.html') return;
//     window.location.href = 'profile.html';
// });

// click on profile icon in profile card, posts and comments.
// let profileCardIcon = document.querySelector('.profile-card .profile-icon') as HTMLDivElement;
let profileCardIcon = document.querySelector("#profile-card > div.header > div.profile-icon")
let newPostIcons = document.querySelector('.create-new-post-box .profile-icon') as HTMLDivElement;

let profileIcons = [profileCardIcon, newPostIcons]
profileIcons.forEach(icon => {
    icon?.addEventListener('click', () => {
        // let pageName = window.location.pathname.split("/").pop();
        // if (pageName === 'profile.html') return;
        window.localStorage.setItem('userProfileId', user.id);
        window.location.href = 'profile.html';
    });
});
// click on logo
let logo = document.querySelector('nav a.navbar-brand #logo') as HTMLDialogElement;
logo.addEventListener('click', () => {
    let pageName = window.location.pathname.split("/").pop();
    if (pageName === 'home.html') return;
    window.location.href = 'home.html';
});