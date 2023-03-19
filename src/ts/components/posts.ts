import axios from "axios";
import Swal from 'sweetalert2';

// the div where we eill put the posts that we get from the api.
let postsBlock = document.querySelector('.posts') as HTMLDivElement;

// get user data from local storage.
const userData: string = window.localStorage.getItem('user') as string;
const user = JSON.parse(userData);

// get user profile image if exist.
const userImage = checkUrl(user.profile_image) ? user.profile_image : require('../../assets/profile_picture.png');

// page numbers.
let currentPage: number = 1;
let lastPage: number = 1;

// trigger getting posts on page load.
window.addEventListener('load', () => {
    getPostsHome(currentPage);
});

// manage getting posts throttle when reaching the end of the page.
let throttleTimer: boolean = false;

// getting a new page when reaching end of page.
window.addEventListener('scroll', () => {
    let endOfPage: boolean = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 1500;
    if (endOfPage && currentPage <= lastPage) {
        if (throttleTimer) return;

        throttleTimer = true;
        console.log('hi');
        setTimeout(() => {
            currentPage++;
            getPostsHome(currentPage);
            throttleTimer = false;
        }, 500);
    }
});


// check the validity of a images urls.
export function checkUrl(string: string) {
    let givenURL;
    let regEx = /http(s)?:\/\/localhost\//i;
    if (regEx.test(string)) return false;
    try {
        givenURL = new URL(string);
    } catch (error) {
        console.log("error is", error);
        return false;
    }
    return givenURL ? true : false;
}

// trigger getPosts fn with the current page.
function getPostsHome(currPage: number) {
    return getPosts(`https://tarmeezacademy.com/api/v1/posts?page=${currPage}&limit=15`, postsBlock)
}

// fn that get posts from api.
function getPosts(url: string, div: HTMLDivElement) {
    axios.get(url).then(res => {
        res.data.data.map((post: any) => {
            let postAuthorImg = checkUrl(post.author.profile_image) ? post.author.profile_image : require('../../assets/profile_picture.png');
            let postImage = checkUrl(post.image) ? `<img src="${post.image}" />` : '';

            let comments = '';
            if (post.comments_count > 0 && post.comments) {
                res.data.data.comments.forEach((comment: any) => {
                    comments += `
                    <div class="comment">
                        <div class="profile-icon" data-id="${post.author.id}">
                            <div class="profile-img-icon">
                                <img src="${postAuthorImg}" />
                            </div>
                        </div>
                        <div class="comment-content">${comment.body}</div>
                    </div>`;
                });
            }

            let editPostOptions: string = '';
            if (post.author.id === user.id) {
                editPostOptions = `
                    <div class="edit">
                        <i class="fa-solid fa-ellipsis"></i>
                        <ul class="options">
                            <li class="bg bg-primary">Edit</li>
                            <li class="bg bg-danger delete-btn">Delete</li>
                        </ul>
                    </div>`;
            }

            let postSkeleton = `
                <div class="post" data-id="${post.id} id="post-${post.id}">
                    <div class="header">
                        <div class="profile-icon" data-id="${post.author.id}" >
                            <div class="profile-img-icon">
                                <img src="${postAuthorImg}" />
                            </div>
                        </div>
                        <div class="name-and-username">
                            <div class="name" data-id="${post.author.id}">${post.author.name}</div>
                            <div class="time text-muted">${post.created_at}</div>
                        </div>
                        ${editPostOptions}
                    </div>
                    <div class="text">${post.body}</div>
                    <div class="image">
                        ${postImage}
                    </div>
                    <div class="comments">
                        <div class="comments-wrapper">
                            <div class="comments-number" data-bs-toggle="collapse" href="#comments-number-${post.id}" role="button" aria-expanded="false" aria-controls="comments-number">
                                <span>${post.comments_count && post.comments ? post.comments_count : 'No comments yet'}</span>
                                <i class="fa-regular fa-message"></i>
                            </div>
                            <div class="make-comment" type="button" data-bs-toggle="collapse" data-bs-target="#make-comment-${post.id}" aria-expanded="false" aria-controls="make-comment">
                                <i class="fa-regular fa-message"></i>
                                <span>Comment</span>
                            </div>
                        </div>
                        <div id="make-comment-${post.id}" class="collapse">
                            <div class="card card-body">
                                <div class="profile-icon" data-id="${user.id}">
                                    <div class="profile-img-icon">
                                        <img src="${userImage}" />
                                    </div>
                                </div>
                                <input id="new-comment" type="text" name="comment" placeholder="Write a comment..." />
                                <i class="fa-solid fa-circle-right"></i>
                            </div>
                        </div>
                        <div id="comments-number-${post.id}" class="collapse">
                            <div class="card card-body">${comments}</div>
                        </div>
                    </div>
                </div>
            `;

            div.innerHTML += postSkeleton;
        });


        handlePostOptions();
        lastPage = res.data.meta.last_page;
    }).catch(error => {
        console.log(error);
    });
}

