import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import MainHeader from "../MainHeader/MainHeader";

import Select from 'react-select';

const userTypeOptions = [
    { value: 'super admin', label: 'Super Admin' },
    { value: 'admin', label: 'Admin' }
];

const userList = [
    { value: 'Neeharika', label: 'Neeharika' },
    { value: 'Chaitanya', label: 'Chaitanya' },
    { value: 'Manoj', label: 'Manoj' }
]

class SetUserRights extends React.Component {
    state = {
        userTypeselectedOption: null,
        selectedUser: null
    }

    handleUserTypeChange = (userTypeselectedOption) => {
        this.setState({ userTypeselectedOption });
        ;
    }

    handleUserChange = (selectedUser) => {
        this.setState({ selectedUser });
        console.log(`Option:`, selectedUser);
    }
 
    render() {
        const { selectedUser, userTypeselectedOption } = this.state;

        return (
            <div className="adminMod">
                <MainHeader heading="user rights definitions" subHeading="user rights" />
                <Col lg={4} style={{ left: "35%" }}>
                    <Form className="searchTransaction">
                        <FormGroup>
                            <Label for="userName" hidden>User Name</Label>
                            {/* Align drop down values to left */}
                            <Select
                                value={selectedUser}
                                onChange={this.handleUserChange}
                                options={userList}
                                placeholder="User Name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="superAdminLabel" hidden>Super Admin</Label>
                            {/* Align drop down values to left */}
                            <Select
                                value={userTypeselectedOption}
                                onChange={this.handleUserTypeChange}
                                options={userTypeOptions}
                                placeholder="Admin Type"
                            />
                        </FormGroup>
                        <Button className="whtBtn" tag={Link} to="/addNewUser">Add New User</Button>
                    </Form>
                </Col>
            </div>
    );
    }
}

export default SetUserRights;