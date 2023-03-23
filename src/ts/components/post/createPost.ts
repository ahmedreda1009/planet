import checkUrl from "../global/checkImageUrl";
import user from "../global/getUser";
import goToProfilePage from "../global/goToProfile";

// create posts.
export function createPost(post: any, div: HTMLDivElement) {
    let postAuthorImg = checkUrl(post.author.profile_image) ? post.author.profile_image : require('../../../assets/profile_picture.png');
    let postImage = checkUrl(post.image) ? `<img src="${post.image}" />` : `<img src="" />`;

    // getComments(post);

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
                                <img src="${user.profile_image}" />
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



    postDiv.querySelector(`.profile-icon`)?.addEventListener('click', () => {
        goToProfilePage(post.author.id);
    });

    postDiv.querySelector(`.name-and-username .name`)?.addEventListener('click', () => {
        goToProfilePage(post.author.id);
    });

    postDiv.querySelector(`[id^="make-comment"] .profile-icon`)?.addEventListener('click', () => {
        window.localStorage.setItem('userProfileId', user.id);
        window.location.href = 'profile.html';
    });

    // postDiv.querySelector("[id^='make-comment'] > div > i")?.addEventListener('click', () => {
    //     let commentInput = postDiv?.querySelector('.comments input') as HTMLInputElement;

    //     if (commentInput.value != '') {
    //         makeNewComment(post.id, commentInput.value, commentInput);
    //     }
    // });

    // (postDiv.querySelector("[id='new-comment']") as HTMLInputElement)?.addEventListener('keypress', (e: KeyboardEvent) => {
    //     if (e.keyCode === 13) {
    //         let commentInput = postDiv?.querySelector('.comments input') as HTMLInputElement;

    //         if (commentInput.value != '') {
    //             makeNewComment(post.id, commentInput.value, commentInput);
    //         }
    //     }
    // });
}