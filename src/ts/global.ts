import Swal from 'sweetalert2';
import goToProfilePage from './components/global/goToProfile';
import user from './components/global/getUser';
import './components/global/profileCard';
import '../ts/components/global/connect/users';

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
                setTimeout(() => {
                    window.localStorage.removeItem('token');
                    window.location.href = 'index.html';
                }, 700)


                Swal.fire({
                    title: 'logged out successfully!',
                    showConfirmButton: false,
                    // 'We will miss you.',
                    icon: 'success'
                })

            }
        })
    });
});

// click on home button in left side.
let homeBtn = document.querySelector('.profile .home-btn') as HTMLButtonElement;
homeBtn.addEventListener('click', () => {
    // let pageName = window.location.pathname.split("/").pop();
    // if (pageName === 'home.html') return;
    window.location.href = 'home.html';
});

// click on home icon in botton nav bar.
let homeIcon = document.querySelector('.icons .home') as HTMLDivElement;
homeIcon.addEventListener('click', () => {
    // let pageName = window.location.pathname.split("/").pop();
    // if (pageName === 'home.html') return;
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
        goToProfilePage(user.id);
    });
});

// click on logo
let logo = document.querySelector('nav a.navbar-brand #logo') as HTMLDialogElement;
logo.addEventListener('click', () => {
    // let pageName = window.location.pathname.split("/").pop();
    // if (pageName === 'home.html') return;
    window.location.href = 'home.html';
});

// tags list
let tagsLeftSide = document.querySelectorAll('#tags li');
let tagsNavButton = document.querySelectorAll(".icons + ul.tags-list > li");

tagsLeftSide.forEach((icon: any) => {
    icon.addEventListener('click', () => {
        window.localStorage.setItem('tagId', icon.dataset.tagid);
        window.location.href = 'explore.html';
    });
});
tagsNavButton.forEach((icon: any) => {
    icon.addEventListener('click', () => {
        window.localStorage.setItem('tagId', icon.dataset.tagid);
        window.location.href = 'explore.html';
    });
});

// // loader
// let loader = document.querySelector('.profile-loader .lds-ellipsis') as HTMLDivElement;

// setTimeout(() => {
//     loader.classList.add('hide');
// }, 500);