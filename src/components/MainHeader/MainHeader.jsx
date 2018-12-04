import React, { Component } from 'react';
import {Jumbotron} from 'reactstrap';
// import { Row, Col, Container } from 'reactstrap';

const MainHeader = (props) => {
    return (
        <div className="mainHeader text-uppercase">
            <Jumbotron>
                <h1>{props.heading}</h1>
                <div className="hdSub hdLong d-flex justify-content-center"><span>{props.subHeading}</span></div>
            </Jumbotron>
        </div>
    )
}

export default MainHeader;