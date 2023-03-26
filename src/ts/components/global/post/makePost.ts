import checkUrl from "../checkImageUrl";
import user from "../getUser";
import goToProfilePage from "../goToProfile";

// create posts.
function makePost(postData: any) {

    let postAuthorImg = checkUrl(postData.author.profile_image) ? postData.author.profile_image : require('../../../../assets/profile_picture.png');
    let postImage = checkUrl(postData.image) ? `<img src="${postData.image}" />` : `<img src="" />`;

    let editPostOptions: string = '';
    if (postData.author.id === user.id) {
        editPostOptions = `
            <div class="edit">
                <i class="fa-solid fa-ellipsis"></i>
                <ul class="options">
                    <li class="bg bg-primary edit-btn">Edit</li>
                    <li class="bg bg-danger delete-btn">Delete</li>
                </ul>
            </div>`;
    }

    let post = document.createElement('div');
    post.className = 'post';
    post.dataset.postid = postData.id;

    let postSkeleton = `
    <div class="header">
            <div class="profile-icon" data-userid="${postData.author.id}">
                <div class="profile-img-icon">
                    <img src="${postAuthorImg}" />
                </div>
            </div>
            <div class="name-and-username">
                <div class="name" data-userid="${postData.author.id}">${postData.author.name} <span class="text-muted username">@${postData.author.username}</span></div>
                <div class="time text-muted">${postData.created_at}</div>
            </div>
            ${editPostOptions}
        </div>
        <div class="save-cancel-edit">
            <div class="btn btn-sm btn-info text-light fw-bold save-changes">SAVE CHANGES</div>
            <div class="btn btn-sm btn-danger fw-bold cancel">CANCEL</div>
        </div>
        <div class="text">${postData.body}</div>
        <div class="image">
            ${postImage}
            <div class="change-image">
                <label for="change-image-post-${postData.id}">
                    <i class="fa-solid fa-camera" >
                        <input type="file" name="post image" class="chnage-photo-post" id="change-image-post-${postData.id}" />
                    </i>
                </label>
            </div>
            <div class="remove-image">
                <i class="fa-solid fa-xmark"></i>
            </div>
        </div>
        <div class="comments">
            <div class="comments-wrapper">
                <div class="comments-number" data-bs-toggle="collapse" href="#comments-number-${postData.id}" role="button" aria-expanded="false" aria-controls="comments-number">
                    <span>${postData.comments_count ? postData.comments_count : '0'}</span>
                    <i class="fa-regular fa-message"></i>
                </div>
                <div class="make-comment" type="button" data-bs-toggle="collapse" data-bs-target="#make-comment-${postData.id}" aria-expanded="false" aria-controls="make-comment">
                    <i class="fa-regular fa-message"></i>
                    <span>Comment</span>
                </div>
            </div>
            <div id="make-comment-${postData.id}" class="collapse">
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
            <div id="comments-number-${postData.id}" class="collapse">
                <div class="card card-body"></div>
            </div>
        </div>
    `;

    post.innerHTML = postSkeleton;

    post.querySelector(`.profile-icon`)?.addEventListener('click', () => {
        goToProfilePage(postData.author.id);
    });

    post.querySelector(`.name-and-username .name`)?.addEventListener('click', () => {
        goToProfilePage(postData.author.id);
    });

    post.querySelector(`[id^="make-comment"] .profile-icon`)?.addEventListener('click', () => {
        goToProfilePage(user.id);
    });

    return post;
}

export default makePost;