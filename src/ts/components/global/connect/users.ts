import getUsers from "./getUsers";
import makeUser from "./makeUser";


// the div where we eill put the users cards that we get from the api.
let usersBlock = document.querySelector('.main-wrapper .connect .user-cards') as HTMLDivElement;
let floatingUsersBlock = document.querySelector('.floating-connect-box .connect .user-cards') as HTMLDivElement;

let usersBlockLoader = usersBlock.nextElementSibling;
let floatingUsersBlockLoader = floatingUsersBlock.nextElementSibling;

let usersBlocks = [usersBlock, floatingUsersBlock];

// page numbers.
let currentPage: number = 3;
let lastPage: any = 1;

if (window.localStorage.getItem('lastUsersPage')) {
    lastPage = window.localStorage.getItem('lastUsersPage');
    lastPage = parseInt(lastPage);
}

// manage getting posts throttle when reaching the end of the page.
let throttleTimer: boolean = false;

// trigger getting users on page load.
window.addEventListener('load', () => {
    renderUsers();
});

// getting a new page when reaching end of page.
usersBlocks.forEach(block => {
    block?.addEventListener('scroll', () => {
        let endOfUsersDiv: boolean = block.scrollTop + block.clientHeight >= block.scrollHeight - 50;
        if (endOfUsersDiv && currentPage <= lastPage) {
            if (throttleTimer) return;

            throttleTimer = true;
            currentPage++;
            renderUsers();
        }
    });
})

// todo: some improvements to the loader hide and show.
function renderUsers() {
    let url = `https://tarmeezacademy.com/api/v1/users?page=${currentPage}&limit=15`;

    getUsers(url).then(users => {

        users.forEach(user => {
            let { userNode, userNodeCloned } = makeUser(user);
            usersBlock.append(userNode);
            floatingUsersBlock.append(userNodeCloned);
        });
        usersBlockLoader?.classList.add('hide');
        floatingUsersBlockLoader?.classList.add('hide');

        throttleTimer = false;
    })
}