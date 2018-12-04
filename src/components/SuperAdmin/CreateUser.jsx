import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import MainHeader from "../MainHeader/MainHeader";
import Select from 'react-select';


const userTypeOptions = [
    { value: 'super admin', label: 'Super Admin' },
    { value: 'admin', label: 'Admin' }
];

export default class CreateUser extends React.Component {
    state = {
        userTypeSelectedOption: null
    }

    handleUserTypeChange = (userTypeSelectedOption) => {
        this.setState({ userTypeSelectedOption });
        ;
    }


    render() {
        const { userTypeSelectedOption } = this.state;

        return (
            <div className="adminMod">
                <MainHeader heading="create a user" subHeading="new user"/>
                <Col lg={4} style={{left: "35%"}}>
                    <Form className="searchTransaction">
                        <FormGroup>
                            <Label for="firstNameLabel" hidden>First Name</Label>
                            <Input type="text" name="firstName" id="firstName" placeholder="First Name"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastNameLabel" hidden>Last Name</Label>
                            <Input type="text" name="lastName" id="lastName" placeholder="Last Name"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="emailLabel" hidden>Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Email"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="passwordLabel" hidden>Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Password"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="rconfirmPasswordLabel" hidden>Confirm Password</Label>
                            <Input type="password" name="confirmPassword" id="confirmPassword"
                                   placeholder="Confirm Password"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="superAdminLabel" hidden>Super Admin</Label>
                            <Select
                                value={userTypeSelectedOption}
                                onChange={this.handleUserTypeChange}
                                options={userTypeOptions}
                                placeholder="Admin Type"
                            />
                        </FormGroup>
                        <Button className="whtBtn" tag={Link} to="/addNewUser">Add New User</Button>
                    </Form>
                </Col>
            </div>
        )
    }
};

