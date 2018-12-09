import React, { Component } from 'react';
import { Col, FormGroup, Label, Form } from 'reactstrap';
import MainHeader from "../MainHeader/MainHeader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardLayout from '../../layouts/cardLayout';
import Select from 'react-select';
import DepositTable from '../Tables/TransfersTables/DepositTable';
import config from '../../config/config';


class Deposits extends Component {
    state = {
        selectedCoinType: {
            label: 'BTC',
            value: 'BTC'
        }
    };

    handleCoinTypeChange = (selectedCoinType) => {
        this.setState({ selectedCoinType });
    };

    render() {
        const { selectedCoinType } = this.state;

        return (
            <div className="adminMod">
                <MainHeader heading="transfers" subHeading="deposits" />
                <Form className="searchTransaction">
                    <Col lg={6} style={{ margin: "0 auto" }}>
                        <FormGroup row>
                            <Col lg="12">
                                <Label for="coinPairLabel">Coin</Label>
                            </Col>
                            <Col lg="12">
                                <Select
                                    label= "Coin"
                                    value={selectedCoinType}
                                    onChange={this.handleCoinTypeChange}
                                    options={config.coinTypeOptions}
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
                    <CardLayout Header="Deposits" iconName="user" Body={<DepositTable selectedCoinType={this.state.selectedCoinType.value}/>} />
                </div>
            </div>
        );
    }
}

export default Deposits;