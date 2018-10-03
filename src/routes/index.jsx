import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../components/Dashboard/Dashboard";
import CustomersInfo from "../components/CustomersInfo/CustomersInfo";
import AdvancedSearch from "../components/AdvancedSearch/AdvancedSearch";
import CreateUser from "../components/SuperAdmin/CreateUser";
import SetUserRights from "../components/SuperAdmin/SetUserRights";
import CommissionSettings from "../components/CommissionSettings/CommissionSettings";
import WithdrawalTransfers from "../components/Transfers/WithdrawalTransfers";
import DepositTransfers from "../components/Transfers/DepositTransfers";
import FiatWallet from "../components/FiatWallet/FiatWallet";



import AppliedRoute from './AppliedRoutes/AppliedRoutes'

export default ({ childProps }) => {
    return (
        <Switch>
            <AppliedRoute path='/dashboard' component={Dashboard} />
            <AppliedRoute path='/customersInfo' component={CustomersInfo} />
            <AppliedRoute path='/advancedSearch' component={AdvancedSearch} />
            <AppliedRoute path='/createUser' component={CreateUser} />
            <AppliedRoute path='/setUserRights' component={SetUserRights} />
            <AppliedRoute path='/commissionSettings' component={CommissionSettings} />
            <AppliedRoute path='/depositTransfers' component={DepositTransfers} />
            <AppliedRoute path='/withdrawalTransfers' component={WithdrawalTransfers} />
            <AppliedRoute path='/fiatWallet' component={FiatWallet} />
        </Switch>
    );
};