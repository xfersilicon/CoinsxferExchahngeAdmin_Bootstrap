import React from 'react';
import { Col, Row, Jumbotron, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {Redirect, Link} from "react-router-dom";
import { makeData } from "../../../Utils";
import FeedbackForm from "../../KycSearchResults/FeedbackForm";


class BankDetailsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: makeData()
        };
    }

    render() {
        const { data } = this.state;
        return (
            <Row className="p-4">
                <Col className="border">
                    <img className="passbookPreview" alt="user passbook or scanned copy of bank statement preview" src={`${process.env.PUBLIC_URL}/assets/passbook.png`} />
                </Col>
                <Col>
                    <Form className="searchTransaction">
                        <FormGroup>
                            <Label for="bankFullNameLabel">Full Name</Label>
                            <Input type="text" name="bankFullName" id="bankFullName" placeholder="Chopra" disabled/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="ifscCodeLabel">IFSC Code</Label>
                            <Input type="text" name="ifscCode" id="ifscCode" placeholder="HDFC00000032" disabled/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="accountTypeLabel">Account Type</Label>
                            <Input type="text" name="accountType" id="accountType" placeholder="Current" disabled/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="accountNumberLabel">Account Number</Label>
                            <Input type="tel" name="accountNumber" id="accountNumber" placeholder="HDFC00000032" disabled/>
                        </FormGroup>
                    </Form>
                </Col>
                <Col>
                    <FeedbackForm />
                </Col>
            </Row>
        );
    }
}

export default BankDetailsTable;





