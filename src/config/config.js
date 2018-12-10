const dev = {
    user: "https://wa-dev-cind-exchange-dev-internalapi.azurewebsites.net/api",
    wallets: "https://wa-dev-cind-exchange-dev-wallet-api.azurewebsites.net/api"
};

const dev_local = {
    user: "http://localhost:58571/api",
    wallets: "http://localhost:56069/api"
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

    // / *use the below config values for routes across the components*/

    routes: {
    },


    urls: {
        customerInfo: '/CustomersInfo/FetchCustomerInfo',
        dashboard: "/Dashboard/GetDashboardDetail",
        advancedSearch: "/AdvancedSearch/FetchAdvancedSearch",
        corporateBalances: "/UserWallets/GetAccountBalanceBreakDownAccountType",
        commissionSettings: "/CommissionSettings/GetCommissionSettings",
        withdrawalTransfers: "/Withdrawal/GetWithdrawlTransactionsByCoinTypeAsync",
        depositTransfers: "/Deposit/GetDepositTransactionsByCoinTypeAsync",
        updateTransactionHash: "/Dashboard/UpdateTransactionHashbyTransactionId",
        updateCommissionSettings: "/CommissionSettings/UpdateCommissionSettings",
    },

    adminTypeOptions: [
        { value: 'super admin', label: 'Super Admin' },
        { value: 'admin', label: 'Admin' }
    ],

    // Defining Transaction Type Options for Selection
    transactionTypeOptions: [
        { value: 'BuyOrder', label: 'Buy' },
        { value: 'SellOrder', label: 'Sell' },
        { value: 'Deposit', label: 'Deposit' },
        { value: 'withdraw', label: 'Withdrawal' }
    ],

    // Defining Coir Pair Selection
    coinPairOptions: [
        { value: 'ETHBTC', label: 'ETH-BTC' },
        { value: 'XRPBTC', label: 'XRP-BTC' }
    ],


    fileTypeOptions: [
        { value: 'pdf', label: 'PDF' },
        { value: 'doc', label: 'JPEG' }
    ],

    coinTypeOptions: [
        { value: 'BTC', label: 'BTC' },
        { value: 'XRP', label: 'XRP' },
        { value: 'ETH', label: 'ETH' }
    ],

    calculationTypeOptions: [
        { value: 'Percentage', label: 'Percentage' },
        { value: 'Fixed', label: 'Fixed' }
    ],

    /* visible records in tables */
    //
    searchResultsPerPage: 10,
    corporateSearchResultsPage: 4,
    depositResultsPerPage: 10,
    withdrawalResultsPerPage: 10,
    // buyTableRecordsPerPage: 50,
    // sellTableRecordsPerPage: 50,
    // orderHistoryRecordsPerPage: 50,
    // openOrdersRecordsPerPage: 50,
    // closedOrdersRecordsPerPage: 50,
    // wallerTransactionsRecordsPerPage: 10,
    // tradeHistoryRecordsPerPage: 10,

    ...config
};