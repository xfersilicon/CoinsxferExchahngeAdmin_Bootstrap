import React from 'react';
import { Col, Row, Jumbotron, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {Redirect, Link} from "react-router-dom";
import { makeData } from "../../../Utils";
import FeedbackForm from "../../KycSearchResults/FeedbackForm";


class AadharCardTable extends React.Component {
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
                    <img alt="user aadhar card front preview" src={`${process.env.PUBLIC_URL}/assets/aadhar.png`} />
                    <img alt="user aadhar card back side preview" src={`${process.env.PUBLIC_URL}/assets/aadharback.png`} />
                </Col>
                <Col>
                    <Form className="searchTransaction">
                        <FormGroup>
                            <Label for="aadharFullNameLabel">Full Name</Label>
                            <Input type="text" name="aadharFullName" id="aadharFullName" placeholder="Chopra" disabled/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="aadharNumberLabel">Aadhar Number</Label>
                            <Input type="text" name="aadharNumber" id="aadharNumber" placeholder="876789765508" disabled/>
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

export default AadharCardTable;





