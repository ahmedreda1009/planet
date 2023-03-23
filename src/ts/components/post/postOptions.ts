import axios from "axios";
import Swal from "sweetalert2";

// handle when to show options to edit the post.
export function handlePostOptions() {
    let optionBtns = document.querySelectorAll('.post .header .edit i');
    let delBtns = document.querySelectorAll('.post .header .edit .delete-btn');
    let editBtns = document.querySelectorAll('.post .header .edit .edit-btn');

    // show and hide options
    optionBtns.forEach(btn => {
        window.addEventListener('click', (e: Event) => {
            if (e.target == btn) {
                btn.nextElementSibling?.classList.toggle('active');
            } else if ((e.target as HTMLElement)?.closest('ul.options')) {
                return;
            } else {
                btn.nextElementSibling?.classList.remove('active');
            }
        });
    });

    let delBtnId: any;

    delBtns.forEach(btn => {
        btn?.addEventListener('click', () => {
            delBtnId = (btn.closest('.post') as HTMLElement)?.dataset.postid;
            Swal.fire({
                title: 'Are you sure?',
                // text: "We will miss you.",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                // confirmButtonBorderColor: '#000',
                cancelButtonColor: '#0dcaf0',
                confirmButtonText: 'Delete!'
            }).then((result) => {
                if (result.isConfirmed) {
                    let delUrl = `https://tarmeezacademy.com/api/v1/posts/${delBtnId}`;
                    let token = window.localStorage.getItem('token');
                    let headers = {
                        "authorization": `Bearer ${token}`,
                        "Content-Type": 'application/json'
                    }
                    axios.delete(delUrl, { headers }).then(_ => {
                        (btn.closest('.post') as HTMLElement).remove();
                        Swal.fire(
                            'Deleted!',
                            `Your post has been deleted.`,
                            'success'
                        )
                    });

                }
            })
        });
    });

    editBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            let post = btn.closest('.post') as HTMLDivElement;

            // editPost(post);
            (post as HTMLElement).click();
        })
    });
}