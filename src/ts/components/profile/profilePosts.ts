import Swal from 'sweetalert2';
import user from '../global/getUser';
import makeNewComments from '../global/post/comments';
import getComments from '../global/post/getComments';
import getPosts from '../global/post/getPosts';
import makePost from '../global/post/makePost';
import newPostRequest from '../global/post/newPostRequest';
import postOptions from '../global/post/postOptions';

// loader
let loader = document.querySelector('.profile-loader .lds-ellipsis') as HTMLDivElement;

// where to put the user's posts.
let profilePosts = document.querySelector('.profile-posts .posts') as HTMLDivElement;

// home posts block
let postsBlock = document.querySelector('.home-posts .posts') as HTMLDivElement;

// user id.
// let userId: number = user.id;
let userId = window.localStorage.getItem('userProfileId');

// api link to get user posts.
let apiUrl = `https://tarmeezacademy.com/api/v1/users/${userId}/posts?sortBy=created_at?orderBy=des`;

// get posts on page load.
window.addEventListener('load', () => {
    renderPosts();
});

if (user.id == userId) {
    newPostRequest(profilePosts);
} else {
    newPostRequest(postsBlock);
}

function renderPosts() {
    loader?.classList.remove('hide');
    getPosts(apiUrl).then(posts => {
        let postsReversed = posts.reverse();
        postsReversed.forEach((post: any) => {
            profilePosts.append(makePost(post));
            if (post.comments_count > 0) {
                getComments(post.id);
            }
            if (user.id == post.author.id) {
                postOptions(post.id);
            }
            makeNewComments(post.id);
        });
        loader?.classList.add('hide');
    }).catch((error) => {
        let msg = error.response.data.message;
        if (msg == 'Too Many Attempts.') msg = 'Connection to Server Failed.'

        Swal.fire({
            icon: 'error',
            title: `${msg}`,
            text: 'Try again later!'
        })
    });
}