import React, {Component, Fragment} from "react";
import { slide as Menu } from "react-burger-menu";
import Collapsible from 'react-collapsible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Collapse } from 'reactstrap';
// import { ListGroup, ListGroupItem, Collapse, Button, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';

const mql = window.matchMedia(`(min-width: 800px)`);

var tree = [
    {
        text: "Dashboard"
    },
    {
        text: "Customers Info"
    },
    {
        text: "Advanced Search"
    },

    {
        text: "Super Admin",
        nodes: [
            {
                text: "Create a user",
            },
            {
                text: "Set user rights"
            }
        ]
    },

    {
        text: "Commissions Settings",
    },

    {
        text: "Transfers",
        nodes: [
            {
                text: "Withdrawals",
            },
            {
                text: "Deposits"
            }
        ]
    },

    {
        text: "Fiat Wallet"
    },
];

export default class Sidebar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			mql: mql,
			menuIsOpen: false //Menu bugs out if set to true initial on push mode
		}
		this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.toggle = this.toggle.bind(this);
	}

    toggle = event => {
        const id = event.currentTarget.getAttribute('id');
        this.setState(state => ({ [id]: !state[id] }));
    }
    mapper = (nodes, parentId, lvl) => {
        return nodes.map((node, index) => {
            const id = `${node.text}-${parentId ? parentId : 'top'}`.replace(/[^a-zA-Z0-9-_]/g, '');
            const item = <React.Fragment>
                            <ListGroupItem style={{ zIndex: 0 }} className={`${parentId ? `rounded-0 ${lvl ? 'border-bottom-0' : ''}` : ''}`} id={id} onClick={this.toggle}>
                                {
                                    <div style={{ paddingLeft: `${25 * lvl}px` }}>
                                        {node.text}
                                        {/*{node.nodes && <div style={{ float: 'right' }} >{this.state[id] ? <i className="fa fa-caret-up"></i> : <i className="fa fa-caret-down"></i>}</div>}*/}
                                        {node.nodes && <Button style={{ float: 'right' }} color="link" >{this.state[id] ? <i className="fa fa-caret-up"></i> : <i className="fa fa-caret-down"></i>}</Button>}
                                    </div>
                                }
                            </ListGroupItem>
                            {
                                node.nodes &&
                                    <Collapse isOpen={this.state[id]}>
                                        {this.mapper(node.nodes, id, (lvl || 0) + 1)}
                                    </Collapse>}
                            </React.Fragment>

            return item;
        });
    }

	componentDidMount() {
		//Using componentDidMount because the menu bugs if setting isOpen = true before mounted
		this.setState({ mql: mql, menuIsOpen: this.state.mql.matches });
	}

	componentWillMount() {
		mql.addListener(this.mediaQueryChanged);
	}

	componentWillUnmount() {
		this.state.mql.removeListener(this.mediaQueryChanged);
	}

	mediaQueryChanged() {
		console.log("width below 800px", !this.state.mql.matches);
		this.setState({ menuIsOpen: this.state.mql.matches });
	}
	render(props) {
		return (
                <Menu isOpen={this.state.menuIsOpen} noOverlay
                      disableCloseOnEsc disableOverlayClick={true}>
                    <img src={`${process.env.PUBLIC_URL}/assets/side-logo-light.png`} alt="logoImage"/>
                    <ListGroup>
                        {this.mapper(tree)}
                    </ListGroup>
                </Menu>
		);
	}
}