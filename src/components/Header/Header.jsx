import React, { Component, Fragment } from "react";
import { NavLink as RRNavLink, Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
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
                {/* <NavbarBrand tag={Link} to="/">Coinsxfer</NavbarBrand> */}
                <NavbarBrand tag={RRNavLink} to={this.props.childProps.isAuthenticated ? "/dashboard" : "/login"} className="headerLogo">
                    Hello Admin
                </NavbarBrand>

            </Navbar>
        );
    }
}

export default Header;