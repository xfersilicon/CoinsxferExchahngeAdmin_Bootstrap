import React, {Component} from "react";
import { slide as Menu } from "react-burger-menu";

const mql = window.matchMedia(`(min-width: 800px)`);

export default class Sidebar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			mql: mql,
			menuIsOpen: false //Menu bugs out if set to true initial on push mode
		}
		this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
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
			<div id="outer-container">
				{/* Probably better off using your own button for menu open with this method (customBurgerIcon={false}) */}
				<Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} isOpen={this.state.menuIsOpen} noOverlay
                    disableCloseOnEsc disableOverlayClick={true}> 
					<a id="home" className="menu-item" href="/">Home</a>
					<a id="about" className="menu-item" href="/about">About</a>
					<a id="contact" className="menu-item" href="/contact">Contact</a>
					<a className="menu-item--small" href="">Settings</a>
				</Menu>
			</div>
		);
	}
}