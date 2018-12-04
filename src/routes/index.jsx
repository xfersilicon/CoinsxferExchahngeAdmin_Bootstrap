import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../components/Dashboard/Dashboard";
import CustomersInfo from "../components/CustomersInfo/CustomersInfo";
import AdvancedSearch from "../components/AdvancedSearch/AdvancedSearch";
import SearchResults from "../components/AdvancedSearch/SearchResults";
import CreateUser from "../components/SuperAdmin/CreateUser";
// import AddNewUser from "../components/SuperAdmin/AddNewUser" change this to AdminUsersList;
import SetUserRights from "../components/SuperAdmin/SetUserRights";
import CommissionSettings from "../components/CommissionSettings/CommissionSettings";
import Withdrawals from "../components/Transfers/Withdrawals";
import Deposits from "../components/Transfers/Deposits";
import FiatWallet from "../components/FiatWallet/FiatWallet";
import KycSearchResults from "../components/KycSearchResults/KycSearchResults";

import AppliedRoute from './AppliedRoutes/AppliedRoutes'

export default ({ childProps }) => {
    return (
        <Switch>
            <AppliedRoute path='/dashboard' component={Dashboard} />
            <AppliedRoute path='/customersInfo' component={CustomersInfo} />
            <AppliedRoute path='/advancedSearch' component={AdvancedSearch} />
            <AppliedRoute path='/searchResults' component={SearchResults} />
            <AppliedRoute path='/createUser' component={CreateUser} />
            {/* <AppliedRoute path='/addNewUser' component={AddNewUser} /> change this to AdminUsersList */}
            <AppliedRoute path='/setUserRights' component={SetUserRights} />
            <AppliedRoute path='/commissionsSettings' component={CommissionSettings} />
            <AppliedRoute path='/deposits' component={Deposits} />
            <AppliedRoute path='/withdrawals' component={Withdrawals} />
            <AppliedRoute path='/fiatWallet' component={FiatWallet} />
            <AppliedRoute path='/kycSearchResults' component={KycSearchResults} />
        </Switch>
    );
};