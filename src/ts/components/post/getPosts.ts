import axios from "axios";
import Swal from "sweetalert2";

// fn that get posts from api.
function getPosts(url: string) {
    let posts;

    axios.get(url).then(res => {
        let data = res.data.data;
        // let pageName = window.location.pathname.split("/").pop();
        // if (pageName === 'profile.html') data = data.reverse();
        posts = data;
        // lastPage = res.data.meta.last_page;
    }).catch(error => {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: `${error.response.data.message}`,
            text: 'Try again later!'
        })
    });

    return posts;
}

export default getPosts;