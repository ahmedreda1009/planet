import Swal from "sweetalert2";
import makeNewComments from "./comments";
import newPost from "./newPost";
import postOptions from "./postOptions";


let loader = document.querySelector('.create-new-post-box .new-post-loader .lds-ellipsis');
let floatingLoader = document.querySelector('.floating-new-post-box .create-new-post-box .new-post-loader .lds-ellipsis');

function newPostRequest(div: HTMLElement) {
    // add new post request.
    let postBtn = document.querySelectorAll('.create-new-post-box div.btns button.post-btn') as NodeList;
    postBtn.forEach(btn => {
        btn.addEventListener('click', (e: Event) => {
            loader?.classList.remove('hide');

            let postBody = (e.target as HTMLElement).closest('.create-new-post-box')?.querySelector('textarea') as HTMLTextAreaElement;
            let postImage = (e.target as HTMLElement).closest('.create-new-post-box')?.querySelector('div.btns input') as HTMLInputElement;


            if (postImage?.files) {
                if (postBody?.value === '' && postImage.value === '') return;
                newPost(postBody.value, postImage.files[0]).then(post => {
                    if (post == undefined) return;
                    div.prepend(post);
                    postOptions(post.dataset.postid);
                    makeNewComments(post.dataset.postid);
                    document.querySelector('.floating-new-post-box')?.classList.remove('active');
                }).catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: `${error.response.data.message}`,
                        text: 'Try again later!'
                    })
                }).finally(() => {
                    loader?.classList.add('hide');
                    floatingLoader?.classList.add('hide');
                });
            } else {
                loader?.classList.remove('hide');
                newPost(postBody.value).then(post => {
                    if (post == undefined) return;
                    div.prepend(post);
                    postOptions(post.dataset.postid);
                    makeNewComments(post.dataset.postid);
                    document.querySelector('.floating-new-post-box')?.classList.remove('active');
                }).catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: `${error.response.data.message}`,
                        text: 'Try again later!'
                    })
                }).finally(() => {
                    loader?.classList.add('hide');
                    floatingLoader?.classList.add('hide');
                });
            }
        });
    });
}

export default newPostRequest;