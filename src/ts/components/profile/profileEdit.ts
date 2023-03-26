import Swal from "sweetalert2";

let editBtn = document.querySelector(".profile-page-card div.content .edit-btn");

editBtn?.addEventListener('click', () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You can not edit your profile now!',
        confirmButtonColor: '#0dcaf0'
    })
})
// let profileCard = document.querySelector(".profile-page-card");
// let saveChangesBtn = document.querySelector(".profile-page-card div.content .save-changes-btn");
// let cancelChangesBtn = document.querySelector(".profile-page-card div.content .cancel-changes-btn");
// let userName = document.querySelector(".profile-page-card .content .text .name") as HTMLDivElement;
// let userUserName = document.querySelector(".profile-page-card .content .text .username") as HTMLDivElement;
// function profileEdit() {

//     let defaultName = userName.textContent;
//     let defaultUserName = userUserName.textContent;
//     console.log(defaultName);


//     editBtn?.addEventListener('click', () => {
//         addEdit();
//     });

//     cancelChangesBtn?.addEventListener('click', () => {
//         userName.textContent = defaultName;
//         userUserName.textContent = defaultUserName;
//         removeEdit();
//     })

// }

// function addEdit() {
//     profileCard?.classList.add('edit');
//     editBtn?.classList.add('hide');
//     saveChangesBtn?.classList.remove('hide');
//     cancelChangesBtn?.classList.remove('hide');
//     userName?.setAttribute('contenteditable', 'true');
//     userUserName?.setAttribute('contenteditable', 'true');
// }

// function removeEdit() {
//     profileCard?.classList.remove('edit');
//     editBtn?.classList.remove('hide');
//     saveChangesBtn?.classList.add('hide');
//     cancelChangesBtn?.classList.add('hide');
//     userName?.setAttribute('contenteditable', 'false');
//     userUserName?.setAttribute('contenteditable', 'false');
// }

// export default profileEdit;