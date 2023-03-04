import axios from 'axios';

import baseUrl from '../global';

// click to show sign up window.
document.getElementById('create-new-acc').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.sign-up').classList.add('active');
});

// click to hide sign up window.
document.getElementById('close-sign-up').addEventListener('click', () => {
    document.querySelector('.sign-up').classList.remove('active');
});

// hide sign up when clicking on empty space.
document.querySelector('.sign-up .overlay').addEventListener('click', (e) => {
    document.querySelector('.sign-up').classList.remove('active');
});

// register function
function register(username, password) {
    axios.post(`${baseUrl}/api/register`, {
        "email": username,
        "password": password
    }).then((response) => {
        window.localStorage.setItem("token", response.data.token);

        window.location = 'home.html';
    });
}

// trigger sign-up.
document.getElementById('sign-up-btn').addEventListener('click', (e) => {
    e.preventDefault();

    let nameSignUp = document.getElementById('name-sign-up');
    let emailSignUp = document.getElementById('email-sign-up');
    let passwordSignUp = document.getElementById('password-sign-up');
    let pictureSignUpValue = document.getElementById('profile-pic');

    // let inputs = [nameSignUp, emailSignUp, passwordSignUp, pictureSignUpValue];
    let inputs = [emailSignUp, passwordSignUp];

    // check if any input is empty.
    if (inputs.every(ele => Boolean(ele.value))) {

        // remove red border from input file.
        document.getElementById('input-img').classList.remove('empty');

        // remove red border from all inputs.
        inputs.forEach(input => {
            input.classList.remove('empty');
        });

        // trigger register request.
        register(emailSignUp.value, passwordSignUp.value);

    } else {

        // remove red border from input image
        document.getElementById('input-img').classList.remove('empty');

        // add red border to the empty inputs.
        inputs.forEach(input => {
            input.classList.remove('empty');

            if (!input.value) {
                input.classList.add('empty');
            }
        });

        // add red border to input image when it is empty.
        if (!pictureSignUpValue.value) {
            document.getElementById('input-img').classList.add('empty');
        }
    }
});

// change file input.
let inputFile = document.getElementById('profile-pic');

inputFile.addEventListener('change', () => {
    document.getElementById('input-img').classList.remove('empty');

    // create the images url
    const src = URL.createObjectURL(inputFile.files[0]);

    if (!src) {
        document.getElementById('input-img').classList.add('empty');
    } else {
        document.getElementById('input-img').classList.remove('empty');
    }

    // inject the image's url inside img tag in html.
    let image = `
    <div class="position-relative">
        <span class="position-absolute p-1 bg-danger rounded-circle" id="remove-profile-picture">
            <i class="fa-solid fa-xmark"></i>
        </span>
        <img src=${src} alt="profile picture" />
    </div>`;

    document.getElementById("selected-img").innerHTML = image;

    document.getElementById("remove-profile-picture").addEventListener('click', (e) => {
        e.preventDefault();

        // remove image when click on remove image icon.
        document.getElementById("selected-img").innerHTML = '';
        inputFile.value = '';
    });
});