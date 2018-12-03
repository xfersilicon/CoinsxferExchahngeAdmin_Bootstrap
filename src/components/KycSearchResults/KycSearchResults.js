import React from 'react';
import { Col, Row, Jumbotron, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import MainHeader from "../MainHeader/MainHeader";
import { Link } from 'react-router-dom';
import PanCardTable from '../Tables/CustomersInfoTable/PanCardTable';
import AadharCardTable from '../Tables/CustomersInfoTable/AadharCardTable';
import BankDetailsTable from '../Tables/CustomersInfoTable/BankDetailsTable';
import CardLayout from '../../layouts/cardLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const KycSearchResults = () => {
    return (
        <div className="adminMod">
            <MainHeader heading="kyc search results" subHeading="user details"/>
            <Form>
                <FormGroup row style={{float:"right"}}>
                    <Label for="searchInputLabel" sm={2}>Search</Label>
                    <Col sm={8}>
                        <Input type="text" name="searchInput" id="searchInput" placeholder="" />
                    </Col>
                </FormGroup>
                <CardLayout Header="Pan Card" iconName="address-card" Body={<PanCardTable />} />
                <CardLayout Header="Aadhar Card" iconName="address-card" Body={<AadharCardTable />} />
                <CardLayout Header="Bank Passbook" iconName="address-card" Body={<BankDetailsTable />} />
                <div>
                    {/*Show toast message after submission and redirect to customer management table*/}
                    <Button className="whtBtn">Submit</Button>
                    {/*Redirect to customer management table*/}
                    <Button className="whtBtn">Go Back</Button>
                </div>
            </Form>
        </div>
    )
}

export default KycSearchResults;