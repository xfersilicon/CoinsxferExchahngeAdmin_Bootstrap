import React, { Component } from 'react';
import Routes from './routes/index';
import { withCookies, Cookies } from 'react-cookie';
import Layout from "./layouts/Layout";
import {withRouter} from 'react-router-dom';
import compose from 'compose-function';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faArrowLeft, faArrowRight, faUserEdit, faStickyNote, faPrint, faAddressCard} from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(faUser, faArrowLeft, faArrowRight, faUserEdit, faStickyNote, faPrint, faAddressCard);

class App extends Component {
  constructor(props) {
    super(props);

    const { cookies } = props;

    this.state = {
        isAuthenticated: true,
        SessionID: cookies.get('SessionID') || null
    };
  }

  setCookie = (token) => {
    const { cookies } = this.props;
    cookies.set('SessionID', token, { path: '/' });
    this.setState({
        SessionID: token
    })

    console.log('====================================');
    console.log("Cookies:", cookies.get('SessionID'));
    console.log('====================================');
}

  userHasAuthenticated = (authenticated) => {
    this.setState({ isAuthenticated: authenticated });
  }

//   handleLogout = event => {
//     event.preventDefault();

//     this.userLoggingOut(true);
//     this.setState({
//         isLoggingOut : true
//     })

//     let logoutFormObj = {
//         "email": sessionStorage.getItem('email')
//     }
    
//     axios.post(`${config.user}/UserInternal/LogOutUser`, qs.stringify(logoutFormObj), {withCredentials:true})
//         .then(res => {
//             const { cookies } = this.props;
//             this.userHasAuthenticated(false);
//             this.userLoggingOut(false);
//             sessionStorage.clear();
//             cookies.remove('SessionID', {path: '/'});
//             this.props.history.push("/login");
//         }).catch(error => {
//                 this.userLoggingOut(false);
//                 // return error.response;
//                 if (error.response) {
//                     // The request was made and the server responded with a status code
//                     // that falls out of the range of 2xx
//                     console.log(">>>>>>>>>>> Response Headers >>>>>>>>>>>>>>>>");
//                     console.log(error.response.data);
//                     console.log(error.response.status);
//                     console.log(error.response.headers);
//                     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

//                     if(error.response.data){
//                         toast.error(error.response.data.Message);
//                     } else {
//                         toast.error("Response not received from server");
//                     }
//                 } else if (error.request) {
//                     // The request was made but no response was received
//                     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//                     // http.ClientRequest in node.js
//                     console.log(error.request);
//                     toast.error("Response not received from server")
//                 } else {
//                     // Something happened in setting up the request that triggered an Error
//                     console.log('Error', error.message);
//                     toast.error('Some Error Occcured in sending the request');
//                 }
//                 console.log(error.config);
//         })
// }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      handleLogout: this.handleLogout,
      userHasAuthenticated: this.userHasAuthenticated,
      setCookie: this.setCookie
    };

    return (
        <Layout childProps={childProps}>
            <Routes childProps={childProps} />
        </Layout>
    );
  }
}

export default compose(withRouter, withCookies)(App);