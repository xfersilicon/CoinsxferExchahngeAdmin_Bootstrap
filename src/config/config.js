const dev = {
    user: "https://wa-dev-cind-exchange-dev-internalapi.azurewebsites.net/api"
};

const dev_local = {
    user: "http://localhost:58571/api"
};

const config = process.env.REACT_APP_STAGE === 'dev'
    ? dev
    : dev_local;

/* Uncomment this if prodction env is ready */
// const config = process.env.REACT_APP_STAGE === 'dev'
//   ? dev
//   : process.env.REACT_APP_STAGE === 'prod' ? prod
//   : process.env.REACT_APP_STAGE === 'test' ? testing : dev_local;

export default {
    // Add common config values here

    /* use the below config values for routes across the components*/

    routes: {
    },


    urls: {
        customerInfo :'/CustomersInfo/FetchCustomerInfo',
        dashboard: "/Dashboard/GetDashboardDetail",
        advancedSearch: "/AdvancedSearch/FetchAdvancedSearch ",
        createUser: "",
        setUserRights: "",
        commissionSettings: "/CommissionSettings/GetCommissionSettings",
        buyCommissionSettings: "",
        sellCommissionSettings: "",
        withdrawalTransfers: "",
        depositTransfers: "",
        userFiatWallet: ""
    },

    
    adminTypeOptions: [
        { value: 'super admin', label: 'Super Admin' },
        { value: 'admin', label: 'Admin' }
    ],

    /* visible records in tables */
    //
    searchResultsPerPage: 10,
    // buyTableRecordsPerPage: 50,
    // sellTableRecordsPerPage: 50,
    // orderHistoryRecordsPerPage: 50,
    // openOrdersRecordsPerPage: 50,
    // closedOrdersRecordsPerPage: 50,
    // wallerTransactionsRecordsPerPage: 10,
    // tradeHistoryRecordsPerPage: 10,

    ...config
};

