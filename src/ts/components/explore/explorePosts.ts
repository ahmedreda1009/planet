import Swal from "sweetalert2";
import user from "../global/getUser";
import makeNewComments from "../global/post/comments";
import getComments from "../global/post/getComments";
import getPosts from "../global/post/getPosts";
import makePost from "../global/post/makePost";
import newPostRequest from "../global/post/newPostRequest";
import postOptions from "../global/post/postOptions";


// loader
// let loader = document.querySelector('.lds-ellipsis') as HTMLDivElement;

// where to put the tag's posts.
let explorePosts = document.querySelector('.tags-posts') as HTMLDivElement;

// home posts block
let postsBlock = document.querySelector('.home-posts .posts') as HTMLDivElement;

// loader
let loader = document.querySelector('.explore-loader .lds-ellipsis') as HTMLDivElement;

// get tag id from local storage.
let tagId: any = window.localStorage.getItem('tagId') || 1;

// tag image
let tagImageBlock = document.querySelector('.tags-head .background-image img') as HTMLImageElement;

// tag title
let tagTitleBlock = document.querySelector('.tags-head .title span') as HTMLSpanElement;

let tagsTitle = ['SPORTS', 'POLITICS', 'ECONOMY', 'ENTERTAINMENT'];
let tagsImages = ['sports.jpg', 'politics.png', 'economy.jpg', 'entertainment.jpg'];

let apiUrl = `https://tarmeezacademy.com/api/v1/tags/${tagId}/posts`;

// add image 
tagImageBlock.src = require(`../../../assets/${tagsImages[+tagId - 1]}`);

// add title
tagTitleBlock.innerHTML = tagsTitle[+tagId - 1];

(tagTitleBlock.parentElement as HTMLElement).style.fontSize = '40px';

if (tagId == 4 && window.innerWidth <= 700) {
    (tagTitleBlock.parentElement as HTMLElement).style.fontSize = '30px';
}

window.addEventListener('resize', () => {
    if (tagId == 4 && window.innerWidth <= 700) {
        (tagTitleBlock.parentElement as HTMLElement).style.fontSize = '30px';
    } else {
        (tagTitleBlock.parentElement as HTMLElement).style.fontSize = '40px';
    }
});

let tagsItems = document.querySelectorAll("#tags > ul > li");
let tagsNavItems = document.querySelectorAll("body > ul.tags-list > li");


// get posts on page load.
window.addEventListener('load', () => {
    renderPosts();
    tagsItems.forEach(item => {
        item.classList.remove('active');
    });
    tagsNavItems.forEach(item => {
        item.classList.remove('active');
    });

    tagsItems[parseInt(tagId) - 1].classList.add('active');
    tagsNavItems[parseInt(tagId) - 1].classList.add('active');

});

newPostRequest(postsBlock);

function renderPosts() {
    loader.classList.remove('hide');
    getPosts(apiUrl).then(posts => {
        posts.forEach((post: any) => {
            explorePosts.append(makePost(post));
            if (post.comments_count > 0) {
                getComments(post.id);
            }
            if (user.id == post.author.id) {
                postOptions(post.id);
            }
            makeNewComments(post.id);
        });
    }).catch((error) => {
        Swal.fire({
            icon: 'error',
            title: `${error.response.data.message}`,
            text: 'Try again later!'
        })
    }).finally(() => {
        loader.classList.add('hide');
    });
}