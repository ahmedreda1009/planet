import { getPosts, user } from './posts';

// loader
let loader = document.querySelector('.profile-loader .lds-ellipsis') as HTMLDivElement;

// where to put the user's posts.
let profilePosts = document.querySelector('.profile-posts') as HTMLDivElement;

// user id.
// let userId: number = user.id;
let userId: (string | null) = window.localStorage.getItem('userProfileId');

// api link to get user posts.
let apiUrl = `https://tarmeezacademy.com/api/v1/users/${userId || user.id}/posts?sortBy=created_at?orderBy=des`;

// trigger the getPosts fn.
getPosts(apiUrl, profilePosts, 'des')

// removing the loader on scrolling.
window.addEventListener('scroll', () => {
    loader.classList.add('hide');
});

export function goToProfilePage() {
    window.localStorage.setItem('userProfileId', user.id);
    window.location.href = 'profile.html';
}