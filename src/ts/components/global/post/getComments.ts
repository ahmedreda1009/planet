import Swal from 'sweetalert2';
import axios from "axios";
import makeComment from "./makeComment";

// display comments within each post.
function getComments(postId: string) {

    let url = `https://tarmeezacademy.com/api/v1/posts/${postId}`;

    axios.get(url).then(res => {
        let comments = res.data.data.comments;

        comments.forEach((comment: any) => {

            let postToAdd = document.querySelector(`[data-postid="${postId}"] .comments #comments-number-${postId} .card`) as HTMLDivElement;
            postToAdd.append(makeComment(comment));
        });
    }).catch(error => {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: `${error.response.data.message}`,
            text: 'Try again later!'
        });
    });
}

export default getComments;