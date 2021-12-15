import axios from 'axios';


const http: string = '';

// url
const getUrl = (url: string) => {
    if (!url) {
        return '';
    }
    return `${http}${url}`;
};

// Post
const Post = ({ url = '', data = {} }) => {

    let theUrl: string = getUrl(url);

    return axios.post(theUrl, data)
        .then((response) => {
            if (response) {
                return response;
            } else {
                return Promise.reject();
            }
        })
};

export default {
    Post
};
export {
    Post
};
