import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainHeader from "../MainHeader/MainHeader";
import Select from 'react-select';
import SearchResults from './SearchResults';
import config from '../../config/config';

export default class AdvancedSearch extends React.Component {
    state = {
        selectedCoinPair: null,
        // selectedFileType: null,
        selectedTransactionType: null,
        fromDate: null,
        toDate: null,
        minTrans: null,
        maxTrans: null,
        toggleComponent: false,
        isDataNull: false
    }

    handleCoinPairChange = (selectedCoinPair) => {
        this.setState({ selectedCoinPair });
    }

    handleTransactionTypeChange = (selectedTransactionType) => {
        this.setState({ selectedTransactionType });
    }

    showSearchResults = (e) => {
        e.preventDefault();

        this.setState({ toggleComponent: !this.state.toggleComponent });
    }

    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        });
    }

    render() {
        const { selectedTransactionType, selectedCoinPair, selectedFileType } = this.state;

        return (
            <div>
                {
                    this.state.toggleComponent ? <SearchResults state={this.state} showSearchResults={this.showSearchResults}/>
                        :
                        <div className="adminMod">
                            <MainHeader heading="advanced search" subHeading="search" />
                            <Col lg={6} style={{ margin: "0 auto" }}>
                                <Form className="searchTransaction">
                                    <FormGroup row>
                                        <Col lg="12">
                                            <Label for="coinPairLabel">Coin Pair</Label>
                                        </Col>
                                        <Col lg="12">
                                            <Select
                                                label="Coin Pair"
                                                value={selectedCoinPair}
                                                onChange={this.handleCoinPairChange}
                                                options={config.coinPairOptions}
                                                placeholder="Select coin pair"
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col lg="12">
                                            <Label for="transactionTypeLabel">Transaction Type</Label>
                                        </Col>
                                        <Col lg="12">
                                            <Select
                                                value={selectedTransactionType}
                                                onChange={this.handleTransactionTypeChange}
                                                options={config.transactionTypeOptions}
                                                placeholder="Select transaction type"
                                            />
                                        </Col>
                                    </FormGroup>
                                    <Row form>
                                        <Col lg={6}>
                                            <FormGroup>
                                                <Label for="fromDateLabel">From Date</Label>
                                                <Input type="date" name="fromDate" id="fromDate" placeholder="mm/dd/yyyy" onChange={this.handleInputChange} />
                                            </FormGroup>
                                        </Col>
                                        <Col lg={6}>
                                            <FormGroup>
                                                <Label for="toDateLabel">To Date</Label>
                                                <Input type="date" name="toDate" id="toDate" placeholder="mm/dd/yyyy" onChange={this.handleInputChange} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row form>
                                        <Col lg={6}>
                                            <FormGroup>
                                                <Label for="minTransLabel">Minimum Transaction Value</Label>
                                                <Input type="text" name="minTrans" id="minTransLabel" placeholder="min value" onChange={this.handleInputChange} />
                                            </FormGroup>
                                        </Col>
                                        <Col lg={6}>
                                            <FormGroup>
                                                <Label for="maxTransLabel">Maximum Transaction Value</Label>
                                                <Input type="text" name="maxTrans" id="maxTrans" placeholder="max value" onChange={this.handleInputChange} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Button className="whtBtn" onClick={this.showSearchResults}><FontAwesomeIcon icon="print" size="sm" /> Search</Button>
                                </Form>
                            </Col>
                        </div>
                }
            </div>
        );
    }
}