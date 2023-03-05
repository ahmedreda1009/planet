import Swal from 'sweetalert2';
import axios from 'axios';

import baseUrl from '../global';

// modal fires when user clicks on the forget password button.
document.getElementById('forgotten-password').addEventListener('click', () => {
    Swal.fire({
        title: 'Forgot your password?',
        text: 'Don\'t forget it again, ok?',
        icon: 'info',
        confirmButtonColor: "#3fc3ee",
    });
});

// login function
function login(username, password) {
    axios.post(`${baseUrl}/api/login`, {
        "email": username,
        "password": password
    }).then((response) => {
        window.localStorage.setItem("token", response.data.token);
        window.localStorage.setItem("user", JSON.stringify(response.data));

        window.location = 'home.html';
    });
}

// trigger login.
document.getElementById('login-btn').addEventListener('click', (e) => {
    e.preventDefault();

    // email value
    let emailLogin = document.getElementById('email-login').value;
    // password value
    let passwordLogin = document.getElementById('password-login').value;

    // trigger login request.
    login(emailLogin, passwordLogin);
});

// toggle show password
const showIconBtn = document.getElementById('show-password');
const passwordInput = document.getElementById('password-login');
showIconBtn.addEventListener('click', () => {
    if (showIconBtn.classList.contains('fa-eye')) {
        showIconBtn.classList.remove('fa-eye');
        showIconBtn.classList.add('fa-eye-slash');
        passwordInput.setAttribute('type', 'text');

    } else {
        showIconBtn.classList.add('fa-eye');
        showIconBtn.classList.remove('fa-eye-slash');
        passwordInput.setAttribute('type', 'password');
    }
});