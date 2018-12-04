import React from 'react';
import { Col, Row, Jumbotron, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {Redirect, Link} from "react-router-dom";
import { makeData } from "../../../Utils";
import FeedbackForm from "../../KycSearchResults/FeedbackForm";


class panCardTable extends React.Component {
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
                    <img alt="user pan card preview" src={`${process.env.PUBLIC_URL}/assets/pancard.png`} />
                </Col>
                <Col>
                    <Form className="searchTransaction">
                        <FormGroup>
                            <Label for="panFullNameLabel">Full Name</Label>
                            <Input type="text" name="panFullName" id="panFullName" placeholder="Chopra" disabled/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="panNumberLabel">Maximum Transaction Value</Label>
                            <Input type="text" name="panNumber" id="panNumber" placeholder="SDFCV1234D" disabled/>
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

export default panCardTable;





