import checkUrl from "../checkImageUrl";


function makeUser(userData: any) {

    let userNode = document.createElement('div');
    userNode.className = 'user-card';
    userNode.dataset.userid = userData.id;


    let userImageUrl = checkUrl(userData.profile_image) ? userData.profile_image : require('../../../../assets/profile_picture.png');

    let userSkeleton = `
        <div class="profile-icon">
        <div class="profile-img-icon">
            <img src="${userImageUrl}" alt="user image" />
        </div>
        </div>
        <div class="profile-name">
            <div class="name">${userData.name}</div>
            <div class="username">
                @<span>${userData.username}</span>
            </div>
        </div>
        `;
    userNode.innerHTML = userSkeleton;

    let userNodeCloned = userNode.cloneNode(true);

    userNode.addEventListener('click', () => {
        window.localStorage.setItem('userProfileId', userData.id);
        window.location.href = 'profile.html';
    });

    userNodeCloned.addEventListener('click', () => {
        window.localStorage.setItem('userProfileId', userData.id);
        window.location.href = 'profile.html';
    });

    return { userNode, userNodeCloned };
}

export default makeUser;