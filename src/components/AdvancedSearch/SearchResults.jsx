import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Jumbotron } from 'reactstrap';
import MainHeader from "../MainHeader/MainHeader";
import SearchResultsTable from '../Tables/AdvancedSearch/SearchResultsTable';
import CardLayout from '../../layouts/cardLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';
import ReactToPrint from "react-to-print";
import config from '../../config/config';

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
        const { selectedFileType } = this.state;
        return (
            <div className="adminMod">
                <MainHeader heading="search results" subHeading="results"/>
                <CardLayout Header={this.props.state.selectedTransactionType.value+" Transactions ("+ this.props.state.selectedCoinPair.value+")"} iconName="sticky-note" Body={<SearchResultsTable searchData={this.props.state} selectedFileType={selectedFileType} ref={el => (this.componentRef = el)}/>} />
                <Col lg={6} style={{left: "25%", marginTop: "30px"}}>
                    <Form className="searchTransaction">
                        <FormGroup row>
                            <Col lg="12">
                                <Label for="fileTypeLabel">File Type</Label>
                            </Col>
                            <Col lg="12">
                                <Select
                                    value={selectedFileType}
                                    onChange={this.handleFileTypeChange}
                                    options={config.fileTypeOptions}
                                    placeholder="Select file type"
                                />
                            </Col>
                        </FormGroup>
                        <div>
                        <ReactToPrint trigger={() => <Button className="whtBtn"><FontAwesomeIcon icon="print" size="md"/> Print</Button>} content={() => this.componentRef} />
                            <Button className="whtBtn" onClick={this.props.showSearchResults}><FontAwesomeIcon icon="print" size="md"/> Search Again</Button>
                        </div>
                    </Form>
                </Col>
            </div>
        )
    }
}

export default SearchResults;