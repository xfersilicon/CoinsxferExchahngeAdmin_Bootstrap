import React, {Component} from 'react';
import Header from '../components/Header/Header';
import Sidebars from '../components/Sidebar/Sidebar';
import { Row, Col } from 'reactstrap';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header childProps={this.props.childProps}/>
                <Row>
                    <Col lg="2"><Sidebars/></Col>
                    <Col lg="10">Main Content</Col>
                </Row>
                {/* footer */}
            </div>
        )
    }
}
export default Layout;