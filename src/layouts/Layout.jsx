import React, { Component, Fragment } from 'react';
import Header from '../components/Header/Header';
import Sidebars from '../components/Sidebar/Sidebar';
import Dashboard from '../components/Dashboard/Dashboard';
import { Row, Col, Container } from 'reactstrap';
import CustomersInfo from '../components/CustomersInfo/CustomersInfo';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Row>
                    <Col lg="3">
                        <Sidebars/>
                    </Col>
                    <Col lg="9" id="page-wrap">
                        <Header childProps={this.props.childProps} />
                        <Container>
                            {this.props.children}
                        </Container>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}
export default Layout;