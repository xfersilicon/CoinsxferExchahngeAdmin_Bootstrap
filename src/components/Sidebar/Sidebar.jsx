import React from "react";
import Sidebar from "react-sidebar";
 
const mql = window.matchMedia(`(min-width: 800px)`);
 
class Sidebars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };
 
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }
 
  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }
 
  render() {
    return (
      <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
      >
        <b>Main content</b>
      </Sidebar>
    );
  }
}
 
export default Sidebars;

// import { stack as Menu } from 'react-burger-menu';
// import React, { Fragment } from 'react';
 
// class Sidebar extends React.Component {
//   showSettings (event) {
//     event.preventDefault();
//   }
 
//   render () {
//     return (
//       <Menu width={ 200 } isOpen={false} noOverlay disableCloseOnEsc >
//         <a id="home" className="menu-item" href="/">Home</a>
//         <a id="about" className="menu-item" href="/about">About</a>
//         <a id="contact" className="menu-item" href="/contact">Contact</a>
//         <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
//       </Menu>
//     );
//   }
// }

// export default Sidebar;

// import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';
// import { Nav, NavItem, NavLink } from 'reactstrap';
// import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// const Sidebar = () => {
//     return (
//         <Fragment>
//             {/* <UncontrolledDropdown>
//                 <DropdownToggle caret>
//                     Dropdown
//                 </DropdownToggle>
//                 <DropdownMenu>
//                     <DropdownItem header>Header</DropdownItem>
//                     <DropdownItem disabled>Action</DropdownItem>
//                     <DropdownItem>Another Action</DropdownItem>
//                     <DropdownItem divider />
//                     <DropdownItem>Another Action</DropdownItem>
//                 </DropdownMenu>
//             </UncontrolledDropdown> */}
//             <Nav vertical>
//                 <NavItem>
//                     <NavLink href="#">Link</NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink href="#">Link</NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink href="#">Another Link</NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink disabled href="#">Disabled Link</NavLink>
//                 </NavItem>
//             </Nav>


//             {/* <ul className="sidebar-nav">
//                 <li>
//                     <Link to="">
//                         Dashboard
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="">
//                         Start Bootstrap
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="">
//                         Start Bootstrap
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="">
//                         Start Bootstrap
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="">
//                         Start Bootstrap
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="">
//                         Start Bootstrap
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="">
//                         Start Bootstrap
//                     </Link>
//                 </li>
//             </ul> */}
//         </Fragment>
//     )
// }

// export default Sidebar;