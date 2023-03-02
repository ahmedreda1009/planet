import Swal from 'sweetalert2';
import axios from 'axios';
// api url
// const baseUrl = 'https://tarmeezacademy.com/api/v1/';
const baseUrl = 'https://reqres.in';

// modal fires when user clicks on the forget password button.
document.getElementById('forgotten-password').addEventListener('click', () => {
    Swal.fire({
        title: 'Forgot your password?',
        text: 'Don\'t forget it again, ok?',
        icon: 'info',
        confirmButtonColor: "#3fc3ee",
    });
});

// click to show sign up window.
document.getElementById('create-new-acc').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.sign-up').classList.add('active');
});

// click to hide sign up window.
document.getElementById('close-sign-up').addEventListener('click', () => {
    document.querySelector('.sign-up').classList.remove('active');
});

// login function
function login(username, password) {
    axios.post(`${baseUrl}/api/login`, {
        "email": username,
        "password": password
    }).then((response) => {
        window.localStorage.setItem("token", response.data.token);

        window.location = 'home.html';
    });
}

// register function
function register(username, password) {
    axios.post(`${baseUrl}/api/register`, {
        "email": username,
        "password": password
    }).then((response) => {
        console.log(response.data);
        window.localStorage.setItem("token", response.data.token);
    });
}

// trigger login.
document.getElementById('login-btn').addEventListener('click', (e) => {
    e.preventDefault();

    // email value
    let emailLogin = document.getElementById('email-login').value;
    // password value
    let passwordLogin = document.getElementById('password-login').value;

    login(emailLogin, passwordLogin);
});

// trigger sign-up.
document.getElementById('sign-up-btn').addEventListener('click', (e) => {
    e.preventDefault();

    let nameSignUp = document.getElementById('name-sign-up');
    let emailSignUp = document.getElementById('email-sign-up');
    let passwordSignUp = document.getElementById('password-sign-up');
    let pictureSignUpValue = document.getElementById('profile-pic');

    let inputs = [nameSignUp, emailSignUp, passwordSignUp, pictureSignUpValue];

    if (!inputs.find(ele => ele.value == null)) {
        register(emailSignUp, passwordSignUp);
        console.log('register');
    } else {
        console.log('hi');
        inputs.map(input => {
            if (input.value == null) {
                input.classList.add('empty');
            }
        });
    }
});

// change file input display image.
let inputFile = document.getElementById('profile-pic');
inputFile.addEventListener('change', () => {
    const image = `<img src=${URL.createObjectURL(inputFile.files[0])} alt="profile picture">`;

    document.getElementById("selected-img").innerHTML = image;
});