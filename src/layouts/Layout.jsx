import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Sidebars from '../components/Sidebar/Sidebar';
import Dashboard from '../components/Dashboard/Dashboard';
import { Row, Col, Container } from 'reactstrap';

class Layout extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col lg="2"><Sidebars/></Col>
                    <Col xs="12" sm="12" md="12" lg="10" id="page-wrap">
                        <Header childProps={this.props.childProps} />
                        <Container>
                            <Dashboard />
                        </Container>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Layout;