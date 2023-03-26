import newComment from "./newComment";

function makeNewComments(postId: number) {
    let post = document.querySelector(`[data-postid="${postId}"]`) as HTMLElement;
    let commentsNumBtn = document.querySelector(`[data-postid="${postId}"] > div.comments > div.comments-wrapper > div.comments-number`) as HTMLElement;

    // open comments box after making a comment.
    if (commentsNumBtn.getAttribute("aria-expanded") == "false" && commentsNumBtn.classList.contains('collapsed')) {
        commentsNumBtn.click();
    }

    post?.querySelector("[id^='make-comment'] > div > i")?.addEventListener('click', () => {
        let commentInput = post?.querySelector('.comments input') as HTMLInputElement;

        if (commentInput.value != '') {
            newComment({ postId: postId, input: commentInput });
        }
    });

    (post?.querySelector("[id='new-comment']") as HTMLInputElement)?.addEventListener('keypress', (e: KeyboardEvent) => {
        if (e.keyCode === 13) {
            let commentInput = post?.querySelector('.comments input') as HTMLInputElement;

            if (commentInput.value != '') {
                newComment({ postId: postId, input: commentInput });
            }
        }
    });


}

export default makeNewComments;