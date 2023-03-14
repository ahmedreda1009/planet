// api url
// const baseUrl = 'https://tarmeezacademy.com/api/v1/';
const baseUrl = "https://reqres.in";

export default baseUrl;

// logout button.
const logoutBtns = document.querySelectorAll('.logout') as NodeList;

logoutBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        window.localStorage.removeItem('token');
        window.location.href = 'index.html';
    });
});