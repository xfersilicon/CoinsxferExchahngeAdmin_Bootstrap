import axios from 'axios';
// import config from "../config/config";
import qs from 'qs';


axios.defaults.withCredentials = true;

// export const fetchDashboardDetails = () => {
//     axios.post(`${config.user}/Dashboard/GetDashboardDetail`)
//     .then(res => {

//     })
//         .catch(error => {
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

export const fetchGetData = (url, data) => {
    axios.get(url)
        .then(res => {
            return res.data
        }).catch(error => {
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

export const fetchPostData = (url, data) => {
    axios.post(url, qs.stringify(data))
        .then(res => {
            return res.data
        }).catch(err => {
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

// export const fetchAdvancedSearch = (params) => {
//     axios.post(`${config.user}/AdvancedSearch/FetchAdvancedSearch`, qs.stringify(params))
//     .then(res => {
//         return res.data;
//     })
//         .catch(error => {
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

// export const fetchCustomersInfo = () => {
//     const paginationObj = {
//         'skip': '',
//         'take': ''
//     }
//     axios.post(`${config.user}/CustomersInfo/FetchAdvancedSearch`, qs.stringify(paginationObj))
//     .then(res => {
//         return res.data;
//     })
//         .catch(error => {
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

