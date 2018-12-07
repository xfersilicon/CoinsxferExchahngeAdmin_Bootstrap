import axios from 'axios';
// import config from "../config/config";
import qs from 'qs';
import config from '../config/config';

axios.defaults.withCredentials = true;

export const fetchDashboardDetails = () => {
    return axios.get(`${config.user}`+config.urls.dashboard)
    .then(res => {
        return res.data;
    })
        .catch(error => {
            // if (error.response) {
            //     // The request was made and the server responded with a status code
            //     // that falls out of the range of 2xx
            //     console.log(">>>>>>>>>>> Response Headers >>>>>>>>>>>>>>>>");
            //     console.log(error.response.data);
            //     console.log(error.response.status);
            //     console.log(error.response.headers);
            //     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

            //     if (error.response.data) {
            //         toast.error(error.response.data.Message);
            //     } else {
            //         toast.error("Response not received from server");
            //     }
            // } else if (error.request) {
            //     // The request was made but no response was received
            //     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            //     // http.ClientRequest in node.js
            //     console.log(error.request);
            //     toast.error("Response not received from server")
            // } else {
            //     // Something happened in setting up the request that triggered an Error
            //     console.log('Error', error.message);
            //     toast.error('Some Error Occcured in sending the request');
            // }
        })
}

export const fetchAdvancedSearch = (params) => {
    console.log(params);
    const url = `${config.user}` + config.urls.customerInfo;
    return axios.post(`${config.user}/AdvancedSearch/FetchAdvancedSearch`, qs.stringify(params))
    .then(res => {
        return res.data;
    })
        .catch(error => {
            // if (error.response) {
            //     // The request was made and the server responded with a status code
            //     // that falls out of the range of 2xx
            //     console.log(">>>>>>>>>>> Response Headers >>>>>>>>>>>>>>>>");
            //     console.log(error.response.data);
            //     console.log(error.response.status);
            //     console.log(error.response.headers);
            //     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

            //     if (error.response.data) {
            //         toast.error(error.response.data.Message);
            //     } else {
            //         toast.error("Response not received from server");
            //     }
            // } else if (error.request) {
            //     // The request was made but no response was received
            //     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            //     // http.ClientRequest in node.js
            //     console.log(error.request);
            //     toast.error("Response not received from server")
            // } else {
            //     // Something happened in setting up the request that triggered an Error
            //     console.log('Error', error.message);
            //     toast.error('Some Error Occcured in sending the request');
            // }
        })
}

export const fetchCustomersInfo = (params) => {
    console.log(params);
    return axios.post(`${config.user}`+config.urls.customerInfo, qs.stringify(params))
    .then(res => {
        return res.data;
    })
        .catch(error => {
            // if (error.response) {
            //     // The request was made and the server responded with a status code
            //     // that falls out of the range of 2xx
            //     console.log(">>>>>>>>>>> Response Headers >>>>>>>>>>>>>>>>");
            //     console.log(error.response.data);
            //     console.log(error.response.status);
            //     console.log(error.response.headers);
            //     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

            //     if (error.response.data) {
            //         toast.error(error.response.data.Message);
            //     } else {
            //         toast.error("Response not received from server");
            //     }
            // } else if (error.request) {
            //     // The request was made but no response was received
            //     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            //     // http.ClientRequest in node.js
            //     console.log(error.request);
            //     toast.error("Response not received from server")
            // } else {
            //     // Something happened in setting up the request that triggered an Error
            //     console.log('Error', error.message);
            //     toast.error('Some Error Occcured in sending the request');
            // }
        })
}




// export const fetchGetData = (url, data) => {
//     return axios.get(url)
//         .then(res => {
//             return res.data
//         }).catch(error => {
//             console.log(error.response);
            
//             // if (error.response) {
//             //     // The request was made and the server responded with a status code
//             //     // that falls out of the range of 2xx
//             //     console.log(">>>>>>>>>>> Response Headers >>>>>>>>>>>>>>>>");
//             //     console.log(error.response.data);
//             //     console.log(error.response.status);
//             //     console.log(error.response.headers);
//             //     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

//             //     if (error.response.data) {
//             //         toast.error(error.response.data.Message);
//             //     } else {
//             //         toast.error("Response not received from server");
//             //     }
//             // } else if (error.request) {
//             //     // The request was made but no response was received
//             //     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//             //     // http.ClientRequest in node.js
//             //     console.log(error.request);
//             //     toast.error("Response not received from server")
//             // } else {
//             //     // Something happened in setting up the request that triggered an Error
//             //     console.log('Error', error.message);
//             //     toast.error('Some Error Occcured in sending the request');
//             // }
//         })
// }

// export const fetchPostData = (url, data) => {
//     return axios.post(url, qs.stringify(data))
//         .then(res => {
//             return res.data
//         }).catch(err => {
//             // if (error.response) {
//             //     // The request was made and the server responded with a status code
//             //     // that falls out of the range of 2xx
//             //     console.log(">>>>>>>>>>> Response Headers >>>>>>>>>>>>>>>>");
//             //     console.log(error.response.data);
//             //     console.log(error.response.status);
//             //     console.log(error.response.headers);
//             //     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

//             //     if (error.response.data) {
//             //         toast.error(error.response.data.Message);
//             //     } else {
//             //         toast.error("Response not received from server");
//             //     }
//             // } else if (error.request) {
//             //     // The request was made but no response was received
//             //     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//             //     // http.ClientRequest in node.js
//             //     console.log(error.request);
//             //     toast.error("Response not received from server")
//             // } else {
//             //     // Something happened in setting up the request that triggered an Error
//             //     console.log('Error', error.message);
//             //     toast.error('Some Error Occcured in sending the request');
//             // }
//         })
// }