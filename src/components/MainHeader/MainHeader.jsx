import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';

const MainHeader = (props) => {
    return (
        <div className="mainHeader text-uppercase">
            <h1><span>Dashboard</span></h1>
            <div className="hdSub hdLong d-flex justify-content-center">
                <span>top statistics</span>
            </div>
        </div>
    );
};

export default MainHeader;