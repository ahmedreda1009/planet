import axios from "axios";
import makeComment from "./makeComment";

// make a comment
function newComment({ postId, input }: { postId: number, input: HTMLInputElement }) {

    let apiUrl = `https://tarmeezacademy.com/api/v1/posts/${postId}/comments`;
    let token = window.localStorage.getItem('token');
    let headers = {
        "authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    }
    let body = {
        "body": `${input.value}`
    };

    axios.post(apiUrl, body, { headers }).then((res: any) => {
        let data = res.data.data;

        let comment = makeComment(data);

        input.value = '';

        let commentsNumBtn = document.querySelector(`[data-postid="${postId}"] > div.comments > div.comments-wrapper > div.comments-number`) as HTMLElement;
        let commentsNum = commentsNumBtn.querySelector('span') as HTMLElement;
        let commentsBox = commentsNumBtn.closest('.comments')?.querySelector(`#comments-number-${postId} .card`) as HTMLElement;
        commentsNum.innerHTML = `${parseInt(commentsNum.innerHTML) + 1}`;

        commentsBox.append(comment);

        // open comments box after making a commetn.
        // todo: this two lines don't do what they supposed to do.
        if (commentsNumBtn.getAttribute("aria-expanded") == "false" && commentsNumBtn.classList.contains('collapsed')) {
            // open comments box after making a commetn.
            commentsNumBtn.click();
        }

    });
}

export default newComment;