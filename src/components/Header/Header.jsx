import React, { Component, Fragment } from "react";
import { NavLink as RRNavLink, Link } from "react-router-dom";
//import { Nav, Navbar, NavItem } from "react-bootstrap";
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
            <Navbar color="white" light className="headerContainer">
                {/* <NavbarBrand tag={Link} to="/">Coinsxfer</NavbarBrand> */}
                {/* <NavbarToggler onClick={this.toggle} /> */}
                <NavbarBrand tag={RRNavLink} to={this.props.childProps.isAuthenticated ? "/dashboard" : "/login"} className="headerLogo">
                    Hello Admin
                </NavbarBrand>

                {/* <Collapse isOpen={this.state.isOpen} navbar>
                    {this.props.childProps.isAuthenticated ?
                        <Nav className="ml-auto" navbar>
                            
                            
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret style={{ color: '#2b59a8' }}>
                                    <i className="fa fa-user"></i>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem tag="a">
                                        <NavItem>
                                            <NavLink onClick={this.props.childProps.handleLogout} to="/login" tag={RRNavLink}>Logout</NavLink>
                                            
                                        </NavItem>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        :
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink activeClassName='active' tag={RRNavLink} to="/login" className="text-uppercase">login</NavLink>
                            </NavItem>
                        </Nav>
                    }
                </Collapse> */}
            </Navbar>
        );
    }
}

export default Header;