import React, { Component } from 'react';
import { Row, Col, Container, Jumbotron, Card, CardHeader, CardBody, FormGroup, Label, Input, Form } from 'reactstrap';
import MainHeader from "../MainHeader/MainHeader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomerManagementUsersTable from '../Tables/CustomersInfoTable/CustomerManagementUsersTable';
import CardLayout from '../../layouts/cardLayout';
import Select from 'react-select';
import WithdrawalsTable from '../Tables/TransfersTables/WithdrawalsTable';

const coinTypeOptions = [
    { value: 'BTC', label: 'BTC'},
    { value: 'XRP', label: 'XRP' },
    { value: 'ETH', label: 'ETH' }
];

class Withdrawals extends Component {
    state = {
        selectedCoinType: null
    };

    handleCoinTypeChange = (selectedCoinType) => {
        this.setState({ selectedCoinType });
    };

    render() {
        const { selectedCoinType } = this.state;

        return (
            <div className="adminMod">
                    <MainHeader heading="transfers" subHeading="withdrawals" />
                    <Form className="searchTransaction">
                        <Col lg={6} style={{ margin: "0 auto" }}>
                        <FormGroup row>
                            <Col lg="12">
                                <Label for="coinPairLabel">Coin Type</Label>
                            </Col>
                            <Col lg="12">
                                <Select
                                    label= "Coin Type"
                                    value={selectedCoinType}
                                    onChange={this.handleCoinTypeChange}
                                    options={coinTypeOptions}
                                    placeholder="Select coin type"
                                />
                            </Col>
                        </FormGroup>
                        </Col>
                        {/* <FormGroup row style={{float:"right"}}>
                            <Label for="searchInputLabel" sm={2}>Search</Label>
                            <Col sm={8}>
                                <Input type="text" name="searchInput" id="searchInput" placeholder="" />
                            </Col>
                        </FormGroup> */}
                    </Form>
                <div>
                    <CardLayout Header="Withdrawals" iconName="user" Body={<WithdrawalsTable />} />
                </div>
            </div>
        );
    }
}

export default Withdrawals;