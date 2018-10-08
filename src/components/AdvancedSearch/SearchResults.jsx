import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Jumbotron } from 'reactstrap';
import MainHeader from "../MainHeader/MainHeader";
import SearchResultsTable from '../Tables/AdvancedSearch/SearchResultsTable';
import CardLayout from '../../layouts/cardLayout';
import Select from 'react-select';

const fileTypeOptions = [
    { value: 'pdf', label: 'PDF' },
    { value: 'doc', label: 'JPEG' }
]


class SearchResults extends Component {
    state = {
        selectedFileType: null
    }

    handleFileTypeChange = (selectedFileType) => {
        this.setState({ selectedFileType });
    }

    render() {
        const { selectedTransactionType, selectedCoinPair, selectedFileType } = this.state;
        return (
            <div className="adminMod">
                <MainHeader heading="search results" subHeading="results"/>

                {/* Place Icons before cardHeader text  */}
                <CardLayout Header="Transactions" Body={<SearchResultsTable />} />
                <Col lg={6} style={{left: "25%", marginTop: "30px"}}>
                    <Form className="searchTransaction">
                        <FormGroup row>
                            <Col lg="12">
                                <Label for="fileTypeLabel">File Type</Label>
                            </Col>
                            {/* Align drop down values to left  */}
                            <Col lg="12">
                                <Select
                                    value={selectedFileType}
                                    onChange={this.handleFileTypeChange}
                                    options={fileTypeOptions}
                                    placeholder="Select file type"
                                />
                            </Col>
                        </FormGroup>
                        <div>
                            {/* Place Icons before button text */}
                            <Button className="whtBtn">Print</Button>
                            <Button className="whtBtn">Search Again</Button>
                        </div>
                    </Form>
                </Col>
            </div>
        )
    }
}

export default SearchResults;