import Swal from 'sweetalert2';

// api url
// const baseUrl = 'https://tarmeezacademy.com/api/v1/';
const baseUrl = "https://reqres.in";

export default baseUrl;

// logout button.
const logoutBtns = document.querySelectorAll('.logout') as NodeList;

logoutBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        Swal.fire({
            title: 'Are you sure?',
            // text: "We will miss you.",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            // confirmButtonBorderColor: '#000',
            cancelButtonColor: '#0dcaf0',
            confirmButtonText: 'Logout!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    {
                        title: 'logged out successfully!',
                        showConfirmButton: false,
                        // 'We will miss you.',
                        icon: 'info'
                    })

                setTimeout(() => {
                    window.localStorage.removeItem('token');
                    window.location.href = 'index.html';
                }, 500)
            }
        })
    });
});