import React, { Component, Fragment } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import { Row, Col, Container } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Row>
                    {this.props.childProps.isAuthenticated && <Col lg="3">
                        <Sidebar/>
                    </Col>}
                    
                    <Col lg={this.props.childProps.isAuthenticated ? 9 : 12} id="page-wrap">
                        <Header childProps={this.props.childProps} />
                        <Container>
                            <ToastContainer/>
                            {this.props.children}
                        </Container>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}
export default Layout;