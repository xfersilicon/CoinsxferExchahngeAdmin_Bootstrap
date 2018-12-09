import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import MainHeader from "../MainHeader/MainHeader";
import { updateTransactionHash } from '../../Api/ApiCalls';

export default class TransactionHash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transactionId: '',
            transactionHash: '',
        }
    }

    
    handleSubmit = async (e) => {
        e.preventDefault();
        const transactionObj = {
            'transactionId': this.state.transactionId,
            'transactionHash': this.state.transactionHash
        }
        let response = await updateTransactionHash();
        console.log(response)
        
    };

    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        });
    }

    render() {
        const { transactionId, transactionHash } = this.state;

        return (
            <div className="adminMod">
                <MainHeader heading="Transaction Hash" subHeading="update"/>
                <Col lg={4} style={{left: "35%"}}>
                    <Form onSubmit={this.handleSubmit} autoComplete="off" noValidate className="searchTransaction">
                        <FormGroup>
                            <Label for="transactionIdLabel" hidden>Transaction Id</Label>
                            <Input type="text" name="transactionId" id="transactionId" placeholder="Transaction Id" value={transactionId} onChange={this.handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="transactionHashLabel" hidden>Transaction Hash</Label>
                            <Input type="text" name="transactionHash" id="transactionHash" placeholder="Transaction Hash" value={transactionHash} onChange={this.handleInputChange}/>
                        </FormGroup>
                        <Button type="submit" className="whtBtn">Submit</Button>
                    </Form>
                </Col>
            </div>
        )
    }
};

