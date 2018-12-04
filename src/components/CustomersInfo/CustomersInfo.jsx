import React, { Component } from 'react';
import { Row, Col, Container, Jumbotron, Card, CardHeader, CardBody, Form, FormGroup, Label, Input } from 'reactstrap';
import MainHeader from "../MainHeader/MainHeader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTable from "react-table";
import "react-table/react-table.css";
import namor from "namor";
import $ from "jquery/dist/jquery.min";
import CustomerManagementUsersTable from '../Tables/CustomersInfoTable/CustomerManagementUsersTable';
import CardLayout from '../../layouts/cardLayout';


class CustomersInfo extends Component {
    render() {
        return (
            <div className="adminMod">
                <MainHeader heading="customer management" subHeading="users" />
                <Form className="searchTransaction">
                    <FormGroup row style={{float:"right"}} >
                        <Col lg={3}>
                            <Label for="searchInputLabel">Search</Label>
                        </Col>
                        <Col lg={7}>
                            <Input type="text" name="searchInput" id="searchInput" placeholder="" />
                        </Col>
                    </FormGroup>
                </Form>
                <CardLayout Header="Users" iconName="user" Body={<CustomerManagementUsersTable />} />
            </div>
        );
    }
}

export default CustomersInfo;