import Swal from 'sweetalert2';
import axios from 'axios';

// the div where we eill put the users cards that we get from the api.
let usersBlock = document.querySelector('.main-wrapper .connect .user-cards') as HTMLDivElement;
let floatingUsersBlock = document.querySelector('.floating-connect-box .connect .user-cards') as HTMLDivElement;

let usersBlockLoader = usersBlock.nextElementSibling;
let floatingUsersBlockLoader = floatingUsersBlock.nextElementSibling;

async function getUsers(url: string) {
    let data: [] = [];

    usersBlockLoader?.classList.remove('hide');
    floatingUsersBlockLoader?.classList.remove('hide');

    await axios.get(url).then(res => {
        data = res.data.data;

        window.localStorage.setItem('lastUsersPage', res?.data?.meta?.last_page);
    }).catch((error) => {
        Swal.fire({
            icon: 'error',
            title: `${error.response.data.message}`,
            text: 'Try again later!'
        })
    });

    return data;
}

export default getUsers;