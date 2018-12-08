import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import MainHeader from "../MainHeader/MainHeader";
import config from '../../config/config';

import Select from 'react-select';

const userList = [
    { value: 'Neeharika', label: 'Neeharika' },
    { value: 'Chaitanya', label: 'Chaitanya' },
    { value: 'Manoj', label: 'Manoj' }
]

class SetUserRights extends React.Component {
    state = {
        adminType: null,
        selectedUser: null
    }

    handleAdminTypeChange = (adminType) => {
        this.setState({ adminType });
        ;
    }

    handleUserChange = (selectedUser) => {
        this.setState({ selectedUser });
        console.log(`Option:`, selectedUser);
    }
 
    render() {
        const { selectedUser, adminType } = this.state;

        return (
            <div className="adminMod">
                <MainHeader heading="user rights definitions" subHeading="user rights" />
                <Col lg={4} style={{ left: "35%" }}>
                    <Form className="searchTransaction">
                        <FormGroup>
                            <Label for="userName" hidden>User Name</Label>
                            <Select
                                value={selectedUser}
                                onChange={this.handleUserChange}
                                options={userList}
                                placeholder="User Name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="superAdminLabel" hidden>Super Admin</Label>
                            <Select
                                value={adminType}
                                onChange={this.handleAdminTypeChange}
                                options={config.adminTypeOptions}
                                placeholder="Admin Type"
                            />
                        </FormGroup>
                        {/* ********add functionality here - Onclick of add new user show a modal dialogue box with confirm and cancel buttons and display after user clciks confirm************ */}
                        <Button className="whtBtn">Change</Button>
                    </Form>
                </Col>
            </div>
    );
    }
}

export default SetUserRights;