import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainHeader from "../MainHeader/MainHeader";
import Select from 'react-select';

// Defining Coir Pair Selection
const coinPairOptions = [
    { value: 'ETH-BTC', label: 'ETH-BTC' },
    { value: 'XRP-BTC', label: 'XRP-BTC' }
];

// Defining Transaction Type Options for Selection
const transactionTypeOptions = [
    { value: 'buy', label: 'Buy' },
    { value: 'sell', label: 'Sell' },
    { value: 'deposit', label: 'Deposit' },
    { value: 'withdraw', label: 'Withdrawal' }
]

// Defining Options for viewing the result set 
const fileTypeOptions = [
    { value: 'pdf', label: 'PDF' },
    { value: 'doc', label: 'JPEG' }
]

export default class AdvancedSearch extends React.Component {
    state = {
        selectedCoinPair: null,
        selectedFileType: null,
        selectedTransactionType: null
    }

    handleCoinPairChange = (selectedCoinPair) => {
        this.setState({ selectedCoinPair });
    }

    handleTransactionTypeChange = (selectedTransactionType) => {
        this.setState({ selectedTransactionType });
    }

    handleFileTypeChange = (selectedFileType) => {
        this.setState({ selectedFileType });
    }

    render() {
        const { selectedTransactionType, selectedCoinPair, selectedFileType } = this.state;
        
        return (
            <div className="adminMod">
                <MainHeader heading="advanced search" subHeading="search" />
                <Col lg={6} style={{margin: "0 auto"}}>
                    <Form className="searchTransaction">
                        <FormGroup row>
                            <Col lg="12">
                                <Label for="coinPairLabel">Coin Pair</Label>
                            </Col>
                            <Col lg="12">
                                <Select
                                    label= "Coin Pair"
                                    value={selectedCoinPair}
                                    onChange={this.handleCoinPairChange}
                                    options={coinPairOptions}
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
                                    options={transactionTypeOptions}
                                    placeholder="Select transaction type"
                                />
                            </Col>
                        </FormGroup>
                        <Row form>
                            <Col lg={6}>
                                <FormGroup>
                                    <Label for="fromDateLabel">From Date</Label>
                                    <Input type="date" name="fromDate" id="fromDate" placeholder="mm/dd/yyyy" />
                                </FormGroup>
                            </Col>
                            <Col lg={6}>
                                <FormGroup>
                                    <Label for="toDateLabel">To Date</Label>
                                    <Input type="date" name="toDate" id="toDate" placeholder="mm/dd/yyyy" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col lg={6}>
                                <FormGroup>
                                    <Label for="minTransLabel">Minimum Transaction Value</Label>
                                    <Input type="text" name="minTrans" id="minTransLabel" placeholder="min value" />
                                </FormGroup>
                            </Col>
                            <Col lg={6}>
                                <FormGroup>
                                    <Label for="maxTransLabel">Maximum Transaction Value</Label>
                                    <Input type="text" name="maxTrans" id="maxTrans" placeholder="max value" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup row>
                            <Col lg="12">
                                <Label for="fileTypeLabel">File Type</Label>
                            </Col>
                            <Col lg="12">
                                <Select
                                    value={selectedFileType}
                                    onChange={this.handleFileTypeChange}
                                    options={fileTypeOptions}
                                    placeholder="Select file type"
                                />
                                </Col>
                        </FormGroup>
                        <Button className="whtBtn" tag={Link} to="/searchResults"><FontAwesomeIcon icon="print" size="md"/> Search</Button>
                    </Form>
                </Col>
            </div>
        );
    }
}