export { };

// get user data from local storage.
const userData: string = window.localStorage.getItem('user') as string;
const user = JSON.parse(userData);

// add user image besides the new comment box.
const newCommentUserImages = document.querySelectorAll('.posts .post .comments [id^="make-comment"] img') as NodeList;
if (Object.keys(user.profile_image).length !== 0) {
    newCommentUserImages.forEach((img: Node) => {
        (img as HTMLImageElement).src = user.profile_image;
        (img as HTMLImageElement).dataset.id = user.id;
    });
}