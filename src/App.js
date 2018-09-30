import React, { Component } from 'react';
import Routes from './routes/index';
import Layout from "./layouts/Layout";
import {withRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Layout>
            <Routes/>
        </Layout>
    );
  }
}

export default withRouter(App);
