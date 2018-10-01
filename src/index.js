import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/jquery/dist/jquery.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();