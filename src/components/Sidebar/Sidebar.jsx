import React, {Component, Fragment} from "react";
import { slide as Menu } from "react-burger-menu";
import Collapsible from 'react-collapsible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Collapse, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import _ from 'lodash';
// import { ListGroup, ListGroupItem, Collapse, Button, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';

const mql = window.matchMedia(`(min-width: 800px)`);

var tree = [
    {
        text: "dashboard"
    },
    {
        text: "customers info"
    },
    {
        text: "advanced search"
    },

    // {
    //     text: "super admin",
    //     nodes: [
    //         {
    //             text: "create user",
    //         },
    //         {
    //             text: "set user rights"
    //         }
    //     ]
    // },

    {
        text: "commissions settings",
    },

    {
        text: "transfers",
        nodes: [
            {
                text: "withdrawals",
            },
            {
                text: "deposits"
            }
        ]
    },
    //NOTE: Do not remove the code. This is planned for next stage of development. So commented as of now. Please uncomment it during development 
    // {
    //     text: "fiat wallet"
    // },
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
        //console.log(event.currentTarget.tagName);
        if(event.currentTarget.tagName === 'LI') {
            const id = event.currentTarget.getAttribute('id');
            this.setState(state => ({ [id]: !state[id] }));
        }  
    }
    mapper = (nodes, parentId, lvl) => {
        return nodes.map((node, index) => {
            const id = `${node.text}-${parentId ? parentId : 'top'}`.replace(/[^a-zA-Z0-9-_]/g, '');
            const item = <React.Fragment>
                            <ListGroupItem style={{ zIndex: 0 }} to={node.nodes ? '' : `/${_.camelCase(node.text)}`} 
                                tag={node.nodes ? ListGroupItem : Link}
                                //tag={ListGroupItem}
                                className={`${parentId ? `rounded-0 ${lvl ? 'border-bottom-0' : ''}` : ''}`} id={id} onClick={this.toggle}>
                                {
                                    <div style={{ paddingLeft: `${25 * lvl}px`, textTransform: 'capitalize' }}>
                                        {_.upperCase(node.text)}
                                        {node.nodes && <div style={{ float: 'right' }} >{this.state[id] ? <i className="fa fa-caret-up"></i> : <i className="fa fa-caret-down"></i>}</div>}
                                        {/* {node.nodes && <Button style={{ float: 'right' }} color="link" >{this.state[id] ? <i className="fa fa-caret-up"></i> : <i className="fa fa-caret-down"></i>}</Button>} */}
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
		    <Fragment>
                <Menu isOpen={this.state.menuIsOpen} noOverlay
                      disableCloseOnEsc disableOverlayClick={true} >
                    <img src={`${process.env.PUBLIC_URL}/assets/side-logo-light.png`} alt="logoImage"/>
                    <ListGroup>
                        {this.mapper(tree)}
                    </ListGroup>
                </Menu>
            </Fragment>
		);
	}
}