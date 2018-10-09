import React from 'react';
import { Col, Row, Jumbotron, Form, FormGroup, Label, Input } from 'reactstrap';
import MainHeader from "../MainHeader/MainHeader";
import BuyCommissionsTable from '../Tables/CommissionSettingsTable/BuyCommissionsTable';
import SellCommissionsTable from '../Tables/CommissionSettingsTable/SellCommissionsTable';
import CardLayout from '../../layouts/cardLayout';

const CommissionSettings = () => {
    return (
        <div className="adminMod">
                <MainHeader heading="commission settings" subHeading="buy & sell"/>
                <Form>
                    <FormGroup row style={{float:"right"}} >
                        <Col lg={3}>
                            <Label for="searchInputLabel">Search</Label>
                        </Col>
                        <Col lg={7}>
                            <Input type="text" name="searchInput" id="searchInput" placeholder="" />
                        </Col>
                    </FormGroup>
                </Form>     
                <CardLayout Header="Buy" Body={<BuyCommissionsTable />} />
            {/* <div>
                <CardLayout Header="Sell" Body={<SellCommissionsTable />} />
            </div> */}
        </div>
    )
}

export default CommissionSettings;