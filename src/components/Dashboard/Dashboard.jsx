import React, { Component } from 'react';
import { Row, Col, Container, Jumbotron } from 'reactstrap';
import TotalUsers from "./TotalUsers";
import SellOrders from "./SellOrders";
import BuyOrders from "./BuyOrders";
import TotalRegisteredUsersTable from "../Tables/DashboardTables/TotalRegisteredUsersTable";
import MainHeader from "../MainHeader/MainHeader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Dashboard extends Component {
    render() {
        return (
            <div className="adminMod">
                    <MainHeader heading="dashboard" subHeading="users"/>
                <Row>
                    <Col lg={4}>
                        <div className="iconContent">
                            <FontAwesomeIcon icon="user" size="lg" className="dashIcon"/>
                        </div>
                        <h3>Total Registered Users</h3>
                        <p>43Users</p>
                    </Col>
                    <Col lg={4}>
                        <div className="iconContent">
                            <FontAwesomeIcon icon="arrow-right" size="lg" className="dashIcon"/>
                        </div>
                        <h3>Sell Orders</h3>
                        <p><span>62</span>Users</p>
                    </Col>
                    <Col lg={4}>
                        <div className="iconContent">
                            <FontAwesomeIcon icon="arrow-left" size="lg" className="dashIcon"/>
                        </div>
                        <h3>Buy Orders</h3>
                        <p><span>58</span>Users</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;