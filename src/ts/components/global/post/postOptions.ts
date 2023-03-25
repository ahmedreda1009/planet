import axios from "axios";
import Swal from "sweetalert2";
import editPost from "./editPost";

// handle when to show options to edit the post.
function postOptions(postId: number) {
    let post = document.querySelector(`[data-postid="${postId}"]`) as HTMLDivElement;
    let optionBtn = post.querySelector(`.header .edit i`);
    let delBtn = post.querySelector(`.header .edit .delete-btn`);
    let editBtn = post.querySelector(`.header .edit .edit-btn`);
    let optionsList = optionBtn?.nextElementSibling;

    // show and hide options
    window.addEventListener('click', (e: Event) => {
        if (e.target == optionBtn) {
            optionsList?.classList.toggle('active');
        } else if ((e.target as HTMLElement)?.closest('ul.options')) {
            return;
        } else {
            optionsList?.classList.remove('active');
        }
    });

    delBtn?.addEventListener('click', () => {

        Swal.fire({
            title: 'Are you sure?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#0dcaf0',
            confirmButtonText: 'Delete!'
        }).then((result) => {
            if (result.isConfirmed) {
                let delUrl = `https://tarmeezacademy.com/api/v1/posts/${postId}`;
                let token = window.localStorage.getItem('token');
                let headers = {
                    "authorization": `Bearer ${token}`,
                    "Content-Type": 'application/json'
                }

                axios.delete(delUrl, { headers }).then(_ => {
                    post.remove();

                    Swal.fire(
                        'Deleted!',
                        `Your post has been deleted.`,
                        'success'
                    )
                });

            }
        })
    });

    editBtn?.addEventListener('click', () => {
        editPost(post);
        (post as HTMLElement).click();
    });
}

export default postOptions;