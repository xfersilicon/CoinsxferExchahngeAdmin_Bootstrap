import React, { Component } from 'react';
import { Row, Col, Container, Jumbotron } from 'reactstrap';
import TotalUsers from "./TotalUsers";
import SellOrders from "./SellOrders";
import BuyOrders from "./BuyOrders";
import TotalRegisteredUsersTable from "../Tables/DashboardTables/TotalRegisteredUsersTable";
import MainHeader from "../MainHeader/MainHeader";

const Dashboard = (props) => {
    return (
        <div className="adminMod">
            <Jumbotron>
                <MainHeader/>
            </Jumbotron>
            <Row>
                {/*Add icons before each col text*/}
                <Col>Total Registered Users</Col>
                <Col>Sell Orders</Col>
                <Col>Buy Orders</Col>
            </Row>
        </div>
    );
};

export default Dashboard;