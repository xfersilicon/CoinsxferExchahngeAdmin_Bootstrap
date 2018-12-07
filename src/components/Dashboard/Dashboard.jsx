import React, { Component } from 'react';
import { Row, Col, Container, Jumbotron } from 'reactstrap';
import TotalUsers from "./TotalUsers";
import SellOrders from "./SellOrders";
import BuyOrders from "./BuyOrders";
import TotalRegisteredUsersTable from "../Tables/DashboardTables/TotalRegisteredUsersTable";
import MainHeader from "../MainHeader/MainHeader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchDashboardDetails } from "../../Api/ApiCalls";
import config from '../../config/config';

class Dashboard extends Component {
    state = {
        data: null,   
    }

    async componentDidMount() {
        let response = await fetchDashboardDetails();
        console.log(response);
        
        this.setState({
            data: response
        })
        //console.log("ertyui");
    }

    render() {
        const {data} = this.state;
        return (
            <div className="adminMod">
                    <MainHeader heading="dashboard" subHeading="users"/>
                <Row>
                    <Col lg={4}>
                        <div className="iconContent">
                            <FontAwesomeIcon icon="user" size="lg" className="dashIcon"/>
                        </div>
                        <h3>Total Registered Users</h3>
                        <p>{data && data.totalRegisterUsers}</p>
                    </Col>
                    <Col lg={4}>
                        <div className="iconContent">
                            <FontAwesomeIcon icon="arrow-right" size="lg" className="dashIcon"/>
                        </div>
                        <h3>Sell Orders</h3>
                        <p>{data && data.totalSellOrders}</p>
                    </Col>
                    <Col lg={4}>
                        <div className="iconContent">
                            <FontAwesomeIcon icon="arrow-left" size="lg" className="dashIcon"/>
                        </div>
                        <h3>Buy Orders</h3>
                        <p>{data && data.totalBuyOrders}</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;