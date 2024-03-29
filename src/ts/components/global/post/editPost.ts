import axios from "axios";
import Swal from "sweetalert2";
import blobUrlToFile from "../convertUrlToFile";

function editPost(post: HTMLDivElement) {
    let postId = post.getAttribute('data-postid');
    let postBody = post.querySelector('.text') as HTMLDivElement;
    let postImageDiv = post.querySelector('.image') as HTMLDivElement;
    let postImage = postImageDiv?.querySelector('img') as HTMLImageElement;
    let postImageEditBtn = post.querySelector('.change-image') as HTMLDivElement;
    let postImageRemoveBtn = post.querySelector('.remove-image') as HTMLDivElement;
    let newImageInput = post.querySelector('.change-image input[type="file"]') as HTMLInputElement;
    let saveChangesBtn = post.querySelector('.save-changes') as HTMLElement;
    let cancelChangesBtn = post.querySelector('.cancel') as HTMLElement;
    let saveCancelChangesBtn = post.querySelector('.save-cancel-edit') as HTMLElement;
    let editLoader = saveCancelChangesBtn.nextElementSibling?.querySelector('.lds-ellipsis');
    // let editBtn = document.querySelector(".header .edit .edit-btn");
    let newImageFile: any = '';

    // get post image and text values before changing them.
    // we will use these values if the user cancelled the changes that he made.
    let initialImagePost = postImage.src;
    let initialpostText = postBody.textContent;

    // use form data because we will upload image to the api.
    let formData = new FormData();

    // make the text div editable.
    postBody.setAttribute('contenteditable', 'true');
    // focus the div to let the user knew that he can edit it.
    postBody.focus();

    // move the cursor to the end of the post text.
    document.execCommand('selectAll', true, 'null');
    document.getSelection()?.collapseToEnd();

    // show edit and cancel edit buttons.
    postImageEditBtn.classList?.add('active');
    postImageRemoveBtn.classList?.add('active');
    postImageDiv.classList.add('edit');
    saveCancelChangesBtn.classList.add('active');

    // remove edit icons when edit completed or when the user cancel the edit.
    function removeEditIcons() {
        postBody.setAttribute('contenteditable', 'false');
        postImageEditBtn.classList?.remove('active');
        postImageRemoveBtn.classList?.remove('active');
        postImageDiv.classList.remove('edit');
        saveCancelChangesBtn.classList.remove('active');
    }

    // change image in the dom and add the new image to the form data.
    newImageInput.addEventListener('change', () => {
        postImageDiv.classList.remove('removed');
        postImageDiv.classList.add('new');

        if (!newImageInput.files) return;
        newImageFile = newImageInput.files[0];
        const src = URL.createObjectURL(newImageFile);
        postImage.src = src;
        formData.append('image', newImageFile);
    });

    // remove the image when click on x btn.
    // send 1px image to the api when removing the image because the api does not let us to delete the image when editing the post.
    postImageRemoveBtn.addEventListener('click', () => {
        postImage.src = '';
        postImageDiv.classList.add('removed');
        postImageDiv.classList.remove('new');

        // get image file object from image url to arrange it before send it to the api.
        blobUrlToFile(require('../../../../assets/empty-image.png')).then((res: any) => {
            formData.append('image', res);
        })
    })

    // send the changes to api.
    saveChangesBtn.addEventListener('click', () => {

        formData.append('_method', `put`);
        formData.append('body', `${postBody.textContent}`);

        if (!formData.get('image')) {
            postImageDiv?.classList.add('removed');
        }

        let url = `https://tarmeezacademy.com/api/v1/posts/${postId}`;

        const token = window.localStorage.getItem('token');
        let headers = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": 'multipart/form-data'
        }
        editLoader?.classList.remove('hide');
        axios.post(url, formData, { headers }).then(_ => {
            removeEditIcons();
        }).catch((res) => {
            let errorMsg: any;
            if (res.response.data.message === "The image failed to upload.") {
                errorMsg = 'Image size is too big.';
            } else {
                errorMsg = res.response.data.message;
            }
            Swal.fire({
                title: errorMsg,
                showConfirmButton: true,
                // 'We will miss you.',
                icon: 'error'
            })
        }).finally(() => {
            editLoader?.classList.add('hide');
        });
    });

    // when click cancel remove edit icons and return the old data to the post.
    cancelChangesBtn.addEventListener('click', () => {
        removeEditIcons();
        postImage.src = initialImagePost;
        postBody.textContent = initialpostText;
        postImageDiv?.classList.remove('removed');
        // if (postImage.src == '') {
        //     postImageDiv.style.minHeight = '0px';
        //     postImageDiv.style.height = '0px';
        // }
    });

    // editBtn?.addEventListener('click', () => {
    //     // postImageDiv.style.minHeight = '80px';
    //     // postImageDiv.style.height = 'auto';
    //     // postImage.src = '';
    // })
}

export default editPost;