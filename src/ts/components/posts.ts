import axios from "axios";
import Swal from 'sweetalert2';

// loader
let loader = document.querySelector('.lds-ellipsis') as HTMLDivElement;

// the div where we eill put the posts that we get from the api.
let postsBlock = document.querySelector('.posts') as HTMLDivElement;

// get user data from local storage.
const userData: string = window.localStorage.getItem('user') as string;
export const user = JSON.parse(userData);

// get user profile image if exist.
const userImage = checkUrl(user.profile_image) ? user.profile_image : require('../../assets/profile_picture.png');

// page numbers.
let currentPage: number = 1;
let lastPage: number = 1;

// trigger getting posts on page load.
window.addEventListener('load', () => {
    loader.classList.remove('hide');
    getPostsHome(currentPage);
});

// manage getting posts throttle when reaching the end of the page.
let throttleTimer: boolean = false;

// getting a new page when reaching end of page.
window.addEventListener('scroll', () => {
    let endOfPage: boolean = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 1500;
    // let endOfPage: boolean = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
    if (endOfPage && currentPage <= lastPage) {
        if (throttleTimer) return;

        throttleTimer = true;

        loader.classList.remove('hide');
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
    let url = `https://tarmeezacademy.com/api/v1/posts?page=${currPage}&limit=15`;
    return getPosts(url, postsBlock)
}

// fn that get posts from api.
export function getPosts(url: string, div: HTMLDivElement, order?: string) {
    axios.get(url).then(res => {
        let data = res.data.data;

        if (order === 'des') data = data.reverse();

        console.log(order);

        data?.map((post: any) => {
            let postAuthorImg = checkUrl(post.author.profile_image) ? post.author.profile_image : require('../../assets/profile_picture.png');
            let postImage = checkUrl(post.image) ? `<img src="${post.image}" />` : `<img src="" />`;




            getComments(post);

            let editPostOptions: string = '';
            if (post.author.id === user.id) {
                editPostOptions = `
                <div class="edit">
                    <i class="fa-solid fa-ellipsis"></i>
                    <ul class="options">
                        <li class="bg bg-primary edit-btn">Edit</li>
                        <li class="bg bg-danger delete-btn">Delete</li>
                    </ul>
                </div>`;
            }

            let postDiv = document.createElement('div');
            postDiv.className = 'post';
            postDiv.dataset.postid = `${post.id}`;

            let postSkeleton = `
            <div class="header">
                <div class="profile-icon" data-userid="${post.author.id}">
                    <div class="profile-img-icon">
                        <img src="${postAuthorImg}" />
                    </div>
                </div>
                <div class="name-and-username">
                    <div class="name" data-userid="${post.author.id}">${post.author.name} <span class="text-muted username">@${post.author.username}</span></div>
                    <div class="time text-muted">${post.created_at}</div>
                </div>
                ${editPostOptions}
                </div>
            <div class="save-cancel-edit">
                <div class="btn btn-sm btn-primary save-changes">SAVE CHANGES</div>
                <div class="btn btn-sm btn-danger cancel">CANCEL</div>
            </div>
            <div class="text">${post.body}</div>
            <div class="image">
                ${postImage}
                <div class="change-image">
                    <label for="change-image-post-${post.id}">
                        <i class="fa-solid fa-camera" >
                            <input type="file" name="post image" class="chnage-photo-post" id="change-image-post-${post.id}" />
                        </i>
                    </label>
                </div>
                <div class="remove-image">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div>
            <div class="comments">
                <div class="comments-wrapper">
                    <div class="comments-number" data-bs-toggle="collapse" href="#comments-number-${post.id}" role="button" aria-expanded="false" aria-controls="comments-number">
                        <span>${post.comments_count ? post.comments_count : '0'}</span>
                        <i class="fa-regular fa-message"></i>
                    </div>
                    <div class="make-comment" type="button" data-bs-toggle="collapse" data-bs-target="#make-comment-${post.id}" aria-expanded="false" aria-controls="make-comment">
                        <i class="fa-regular fa-message"></i>
                        <span>Comment</span>
                    </div>
                </div>
                <div id="make-comment-${post.id}" class="collapse">
                    <div class="card card-body">
                        <div class="profile-icon" data-userid="${user.id}">
                            <div class="profile-img-icon">
                                <img src="${userImage}" />
                            </div>
                        </div>
                        <input id="new-comment" type="text" name="comment" placeholder="Write a comment..." autofocus />
                        <i class="fa-solid fa-circle-right"></i>
                    </div>
                </div>
                <div id="comments-number-${post.id}" class="collapse">
                    <div class="card card-body"></div>
                </div>
            </div>`;

            postDiv.innerHTML = postSkeleton;
            div.append(postDiv);

            function goToProfile() {
                window.localStorage.setItem('userProfileId', post.author.id);
                window.location.href = 'profile.html';
            }


            postDiv.querySelector(`.profile-icon`)?.addEventListener('click', () => {
                goToProfile();
            });

            postDiv.querySelector(`.name-and-username .name`)?.addEventListener('click', () => {
                goToProfile();
            });

            postDiv.querySelector(`[id^="make-comment"] .profile-icon`)?.addEventListener('click', () => {
                window.localStorage.setItem('userProfileId', user.id);
                window.location.href = 'profile.html';
            });

            postDiv.querySelector("[id^='make-comment'] > div > i")?.addEventListener('click', () => {
                let commentInput = postDiv?.querySelector('.comments input') as HTMLInputElement;

                if (commentInput.value != '') {
                    makeNewComment(post.id, commentInput.value, commentInput);
                }
            });


            (postDiv.querySelector("[id='new-comment']") as HTMLInputElement)?.addEventListener('keypress', (e: KeyboardEvent) => {
                if (e.keyCode === 13) {
                    let commentInput = postDiv?.querySelector('.comments input') as HTMLInputElement;

                    if (commentInput.value != '') {
                        makeNewComment(post.id, commentInput.value, commentInput);
                    }
                }
            });
        });

        loader.classList.add('hide');

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
    let editBtns = document.querySelectorAll('.post .header .edit .edit-btn');

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

    let delBtnId: any;


    delBtns.forEach(btn => {
        btn?.addEventListener('click', () => {
            delBtnId = (btn.closest('.post') as HTMLElement)?.dataset.postid;
            Swal.fire({
                title: 'Are you sure?',
                // text: "We will miss you.",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                // confirmButtonBorderColor: '#000',
                cancelButtonColor: '#0dcaf0',
                confirmButtonText: 'Delete!'
            }).then((result) => {
                if (result.isConfirmed) {
                    let delUrl = `https://tarmeezacademy.com/api/v1/posts/${delBtnId}`;
                    let token = window.localStorage.getItem('token');
                    let headers = {
                        "authorization": `Bearer ${token}`,
                        "Content-Type": 'application/json'
                    }
                    axios.delete(delUrl, { headers }).then(res => {
                        console.log(res);
                        (btn.closest('.post') as HTMLElement).remove();
                        Swal.fire(
                            'Deleted!',
                            `Your post has been deleted.`,
                            'success'
                        )
                    });

                }
            })
        });
    });

    editBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            let post = btn.closest('.post') as HTMLDivElement;
            console.log(post);
            editPost(post);
            (post as HTMLElement).click();
        })
    })

    // // add user image besides the new comment box.
    // const newCommentUserImages = document.querySelectorAll('.posts .post .comments [id^="make-comment"] img') as NodeList;
    // if (Object.keys(user.profile_image).length !== 0) {
    //     newCommentUserImages.forEach((img: Node) => {
    //         (img as HTMLImageElement).src = user.profile_image;
    //         (img as HTMLImageElement).dataset.id = user.id;
    //     });
    // }
}

