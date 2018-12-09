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
import Login from "../components/Login/Login";

import AuthenticatedRoute from "./AuthenticatedRoutes/AuthenticatedRoutes.jsx";
import UnauthenticatedRoute from "./UnauthenticatedRoutes/UnauthenticatedRoutes";
import CorporateBalance from "../components/CorporateBalance/CorporateBalance";
import TransactionHash from "../components/TransactionHash/TransactionHash";




export default ({ childProps }) => {
    return (
        <Switch>
            <UnauthenticatedRoute exact path='/' component={Login} props={childProps}/>
            <AuthenticatedRoute exact path='/dashboard' component={Dashboard} props={childProps}/>
            <AuthenticatedRoute exact path='/customersInfo' component={CustomersInfo} props={childProps}/>
            <AuthenticatedRoute exact path='/advancedSearch' component={AdvancedSearch} props={childProps}/>
            <AuthenticatedRoute exact path='/searchResults' component={SearchResults} props={childProps}/>
            <AuthenticatedRoute exact path='/createUser' component={CreateUser} props={childProps}/>
            {/* <AppliedRoute path='/addNewUser' component={AddNewUser} /> change this to AdminUsersList */}
            <AuthenticatedRoute exact path='/setUserRights' component={SetUserRights} props={childProps}/>
            <AuthenticatedRoute exact path='/commissionsSettings' component={CommissionSettings} props={childProps}/>
            <AuthenticatedRoute exact path='/deposits' component={Deposits} props={childProps}/>
            <AuthenticatedRoute exact path='/withdrawals' component={Withdrawals}props={childProps} />
            <AuthenticatedRoute exact path='/fiatWallet' component={FiatWallet} props={childProps}/>
            {/* <AuthenticatedRoute exact path='/kycSearchResults' component={KycSearchResults} props={childProps}/> */}
            <AuthenticatedRoute exact path='/corporateBalance' component={CorporateBalance} props={childProps}/>
            <AuthenticatedRoute exact path='/transactionHash' component={TransactionHash} props={childProps}/>


        </Switch>
    );
};