import checkUrl from "../checkImageUrl";
import goToProfilePage from "../goToProfile";


function makeComment(commentData: any) {

    let comment = document.createElement('div');
    comment.className = 'comment';

    let commentSkeleton = `
        <div class="profile-icon">
        <div class="profile-img-icon">
            <img src="${checkUrl(commentData.author.profile_image) ? commentData.author.profile_image : require('../../../../assets/profile_picture.png')}" />
        </div>
        </div>
        <div class="comment-box">
            <div class="comment-content">
                <div class="comment-author">${commentData.author.name} <span class="text-muted username">@${commentData.author.username}</span></div>
                ${commentData.body}
            </div>
        </div>`;


    comment.innerHTML = commentSkeleton;

    comment.querySelector('.profile-icon')?.addEventListener('click', () => {
        goToProfilePage(commentData.author.id);
    });
    comment.querySelector('.comment-box .comment-author')?.addEventListener('click', () => {
        goToProfilePage(commentData.author.id);
    });

    return comment;
}

export default makeComment;