// make a comment
function makeNewComment(postId: string, commentInput: string, input: HTMLInputElement) {
    let apiUrl = `https://tarmeezacademy.com/api/v1/posts/${postId}/comments`;
    let token = window.localStorage.getItem('token');
    let headers = {
        "authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    }
    let body = {
        "body": `${commentInput}`
    };

    axios.post(apiUrl, body, { headers }).then(res => {
        console.log(res.data.data)

        let commentsBox = document.querySelector(`#comments-number-${postId} > .card`) as HTMLElement;

        let commentSkeleton = `
        <div class="comment">
            <div class="profile-icon">
            <div class="profile-img-icon">
                <img src="${checkUrl(user.profile_image) ? user.profile_image : require('../../assets/profile_picture.png')}" />
            </div>
            </div>
            <div class="comment-box">
                <div class="comment-content">
                    <div class="comment-author">${user.name} <span class="text-muted username">@${user.username}</span></div>
                    ${commentInput}
                </div>
            </div>
        </div>    
        `;

        commentsBox.innerHTML += commentSkeleton;

        input.value = '';
        let commentsNumBtn = document.querySelector(`[data-postid="${postId}"] > div.comments > div.comments-wrapper > div.comments-number`) as HTMLElement;
        let commentsNum = commentsNumBtn.querySelector('span') as HTMLElement;
        commentsNum.innerHTML = `${parseInt(commentsNum.innerHTML) + 1}`;
        // open comments box after making a commetn.
        commentsNumBtn.setAttribute("aria-expanded", "true");
        commentsNumBtn.classList.remove('collapsed');
    });
}

// display comments within each post.
function getComments(post: any) {
    if (post.comments_count > 0) {

        axios.get(`https://tarmeezacademy.com/api/v1/posts/${post.id}`).then(res => {
            let data = res.data.data.comments;

            let comments = document.createElement('div');

            data.forEach((ele: any) => {

                let comment = document.createElement('div');
                comment.className = 'comment';

                let commentSkeleton = `
                <div class="profile-icon">
                    <div class="profile-img-icon">
                        <img src="${checkUrl(ele.author.profile_image) ? ele.author.profile_image : require('../../assets/profile_picture.png')}" />
                    </div>
                </div>
                <div class="comment-box">
                    <div class="comment-content">
                        <div class="comment-author">${ele.author.name} <span class="text-muted username">@${ele.author.username}</span></div>
                        ${ele.body}
                    </div>
                </div>`;

                comment.innerHTML = commentSkeleton;

                comment.querySelector('.profile-icon')?.addEventListener('click', () => {
                    window.localStorage.setItem('userProfileId', ele.author.id);
                    window.location.href = 'profile.html';
                })

                comments.append(comment);


            })

            let postToAdd = document.querySelector(`[data-postid="${post.id}"] .comments #comments-number-${post.id} .card`) as HTMLDivElement;

            postToAdd?.append(comments);
        })
    }
}

function editPost(post: HTMLDivElement) {
    let postId = post.getAttribute('data-postid');
    let postBody = post.querySelector('.text') as HTMLDivElement;
    let postImageDiv = post.querySelector('.image') as HTMLDivElement;
    let postImage = postImageDiv?.querySelector('img') as HTMLImageElement;
    let postImageEditBtn = post.querySelector('.change-image') as HTMLDivElement;
    let postImageRemoveBtn = post.querySelector('.remove-image') as HTMLDivElement;
    let newImageInput = post.querySelector('.change-image input[type="file"]') as HTMLInputElement;
    let saveChangesBtn = post.querySelector('.save-changes') as HTMLElement;
    let cancelChangesBtn = post.querySelector('.cancel') as HTMLElement;
    let saveCancelChangesBtn = post.querySelector('.save-cancel-edit') as HTMLElement;
    let newImageFile: any = '';

    // get post image and text values before changing them.
    // we will use these values if the user cancelled the changes that he made.
    let defaultImagePost = postImage.src;
    let defaultpostText = postBody.textContent;

    // use form data because we will upload image to the api.
    let formData = new FormData();

    // make the text div editable.
    postBody.setAttribute('contenteditable', 'true');
    // focus the div to let the user knew that he can edit it.
    postBody.focus();

    // move the cursor to the end of the post text.
    document.execCommand('selectAll', true, 'null');
    document.getSelection()?.collapseToEnd();

    // show edit and cancel edit buttons.
    postImageEditBtn.classList?.add('active');
    postImageRemoveBtn.classList?.add('active');
    postImageDiv.classList.add('edit');
    saveCancelChangesBtn.classList.add('active');

    // remove edit icons when edit completed or when the user cancel the edit.
    function removeEditIcons() {
        postBody.setAttribute('contenteditable', 'false');
        postImageEditBtn.classList?.remove('active');
        postImageRemoveBtn.classList?.remove('active');
        postImageDiv.classList.remove('edit');
        saveCancelChangesBtn.classList.remove('active');

    }

    // change image in the dom and add the new image to the form data.
    newImageInput.addEventListener('change', () => {
        console.log(newImageInput.value);
        if (!newImageInput.files) return;
        newImageFile = newImageInput.files[0];
        const src = URL.createObjectURL(newImageFile);
        postImage.src = src;
        formData.append('image', newImageFile);
    });

    // remove the image when click on x btn.
    // send 1px image to the api when removing the image because the api does not let us to delete the image when editing the post.
    postImageRemoveBtn.addEventListener('click', () => {
        postImage.src = '';

        // get image file object from image url to arrange it before send it to the api.
        blobUrlToFile(require('../../assets/empty-image.png')).then((res: any) => {
            console.log(res);
            formData.append('image', res);
        })
    })

    // send the changes to api.
    saveChangesBtn.addEventListener('click', () => {

        formData.append('_method', `put`);
        formData.append('body', `${postBody.textContent}`);

        let url = `https://tarmeezacademy.com/api/v1/posts/${postId}`;

        const token = window.localStorage.getItem('token');
        let headers = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": 'multipart/form-data'
        }

        axios.post(url, formData, { headers }).then((res) => {
            console.log(res);
            removeEditIcons();
        });
    });


    // when click cancel remove edit icons and return the old data to the post.
    cancelChangesBtn.addEventListener('click', () => {
        removeEditIcons();
        postImage.src = defaultImagePost;
        postBody.textContent = defaultpostText;
    })


}

// convert image url to image file line the one that we get from imageInput.files[0]
const blobUrlToFile = (blobUrl: string): Promise<File> => new Promise((resolve) => {
    fetch(blobUrl).then((res) => {
        res.blob().then((blob) => {
            // please change the file.extension with something more meaningful
            // or create a utility function to parse from URL
            const file = new File([blob], 'empty-image.png', { type: blob.type })
            resolve(file)
        })
    })
})