// get user data from local storage.
const userData: string = window.localStorage.getItem('user') as string;
let user = JSON.parse(userData);

export default user;