// handle when to show options to edit the post.
function handlePostOptions() {
    let optionBtns = document.querySelectorAll('.post .header .edit i');
    let delBtns = document.querySelectorAll('.post .header .edit .delete-btn');

    optionBtns.forEach(btn => {
        window.addEventListener('click', (e: Event) => {
            if (e.target == btn) {
                btn.nextElementSibling?.classList.toggle('active');
            } else if ((e.target as HTMLElement)?.closest('ul.options')) {
                return;
            } else {
                btn.nextElementSibling?.classList.remove('active');
            }
        });
    });

    delBtns.forEach(btn => {
        btn?.addEventListener('click', () => {
            Swal.fire({
                title: 'Are you sure?',
                // text: "We will miss you.",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                // confirmButtonBorderColor: '#000',
                cancelButtonColor: '#0dcaf0',
                confirmButtonText: 'Delete!'
            })
        });
    });

    // // add user image besides the new comment box.
    // const newCommentUserImages = document.querySelectorAll('.posts .post .comments [id^="make-comment"] img') as NodeList;
    // if (Object.keys(user.profile_image).length !== 0) {
    //     newCommentUserImages.forEach((img: Node) => {
    //         (img as HTMLImageElement).src = user.profile_image;
    //         (img as HTMLImageElement).dataset.id = user.id;
    //     });
    // }
}


// let commentsArray = [
//     {
//         "id": 1,
//         "body": "Maxime corrupti necessitatibus nemo debitis tempora voluptatem.",
//         "author": {
//             "id": 6,
//             "profile_image": "http://tarmeezacademy.com/images/posts/MmSpwqIaGZ0jzyj.jpg",
//             "is_fake": 1,
//             "username": "bilal.hadi",
//             "name": "عبد الحي هوساوي",
//             "email": "khaled84@example.net",
//             "email_verified_at": "2022-12-04 00:47:03",
//             "remember_token": null,
//             "created_at": "2022-12-04T00:47:03.000000Z",
//             "updated_at": "2022-12-04T00:47:03.000000Z"
//         }
//     },
//     {
//         "id": 2,
//         "body": "Ea omnis maxime omnis saepe.",
//         "author": {
//             "id": 5,
//             "profile_image": "http://tarmeezacademy.com/images/posts/MmSpwqIaGZ0jzyj.jpg",
//             "is_fake": 1,
//             "username": "khaled81",
//             "name": "المهندسة سهر المقبل",
//             "email": "fadi84@example.org",
//             "email_verified_at": "2022-12-04 00:47:03",
//             "remember_token": null,
//             "created_at": "2022-12-04T00:47:03.000000Z",
//             "updated_at": "2022-12-04T00:47:03.000000Z"
//         }
//     }
// ]


// if (commentsArray.length > 0) {
//     commentsArray.forEach((comment: any) => {
//         comments += `
//         <div class="comment">
//             <div class="profile-icon">
//                 <div class="profile-img-icon">
//                     <img src="${comment.author.profile_image ? comment.author.profile_image : require('../../assets/profile_picture.png')}" />
//                 </div>
//             </div>
//             <div class="comment-content">${comment.body}</div>
//         </div>`;
//     });
// }



// let optionBtns = document.querySelector(`post-${post.id} .header .edit i`);
// let delBtns = document.querySelector(`post-${post.id} .header .edit .delete-btn`);




// delBtns?.addEventListener('click', () => {
//     Swal.fire({
//         title: 'Are you sure?',
//         // text: "We will miss you.",
//         icon: 'question',
//         showCancelButton: true,
//         confirmButtonColor: '#d33',
//         // confirmButtonBorderColor: '#000',
//         cancelButtonColor: '#0dcaf0',
//         confirmButtonText: 'Delete!'
//     })
// });