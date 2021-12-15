/**
 *  http config
 */
import axios from "axios";

axios.defaults.timeout = 100000;
axios.defaults.baseURL = "http://test.mediastack.cn/";

/**
 * http request 
 */
axios.interceptors.request.use(
    (config) => {
        config.data = JSON.stringify(config.data);
        config.headers = {
            "Content-Type": "application/json",
        };
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * http response 
 */
axios.interceptors.response.use(
    (response) => {
        if (response.data.errCode === 2) {
            console.log("overdue");
        }
        return response;
    },
    (error) => {
        console.log("requests error", error);
    }
);

/**
 * get
 * @param url  
 * @param params  
 * @returns {Promise}
 */
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params,
        }).then((response) => {
            landing(url, params, response.data);
            resolve(response.data);
        })
            .catch((error) => {
                reject(error);
            });
    });
}

/**
 * post
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                reject(err);
            }
        );
    });
}

/**
 * patch
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                msag(err);
                reject(err);
            }
        );
    });
}

/**
 * put
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                msag(err);
                reject(err);
            }
        );
    });
}

// result data
export default function (fecth, url, param) {
    let _data = "";
    return new Promise((resolve, reject) => {
        switch (fecth) {
            case "get":
                console.log("begin a get request,and url:", url);
                get(url, param)
                    .then(function (response) {
                        resolve(response);
                    })
                    .catch(function (error) {
                        console.log("get request GET failed.", error);
                        reject(error);
                    });
                break;
            case "post":
                post(url, param)
                    .then(function (response) {
                        resolve(response);
                    })
                    .catch(function (error) {
                        console.log("get request POST failed.", error);
                        reject(error);
                    });
                break;
            default:
                break;
        }
    });
}

// reject message
function msag(err) {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                alert(err.response.data.error.details);
                break;
            case 401:
                alert("please sign in");
                break;

            case 403:
                alert("Access denied");
                break;

            case 404:
                alert("An error occurred at the request address");
                break;

            case 408:
                alert("The request timed out");
                break;

            case 500:
                alert("Server internal error");
                break;

            case 501:
                alert("The service is not implemented");
                break;

            case 502:
                alert("Gateway error");
                break;

            case 503:
                alert("The service is unavailable");
                break;

            case 504:
                alert("The gateway timed out");
                break;

            case 505:
                alert("Http version is not supported");
                break;
            default:
        }
    }
}

/**
 * @param url
 * @param params
 * @param data
 */
function landing(url, params, data) {
    if (data.code === -1) {
    }
}

