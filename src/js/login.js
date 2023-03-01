import Swal from 'sweetalert2';
import axios from 'axios';
// api url
const baseUrl = 'https://tarmeezacademy.com/api/v1/';

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

console.log('hi');

let emailLogin = document.getElementById('email-login').value;
let passwordLogin = document.getElementById('password-login').value;

let nameSignUp = document.getElementById('name-sign-up').value;
let emailSignUp = document.getElementById('email-sign-up').value;
let passwordSignUp = document.getElementById('password-sign-up').value;
let pictureSignUp = document.getElementById('file-sign-up');

function login(username, password) {
    // axios({
    //     method: 'post',
    //     url: `${baseUrl}/login`,
    //     data: {
    //         email: username,
    //         password
    //     }
    // });
}
// axios.get('https://api.aladhan.com/v1/calendarByCity/2017/4?city=Cairo&country=Egypt&method=5').then(data => console.log(data.data.data));