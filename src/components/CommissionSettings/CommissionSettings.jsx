import React from 'react';
import { Col, Row, Jumbotron } from 'reactstrap';
import MainHeader from "../MainHeader/MainHeader";
import BuyCommissionsTable from '../Tables/CommissionSettingsTable/BuyCommissionsTable';
import SellCommissionsTable from '../Tables/CommissionSettingsTable/SellCommissionsTable';
import CardLayout from '../../layouts/cardLayout';

const CommissionSettings = () => {
    return (
        <div className="adminMod">
                <MainHeader heading="commission settings" subHeading="buy & sell"/>
            <Row style={{"float":"right", "marginBottom":"20px"}}>Search<input /></Row>
            <div>
                <CardLayout Header="Buy" Body={<BuyCommissionsTable />} />
            </div>
            {/* <div>
                <CardLayout Header="Sell" Body={<SellCommissionsTable />} />
            </div> */}
        </div>
    )
}

export default CommissionSettings;