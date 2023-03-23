import axios from "axios";
import checkUrl from "../global/checkImageUrl";

// display comments within each post.
export function getComments(post: any) {
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
                        <img src="${checkUrl(ele.author.profile_image) ? ele.author.profile_image : require('../../../assets/profile_picture.png')}" />
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