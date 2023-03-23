import { getPosts } from '../post/posts';


// loader
let loader = document.querySelector('.lds-ellipsis') as HTMLDivElement;

// where to put the tag's posts.
let explorePosts = document.querySelector('.tags-posts') as HTMLDivElement;

// get tag id from local storage.
let tagId: (string | number) = window.localStorage.getItem('tagId') || 1;

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

// trigger the getPosts fn.
getPosts(apiUrl, explorePosts);

loader.classList.add('hide');

// removing the loader on scrolling.
window.addEventListener('scroll', () => {
    loader.classList.add('hide');
});