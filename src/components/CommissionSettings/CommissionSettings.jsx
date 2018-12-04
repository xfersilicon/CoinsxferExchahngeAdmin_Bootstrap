import React, {Component} from 'react';
import { Col, Row, Jumbotron, Form, FormGroup, Label, Input } from 'reactstrap';
import MainHeader from "../MainHeader/MainHeader";
// import BuyCommissionsTable from '../Tables/CommissionSettingsTable/BuyCommissionsTable';
// import SellCommissionsTable from '../Tables/CommissionSettingsTable/SellCommissionsTable';
import CommissionsTable from '../Tables/CommissionSettingsTable/CommissionsTable';
import CardLayout from '../../layouts/cardLayout';

import { makeData } from "../../Utils";

// const CommissionSettings = () => {
//     return (
//         <div className="adminMod">
//             <MainHeader heading="commission settings" subHeading="buy & sell"/>
//             <CardLayout Header="Buy" iconName="user" Body={<BuyCommissionsTable />} />
//             <CardLayout Header="Sell" iconName="user" Body={<SellCommissionsTable />} />
//         </div>
//     )
// }

class CommissionSettings extends Component {

    state = {
        buyCommissionData: makeData(),
        sellCommissionData: makeData()
    }

    // fetchBuyCommission = () => {
    //
    // }
    //
    // fetchSellCommission = () => {
    //
    // }
    render(){
        return (
            <div className="adminMod">
                <MainHeader heading="commission settings" subHeading="buy & sell"/>
                <CardLayout Header="Buy" iconName="user" Body={<CommissionsTable data={this.state.buyCommissionData}/>}/>
                <CardLayout Header="Sell" iconName="user" Body={<CommissionsTable data={this.state.sellCommissionData}/>} />
            </div>
        )
    }
}

export default CommissionSettings;