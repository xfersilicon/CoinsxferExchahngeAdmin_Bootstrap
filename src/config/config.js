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

    /* visible records in tables */
    //
    // buyTableRecordsPerPage: 50,
    // sellTableRecordsPerPage: 50,
    // orderHistoryRecordsPerPage: 50,
    // openOrdersRecordsPerPage: 50,
    // closedOrdersRecordsPerPage: 50,
    // wallerTransactionsRecordsPerPage: 10,
    // tradeHistoryRecordsPerPage: 10,

    ...config
};

