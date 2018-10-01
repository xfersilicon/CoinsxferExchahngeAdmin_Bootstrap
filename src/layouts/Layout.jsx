import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import { Row, Col } from 'reactstrap';

class Layout extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs="2 " sm="4" md="4" lg="2"><Sidebar/></Col>
                    <Col xs="10 " sm="8" md="8" lg="10" id="page-wrap">
                        <Row><Header childProps={this.props.childProps} /></Row>
                        <Row>Main Content</Row>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Layout;