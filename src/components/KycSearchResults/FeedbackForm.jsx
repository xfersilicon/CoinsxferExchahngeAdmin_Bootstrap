import React, { Fragment }  from 'react';
import { Col, Row, Jumbotron, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {Redirect, Link} from "react-router-dom";
import Select from 'react-select';



const complaintTypeOptions = [
    { value: 'All Looks Good', label: 'All Looks Good'},
    { value: 'Photo is not clear', label: 'Photo is not clear' },
    { value: 'Name is not clear', label: 'Name is not clear' },
    { value: 'Pan number is not clear', label: 'Pan number is not clear' },
    { value: 'Wrong scanning type', label: 'Wrong scanning type' }
];



class FeedbackForm extends React.Component {
    state = {
        selectedComplaintType: null
    }

    handleComplaintTypeChange = (selectedComplaintType) => {
        this.setState({ selectedComplaintType });
    }

    render() {
        const { selectedComplaintType} = this.state;
        return (
            <Fragment>
                <Form className="searchTransaction">
                    <FormGroup row>
                        <Col lg="12">
                            <Label for="coinPairLabel">Complaint Type</Label>
                        </Col>
                        <Col lg="12">
                            <Select
                                label= "Complaint Type"
                                value={selectedComplaintType}
                                onChange={this.handleComplaintTypeChange}
                                options={complaintTypeOptions}
                                placeholder="Select Complaint Type"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label for="commnetsLabel">Comments</Label>
                        <Input type="textarea" name="commnets" id="commnets" placeholder="" />
                    </FormGroup>
                    <FormGroup check inline>
                        <Label check>
                            <Input type="checkbox" /> Approve
                        </Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Label check>
                            <Input type="checkbox" /> Complain
                        </Label>
                    </FormGroup>
                </Form>
            </Fragment>
        );
    }
}

export default FeedbackForm;





