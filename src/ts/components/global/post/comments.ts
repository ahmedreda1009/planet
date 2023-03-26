import newComment from "./newComment";

function makeNewComments(postId: number) {
    let post = document.querySelector(`[data-postid="${postId}"]`) as HTMLElement;

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