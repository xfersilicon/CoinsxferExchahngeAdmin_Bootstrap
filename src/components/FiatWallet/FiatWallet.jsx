import React, { Component } from 'react';
// import { Row, Col, Container, Jumbotron, Card, CardHeader, CardBody } from 'reactstrap';
import MainHeader from "../MainHeader/MainHeader";
import "react-table/react-table.css";
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Select from 'react-select';

const paymentModeOptions = [
    { value: 'Paypal/PG', label: 'Paypal/PG'},
    { value: 'NetBanking', label: 'NetBanking' }
];

class FiatWallet extends Component {
    state = {
        selectPaymentMode: null
    };

    handlePaymentModeChange = (selectPaymentMode) => {
        this.setState({ selectPaymentMode });
    };

    render() {
        const {selectPaymentMode} = this.state;

        return (
            <div className="adminMod">
                <MainHeader heading="fiat wallet filling" subHeading="wallet"/>
                <Col lg={6} style={{margin: "0 auto"}}>
                    <Form className="searchTransaction">
                        <FormGroup className="searchTransaction">
                            <Label for="coinPairLabel">Confirm Client Id</Label>
                            <Input type="text" names="coinPair" id="coinPair" placeholder="Confirm Client Id"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="fromDateLabel">From Date</Label>
                            <Input type="date" name="fromDate" id="fromDate" placeholder="mm/dd/yyyy"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="toDateLabel">To Date</Label>
                            <Input type="date" name="toDate" id="toDate" placeholder="mm/dd/yyyy"/>
                        </FormGroup>
                        <FormGroup row>
                            <Col lg="12">
                                <Label for="paymentModeLabel">Payment Mode</Label>
                            </Col>
                            <Col lg="12">
                                <Select
                                    label="Payment Mode"
                                    value={selectPaymentMode}
                                    onChange={this.handlePaymentModeChange}
                                    options={paymentModeOptions}
                                    placeholder="Select payment Mode"
                                />
                            </Col>
                        </FormGroup>
                        <Button className="whtBtn" tag={Link} to="/searchResults">Ok</Button>
                        <Button className="whtBtn" tag={Link} to="/searchResults">Cancel</Button>
                    </Form>
                </Col>
            </div>
        );
    }
}

export default FiatWallet;