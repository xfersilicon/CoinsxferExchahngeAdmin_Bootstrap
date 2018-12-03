import React, { Fragment } from 'react';
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardLayout = (props) => {
  return (
      <Fragment>
          <Card style={{"borderColor":"rgb(40, 89, 168)", "margin": "30px", "min-width": "-webkit-fill-available"}}>
            <CardHeader className="tabHd"><FontAwesomeIcon icon={props.iconName} size="md"/> {props.Header}</CardHeader>
            <CardBody className="table-wrapper-scroll-y">
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
              {props.Body}
            </CardBody>
          </Card>
      </Fragment>
  );
};

export default CardLayout;