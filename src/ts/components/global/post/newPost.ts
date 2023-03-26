import Swal from 'sweetalert2';
import axios from 'axios';
import makePost from './makePost';


let postBodyElements = document.querySelectorAll('.create-new-post-box textarea') as NodeList;
let postImageElements = document.querySelectorAll('.create-new-post-box div.btns input') as NodeList;

async function newPost(body: string, img?: File) {

    let newPost: any;

    let token = window.localStorage.getItem('token');

    let url = 'https://tarmeezacademy.com/api/v1/posts';

    let headers = {
        "authorization": `Bearer ${token}`,
        "Content-Type": 'multipart/form-data'
    }

    let formData = new FormData();
    if (body) {
        formData.append('body', body);
    }
    if (img) {
        formData.append('image', img);
    }


    await axios.post(url, formData, { headers }).then((res: any) => {

        let data = res.data.data;
        newPost = makePost(data);

        postBodyElements.forEach(ele => (ele as HTMLTextAreaElement).value = '');
        postImageElements.forEach(ele => (ele as HTMLInputElement).value = '');
        (document.querySelector('.create-new-post-box .post-img') as HTMLDivElement).innerHTML = '';

    }).catch(error => {
        Swal.fire({
            icon: 'error',
            title: `${error.response.data.message}`,
            text: 'Something went wrong!'
        })
    });

    return newPost;
}

export default newPost;