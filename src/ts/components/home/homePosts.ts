import Swal from "sweetalert2";
import user from "../global/getUser";
import makeNewComments from "../global/post/comments";
import getComments from "../global/post/getComments";
import getPosts from "../global/post/getPosts";
import makePost from "../global/post/makePost";
import newPostRequest from "../global/post/newPostRequest";
import postOptions from "../global/post/postOptions";

// sweatalert toast.
const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: '#fff',
    customClass: {
        popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true
})

// the div where we eill put the posts that we get from the api.
let postsBlock = document.querySelector('.home-posts .posts') as HTMLDivElement;
let homePostsLoading = document.querySelector('.home-posts')?.nextElementSibling as HTMLDivElement;
let homePostsTopLoader = document.querySelector('.home-posts .lds-ellipsis') as HTMLDivElement;

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
    let endOfPage: boolean = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 500;

    if (endOfPage && currentPage <= lastPage) {

        if (throttleTimer) return;
        throttleTimer = true;

        currentPage++;

        renderPosts();
    }
});

newPostRequest(postsBlock);

// click on home icon in botton nav bar.
let homeIcon = document.querySelector('.icons .home') as HTMLDivElement;
let homeBtn = document.querySelector(".home-btn") as HTMLDivElement;

let homeBtns = [homeBtn, homeIcon];
homeBtns.forEach(btn => {
    btn?.addEventListener('click', () => {
        if (window.scrollY > 200) {
            window.scrollTo(0, 0);
        }

        if (window.scrollY === 0) {
            (async () => {
                await Toast.fire({
                    icon: 'info',
                    title: 'Searching for New Posts.'
                })
            })()

            postsBlock.style.paddingTop = '40px';

            getNewPosts().finally(() => {
                setTimeout(() => {
                    postsBlock.style.paddingTop = '0px';
                    homePostsTopLoader?.classList.add('hide');
                    Toast.close();
                }, 1000);
            });
        }
    });
});

function renderPosts() {
    homePostsLoading?.classList.remove('hide');
    // api url
    let url = `https://tarmeezacademy.com/api/v1/posts?page=${currentPage}&limit=10`;

    getPosts(url).then((posts: any[]) => {

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
    }).finally(() => {
        homePostsLoading?.classList.add('hide');
    });
}

// get new post when user clicks on home btn and he is in home page.
async function getNewPosts() {
    homePostsTopLoader?.classList.remove('hide');

    // id of the last post.
    let firstPostId: any = (postsBlock.querySelector('.post') as HTMLElement)?.dataset.postid;

    let newPosts: any[] = [];

    // id of the last post to knew which new posts will be loaded.
    let startOfOldPosts;

    // loop over pages to get the last old post.
    for (let currPage = 1; currPage < lastPage; currPage++) {

        let url = `https://tarmeezacademy.com/api/v1/posts?page=${currPage}&limit=10`;

        // get the first 10 new posts.
        let posts = await getPosts(url);

        // index of the last post the user has in his timeline.
        startOfOldPosts = posts.findIndex((post: any) => post.id <= firstPostId);

        // if startOfOldPosts equals zero that means that the last post is the first new one on server and there is not new posts.
        if (startOfOldPosts === 0) return;

        // if we get the last post startOfOldPosts will not be -1;
        if (startOfOldPosts !== -1) {
            // push the posts before the old one and push them to the array.
            newPosts.push(...posts.slice(0, startOfOldPosts));

            // reverse posts to prepend at the top of the page.
            newPosts = newPosts.reverse();

            // add new posts to the page.
            newPosts.forEach((post: any) => {

                postsBlock.prepend(makePost(post));

                if (post.comments_count > 0) {
                    getComments(post.id);
                }
                if (user.id == post.author.id) {
                    postOptions(post.id);
                }
                makeNewComments(post.id);
            });

            break;
        } else {
            // if startOfOldPosts equals -1 that means that all posts we get are new so we will put them all and go get another page.
            newPosts.push(...posts);
        }
    }
}