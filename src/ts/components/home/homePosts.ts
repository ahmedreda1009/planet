import Swal from "sweetalert2";
import user from "../global/getUser";
import makeNewComments from "../global/post/comments";
import getComments from "../global/post/getComments";
import getPosts from "../global/post/getPosts";
import makePost from "../global/post/makePost";
import newPostRequest from "../global/post/newPostRequest";
import postOptions from "../global/post/postOptions";

// the div where we eill put the posts that we get from the api.
let postsBlock = document.querySelector('.home-posts .posts') as HTMLDivElement;
let homePostsLoading = document.querySelector('.home-posts')?.nextElementSibling as HTMLDivElement;

// get user profile image if exist.
// const userImage = checkUrl(user.profile_image) ? user.profile_image : require('../../../assets/profile_picture.png');

// page numbers.
let currentPage: number = 1;
let lastPage: any = 1;
if (window.localStorage.getItem('lastPostsPage')) {
    lastPage = window.localStorage.getItem('lastPostsPage');
    lastPage = parseInt(lastPage);
}

// manage getting posts throttle when reaching the end of the page.
let throttleTimer: boolean = false;

// get posts on page load.
window.addEventListener('load', () => {
    renderPosts();
});

// getting a new page when reaching end of page.
window.addEventListener('scroll', () => {
    let endOfPage: boolean = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 1500;

    if (endOfPage && currentPage <= lastPage) {

        if (throttleTimer) return;
        throttleTimer = true;

        currentPage++;

        renderPosts();
    }
});

newPostRequest(postsBlock);

function renderPosts() {
    homePostsLoading.classList.remove('hide');
    // api url
    let url = `https://tarmeezacademy.com/api/v1/posts?page=${currentPage}&limit=15`;
    getPosts(url).then(posts => {
        posts.forEach((post: any) => {
            postsBlock.append(makePost(post));
            if (post.comments_count > 0) {
                getComments(post.id);
            }
            if (user.id == post.author.id) {
                postOptions(post.id);
            }
            makeNewComments(post.id);
            throttleTimer = false;
        });
    }).catch((error) => {
        Swal.fire({
            icon: 'error',
            title: `${error.response.data.message}`,
            text: 'Try again later!'
        })
    }).finally(() => {
        homePostsLoading.classList.add('hide');
    });
}