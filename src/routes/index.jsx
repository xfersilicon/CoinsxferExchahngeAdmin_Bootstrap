import React from "react";
import { Route, Switch } from "react-router-dom";
import AccountActivationPanel from "../components/AccountActivationPanel/AccountActivationPanel";
import AccountStatus from "../components/AccountStatus/AccountStatus";
import AdvancedSearch from "../components/AdvancedSearch/AdvancedSearch";
import DailyReport from "../components/BalanceReport/DailyReport";
import SearchReport from "../components/BalanceReport/SearchReport";
import BuyCommissionSettings from "../components/CommissionSettings/BuyCommissionSettings";
import SellCommissionSettings from "../components/CommissionSettings/SellCommissionSettings";
import Info from "../components/CustomersInfo/Info";
import KycDetails from "../components/CustomersInfo/KycDetails";
import Dashboard from "../components/Dashboard/Dashboard";
import FiatWallet from "../components/FiatWallet/FiatWallet";
import KycApprovals from "../components/KycApprovals/KycApprovals";
import OpenOrdersToken from "../components/OpenOrdersToken/OpenOrdersToken";
import CreateUser from "../components/SuperAdmin/CreateUser";
import PageControl from "../components/SuperAdmin/PageControl";
import SetUserRights from "../components/SuperAdmin/SetUserRights";
import TradeHistoryToken from "../components/TradeHistoryToken/TradeHistoryToken";
import Transactions from "../components/Transactions/Transactions";
import BalanceReportTransfers from "../components/Transfers/BalanceReportTransfers";
import DepositTransfers from "../components/Transfers/DepositTransfers";
import WithdrawalTransfers from "../components/Transfers/WithdrawalTransfers";

import AppliedRoute from './AppliedRoutes/AppliedRoutes'

export default ({ childProps }) => {
    return (
        <Switch>
            <AppliedRoute path='/accountActivationPanel' component={AccountActivationPanel} />
            <AppliedRoute path='/accountStatus' component={AccountStatus} />
            <AppliedRoute path='/advancedSearch' component={AdvancedSearch} />
            <AppliedRoute path='/dailyReport' component={DailyReport} />
            <AppliedRoute path='/searchReport' component={SearchReport} />
            <AppliedRoute path='/buyCommissionSettings' component={BuyCommissionSettings} />
            <AppliedRoute path='/sellCommissionSettings' component={SellCommissionSettings} />
            <AppliedRoute path='/info' component={Info} />
            <AppliedRoute path='/kycDetails' component={KycDetails} />
            <AppliedRoute path='/dashboard' component={Dashboard} />
            <AppliedRoute path='/fiatWallet' component={FiatWallet} />
            <AppliedRoute path='/kycApprovals' component={KycApprovals} />
            <AppliedRoute path='/openOrdersToken' component={OpenOrdersToken} />
            <AppliedRoute path='/createUser' component={CreateUser} />
            <AppliedRoute path='/pageControl' component={PageControl} />
            <AppliedRoute path='/setUserRights' component={SetUserRights} />
            <AppliedRoute path='/tradeHistoryToken' component={TradeHistoryToken} />
            <AppliedRoute path='/transactions' component={Transactions} />
            <AppliedRoute path='/balanceReportTransfers' component={BalanceReportTransfers} />
            <AppliedRoute path='/depositTransfers' component={DepositTransfers} />
            <AppliedRoute path='/withdrawalTransfers' component={WithdrawalTransfers} />
        </Switch>
    );
};