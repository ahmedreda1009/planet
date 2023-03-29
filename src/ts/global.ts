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
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            // confirmButtonBorderColor: '#000',
            cancelButtonColor: '#0dcaf0',
            confirmButtonText: 'Log out!'
        }).then((result) => {
            if (result.isConfirmed) {


                (async () => {
                    await Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'logged out successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    window.localStorage.removeItem('token');
                    window.location.href = 'index.html';
                })()
            }
        })
    });
});

// click on home buttons.
let homeBtn = document.querySelector('.profile .home-btn') as HTMLButtonElement;
let homeIcon = document.querySelector('.icons .home') as HTMLDivElement;
let logo = document.querySelector('nav a.navbar-brand #logo') as HTMLDialogElement;
let homeBtns = [homeBtn, homeIcon, logo];
homeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        let pageName = window.location.pathname.split("/").pop();
        if (pageName === 'home.html') return;
        window.location.href = 'home.html';
    });
});

// click on profile button in left side.
let profileBtn = document.querySelector('.profile .profile-btn') as HTMLButtonElement;
let profileIcon = document.querySelector('.icons .profile') as HTMLDivElement;
let profileBtns = [profileBtn, profileIcon];
profileBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        let pageName = window.location.pathname.split("/").pop();
        if (pageName === 'profile.html') return;
        // window.location.href = `profile.html?userId=${user.id}`;
        window.location.href = `profile.html`;
    });
});

// click on profile icon in profile card, posts and comments.
let profileCardIcon = document.querySelector("#profile-card > div.header > div.profile-icon")
let newPostIcons = document.querySelector('.create-new-post-box .profile-icon') as HTMLDivElement;
let profileIcons = [profileCardIcon, newPostIcons]
profileIcons.forEach(icon => {
    icon?.addEventListener('click', () => {
        let pageName = window.location.pathname.split("/").pop();
        if (pageName === 'profile.html') return;
        goToProfilePage(user.id);
    });
});

// tags list
let tagsLeftSide = document.querySelectorAll('#tags li');
let tagsNavButton = document.querySelectorAll(".icons + ul.tags-list > li");
let tagsBtns = [...Array.from(tagsLeftSide), ...Array.from(tagsNavButton)];
tagsBtns.forEach((icon: any) => {
    icon.addEventListener('click', () => {
        window.localStorage.setItem('tagId', icon.dataset.tagid);
        // window.location.href = `explore.html?tagId=${icon.dataset.tagid}`;
        // let pageName = window.location.pathname.split("/").pop();
        // if (pageName === 'profile.html') return;
        window.location.href = `explore.html`;
    });
});