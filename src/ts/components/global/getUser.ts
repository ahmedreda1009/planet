// get user data from local storage.
const userData: string = window.localStorage.getItem('user') as string;
let user = JSON.parse(userData);

if (!user.profile_image) {
    user.profile_image = require('../../../assets/profile_picture.png');
}

export default user;