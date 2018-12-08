import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import MainHeader from "../MainHeader/MainHeader";
import Select from 'react-select';


const adminTypeOptions = [
    { value: 'super admin', label: 'Super Admin' },
    { value: 'admin', label: 'Admin' }
];

export default class CreateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            adminType: null,
        }
    }

    handleAdminTypeChange = (adminType) => {
        this.setState({ adminType });
        ;
    }

    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        });
    }

    render() {
        const { firstName, lastName, email, password, confirmPassword, adminType } = this.state;

        return (
            <div className="adminMod">
                <MainHeader heading="create a user" subHeading="new user"/>
                <Col lg={4} style={{left: "35%"}}>
                    <Form className="searchTransaction">
                        <FormGroup>
                            <Label for="firstNameLabel" hidden>First Name</Label>
                            <Input type="text" name="firstName" id="firstName" placeholder="First Name" value={firstName} onChange={this.handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastNameLabel" hidden>Last Name</Label>
                            <Input type="text" name="lastName" id="lastName" placeholder="Last Name" value={lastName} onChange={this.handleInputChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="emailLabel" hidden>Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Email" value={email} onChange={this.handleInputChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="passwordLabel" hidden>Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Password" value={password} onChange={this.handleInputChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="confirmPasswordLabel" hidden>Confirm Password</Label>
                            <Input type="password" name="confirmPassword" id="confirmPassword"
                                   placeholder="Confirm Password" value={confirmPassword} onChange={this.handleInputChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="superAdminLabel" hidden>Super Admin</Label>
                            <Select
                                value={adminType}
                                onChange={this.handleAdminTypeChange}
                                options={adminTypeOptions}
                                placeholder="Admin Type"
                            />
                        </FormGroup>
                        {/* ********add functionality here - Onclick of add new user show a modal dialogue box with confirm and cancel buttons and display after user clciks confirm************ */}
                        <Button className="whtBtn">Add New User</Button>
                    </Form>
                </Col>
            </div>
        )
    }
};

