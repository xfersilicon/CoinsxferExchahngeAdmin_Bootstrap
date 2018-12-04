import React, { Component } from 'react';
import Routes from './routes/index';
import Layout from "./layouts/Layout";
import {withRouter} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faArrowLeft, faArrowRight, faUserEdit, faStickyNote, faPrint, faAddressCard} from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(faUser, faArrowLeft, faArrowRight, faUserEdit, faStickyNote, faPrint, faAddressCard);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isAuthenticated: true
    };
  }

  userHasAuthenticated = (authenticated) => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = event => {
    this.userHasAuthenticated(false);
    sessionStorage.clear();
}

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      handleLogout: this.handleLogout
    };

    return (
        <Layout childProps={childProps}>
            <Routes childProps={childProps} />
        </Layout>
    );
  }
}

export default withRouter(App);
