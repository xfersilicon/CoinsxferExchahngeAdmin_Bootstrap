import axios from 'axios';
// import config from "../config/config";
import qs from 'qs';
import config from '../config/config';
import { toast } from 'react-toastify';

axios.defaults.withCredentials = true;

//API call to fetch dashboard details
export const fetchDashboardDetails = () => {
    return axios.get(`${config.user}` + config.urls.dashboard)
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

//API call to fetch advanced search
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

//API call to fetch customers info
export const fetchCustomersInfo = (params) => {
    console.log(params);
    return axios.post(`${config.user}` + config.urls.customerInfo, qs.stringify(params))
        .then(res => {
            return res.data;
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(">>>>>>>>>>> Response Headers >>>>>>>>>>>>>>>>");
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

                if (error.response.data) {
                    toast.error(error.response.data.Message);
                } else {
                    toast.error("Response not received from server");
                }
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
                toast.error("Response not received from server")
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                toast.error('Some Error Occcured in sending the request');
            }
        })
}

//API call to create a user - super admin
// export const postCreateUser = (params) => {
//     console.log(params);
//     return axios.post(`${config.user}` + config.urls.customerInfo, qs.stringify(params))
//         .then(res => {
//             return res.data;
//         })
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

//API call to set user rights - super admin
// export const postSetUserRights = (params) => {
//     console.log(params);
//     return axios.post(`${config.user}` + config.urls.customerInfo, qs.stringify(params))
//         .then(res => {
//             return res.data;
//         })
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

//API call to fetch Buy Commission Settings
export const fetchCommissionSettings = (params) => {
    return axios.get(`${config.user}` + config.urls.commissionSettings)
    .then(res => {
        return res.data;
    })
    .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(">>>>>>>>>>> Response Headers >>>>>>>>>>>>>>>>");
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

                if (error.response.data) {
                    toast.error(error.response.data.Message);
                } else {
                    toast.error("Response not received from server");
                }
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
                toast.error("Response not received from server")
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                toast.error('Some Error Occcured in sending the request');
            }
        })
}

// API call to fetch Sell Commission Settings
// export const fetchSellCommissionSettings = (params) => {
//     console.log(params);
//     return axios.post(`${config.user}` + config.urls.customerInfo, qs.stringify(params))
//         .then(res => {
//             return res.data;
//         })
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

//API call to fetch Withdrawal Transfers
export const fetchWithdrawalTransfers = (params) => {
    const url = `${config.user}` + config.urls.withdrawalTransfers;
    return axios.post(url, qs.stringify(params))
        .then(res => {
            return res.data;
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(">>>>>>>>>>> Response Headers >>>>>>>>>>>>>>>>");
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

                if (error.response.data) {
                    toast.error(error.response.data.Message);
                } else {
                    toast.error("Response not received from server");
                }
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
                toast.error("Response not received from server")
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                toast.error('Some Error Occcured in sending the request');
            }
        })
}

//API call to fetch Deposit Transfers
export const fetchDepositTransfers = (params) => {
    const url = `${config.user}` + config.urls.depositTransfers;
    return axios.post(url, qs.stringify(params))
        .then(res => {
            return res.data;
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(">>>>>>>>>>> Response Headers >>>>>>>>>>>>>>>>");
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

                if (error.response.data) {
                    toast.error(error.response.data.Message);
                } else {
                    toast.error("Response not received from server");
                }
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
                toast.error("Response not received from server")
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                toast.error('Some Error Occcured in sending the request');
            }
        })
}



//API call to get corporate balance
export const fetchCorporateBalances = (params) => {
    const url = `${config.wallets}` + config.urls.corporateBalances;
 
    return axios.post(url, qs.stringify(params))
        .then(res => {
            return res.data;
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(">>>>>>>>>>> Response Headers >>>>>>>>>>>>>>>>");
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
 
                if (error.response.data) {
                    toast.error(error.response.data.Message);
                } else {
                    toast.error("Response not received from server");
                }
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
                toast.error("Response not received from server")
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                toast.error('Some Error Occcured in sending the request');
            }
        })
 }

 //API call to update transaction hash
export const updateTransactionHash = (params) => {
    const url = `${config.user}` + config.urls.updateTransactionHash;
 
    return axios.post(url, qs.stringify(params))
        .then(res => {
            return res.data;
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(">>>>>>>>>>> Response Headers >>>>>>>>>>>>>>>>");
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
 
                if (error.response.data) {
                    toast.error(error.response.data.Message);
                } else {
                    toast.error("Response not received from server");
                }
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
                toast.error("Response not received from server")
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                toast.error('Some Error Occcured in sending the request');
            }
        })
 }

 //API call to update commission settings
export const updateCommissionSettings= (params) => {
    console.log(params);
    
    const url = `${config.user}` + config.urls.updateCommissionSettings;
 
    return axios.post(url, qs.stringify(params))
        .then(res => {
            return res.data;
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(">>>>>>>>>>> Response Headers >>>>>>>>>>>>>>>>");
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
 
                if (error.response.data) {
                    toast.error(error.response.data.Message);
                } else {
                    toast.error("Response not received from server");
                }
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
                toast.error("Response not received from server")
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                toast.error('Some Error Occcured in sending the request');
            }
        })
 }


//NOTE***********: Do not remove the code. This is planned for next stage of development. So commented as of now. Please uncomment it during development ************
// //API call to add Fiat Wallet Filling for user
// export const postUserFiatWallet = (params) => {
//     console.log(params);
//     return axios.post(`${config.user}`+config.urls.customerInfo, qs.stringify(params))
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