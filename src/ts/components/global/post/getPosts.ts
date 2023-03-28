import axios from "axios";
import Swal from "sweetalert2";

// fn that get posts from api.
async function getPosts(url: string) {
    let data: [] = [];

    await axios.get(url).then(res => {
        data = res.data.data;

        if (res?.data?.meta?.last_page) {
            window.localStorage.setItem('lastPostsPage', res?.data?.meta?.last_page);
        }
    }).catch((error) => {
        Swal.fire({
            icon: 'error',
            title: `${error.response.data.message}`,
            text: 'Try again later!'
        })
    });

    // loop over the data got from the api and create posts.
    // for await (const post of data) {
    //     await makePost(post).then(res => {
    //         posts += res;
    //     })
    // }

    return data;
}

export default getPosts;