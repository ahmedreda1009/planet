import axios from "axios";
import makeComment from "./makeComment";

// make a comment
async function newComment({ postId, input }: { postId: number, input: HTMLInputElement }) {

    let commentsNumBtn = document.querySelector(`[data-postid="${postId}"] > div.comments > div.comments-wrapper > div.comments-number`) as HTMLElement;
    let commentsNum = commentsNumBtn.querySelector('span') as HTMLElement;
    let commentsBox = commentsNumBtn.closest('.comments')?.querySelector(`#comments-number-${postId} .card`) as HTMLElement;

    let apiUrl = `https://tarmeezacademy.com/api/v1/posts/${postId}/comments`;
    let token = window.localStorage.getItem('token');
    let headers = {
        "authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    }
    let body = {
        "body": `${input.value}`
    };

    await axios.post(apiUrl, body, { headers }).then((res: any) => {
        // open comments box after making a comment.
        if (commentsNumBtn.getAttribute("aria-expanded") == "false") {
            commentsNumBtn.click();
        }

        let data = res.data.data;

        let comment = makeComment(data);

        input.value = '';

        commentsNum.innerHTML = `${parseInt(commentsNum.innerHTML) + 1}`;

        commentsBox.append(comment);
    });
}

export default newComment;