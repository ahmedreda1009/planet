import axios from "axios";
import checkUrl from "../global/checkImageUrl";
import user from "../global/getUser";

// make a comment
export function makeNewComment(postId: string, commentInput: string, input: HTMLInputElement) {
    let apiUrl = `https://tarmeezacademy.com/api/v1/posts/${postId}/comments`;
    let token = window.localStorage.getItem('token');
    let headers = {
        "authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    }
    let body = {
        "body": `${commentInput}`
    };

    axios.post(apiUrl, body, { headers }).then(_ => {

        let commentsBox = document.querySelector(`#comments-number-${postId} > .card`) as HTMLElement;

        let commentSkeleton = `
        <div class="comment">
            <div class="profile-icon">
            <div class="profile-img-icon">
                <img src="${checkUrl(user.profile_image) ? user.profile_image : require('../../../assets/profile_picture.png')}" />
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