import React, { Component, Fragment } from "react";
import { NavLink as RRNavLink, Link } from "react-router-dom";
import {
    Navbar,
    NavbarBrand
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar className="headerContainer">
                <NavbarBrand tag={Link} to={this.props.childProps.isAuthenticated ? "/dashboard" : "/"} className="headerLogo">
                    Hello Admin
                </NavbarBrand>
                {/* {this.props.childProps.isAuthenticated && <NavbarBrand tag={Link} to={this.props.childProps.isAuthenticated ? "/dashboard" : "/"} >
                    <FontAwesomeIcon icon="user" size="sm" className="dashIcon" />
                </NavbarBrand>} */}
            </Navbar>
        );
    }
}

export default Header;