import newPost from "./newPost";

function newPostRequest(div: HTMLElement) {
    // add new post request.
    let postBtn = document.querySelectorAll('.create-new-post-box div.btns button.post-btn') as NodeList;
    postBtn.forEach(btn => {
        btn.addEventListener('click', (e: Event) => {

            let postBody = (e.target as HTMLElement).closest('.create-new-post-box')?.querySelector('textarea') as HTMLTextAreaElement;
            let postImage = (e.target as HTMLElement).closest('.create-new-post-box')?.querySelector('div.btns input') as HTMLInputElement;


            if (postImage?.files) {
                if (postBody?.value === '' && postImage.value === '') return;
                newPost(postBody.value, postImage.files[0]).then(post => {
                    div.prepend(post);
                });
            } else {
                newPost(postBody.value).then(post => {
                    div.prepend(post);
                });
            }
        });
    });
}

export default newPostRequest;