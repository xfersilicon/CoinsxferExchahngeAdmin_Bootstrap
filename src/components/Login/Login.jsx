/* Usage - User login screen*/
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import config from "../../config/config";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import LoaderButton from '../Utils/Loaders/LoaderButton';
import axios from "axios";
import qs from "qs";

// axios.defaults.withCredentials = true;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            clientId: '',
            otp: '',
            isLoading: false,
            showOtpInput: false,
            errorMsg: false,
        };

    }

    // Checking for Validation
    validateForm = () => {
        if (!this.state.showOtpInput) {
            return this.state.email.length > 0 && this.state.password.length > 0 && this.state.clientId.length > 0 ;
        } else {
            return this.state.otp.length;
        }
    }

    // Handle active input element
    handleChange = (e) => {
        e.target.classList.add('active');
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // Handle Loading State
    toggleLoadingState = (loaded) => {
        this.setState({
            isLoading: loaded
        })
    }

    // Handle Form Submission - User Login
    handleSubmit = (e) => {
        e.preventDefault();
        this.toggleLoadingState(true);

        if (this.state.showOtpInput) {
            this.fetchUserDetails().then(response => {
                //this.props.setCookie(response.data.accessToken);
                this.toggleLoadingState(false);
                this.saveUserInfoInSession(response.data);
            }).catch(error => {
                this.toggleLoadingState(false);
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx

                    console.log(">>>>>>>>>>> Response Headers >>>>>>>>>>>>>>>>");
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

                    if (error.response.data) {
                        toast.error(error.response.data.Message);
                    } else {
                        toast.error("Response not received from server");
                    }
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                    toast.error("Response not received from server");
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                    toast.error("Some Error Occcured in sending the request");
                }
            })
        } else {
            this.toggleLoadingState(true);
            this.validateLogin().then(response => {
                console.log(response)
                this.toggleLoadingState(false);
                this.setState({
                    showOtpInput: true,
                    authType: response.data
                });
            }).catch(error => {
                this.toggleLoadingState(false);
                this.setState({ showOtpInput: false });
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx

                    console.log(">>>>>>>>>>> Response Headers >>>>>>>>>>>>>>>>");
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

                    if (error.response.data) {
                        if (error.response.data.Message === "Email exist but not Verified.") {
                            toast.error(<div><p><span>{error.response.data.Message}</span><span> Click<Link to={config.routes.resend_confirmation_mail}> here</Link> to verify your email.</span></p></div>);
                        } else if(error.response.data.Message === "Client IP Not WhiteListed."){
                            toast.info("Your ip address is not whiltelisted to login. please whitelist your ipaddress from the email sent to you now.", {autoClose: false});
                        } else {
                            toast.error(error.response.data.Message);
                        }
                    } else {
                        toast.error("Response not received from server");
                    }
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                    toast.error("Response not received from server");
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                    toast.error("Some Error Occcured in sending the request");
                }
            })
        }
    };

    // Fetching User Details
    fetchUserDetails = () => {
        const { email, clientId, otp } = this.state;
        this.setState({ isLoading: true });
        const userInfoObj = {
            "Email": email,
            "ClientId": clientId,
            "Password": otp
        }
        return axios.post(`${config.user}/auth/GenerateToken`, qs.stringify(userInfoObj))
    }

    // Saving User Details
    saveUserInfoInSession = (data) => {
        sessionStorage.setItem('email', data['email']);
        sessionStorage.setItem('isAuthenticated', true );
        this.props.userHasAuthenticated(true);
    }

    // Generating OTP
    generateOTP = (e) => {
        e.preventDefault();

        let userObj = {
            "email": this.state.email
        };

        axios.post(`${config.user}/UserInternal/LoginSendOTP`, qs.stringify(userObj), {withCredentials:true})
            .then(res => {
                toast.success("OTP sent to your mobile number");
            }).catch(error => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx

                    console.log(">>>>>>>>>>> Response Headers >>>>>>>>>>>>>>>>");
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

                    if (error.response.data) {
                        toast.error(error.response.data.Message);
                    } else {
                        toast.error("Response not received from server");
                    }
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                    toast.error("Response not received from server");
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                    toast.error("Some Error Occcured in sending the request");
                }
            })
    }

    // Validating User Login
    validateLogin = () => {
        const { email, password, clientId } = this.state;

        const loginFormObj = {
            'Email': email.toLowerCase(),
            'Password': password,
            'ClientId': clientId
        }
        // console.log('====================================');
        // console.log(qs.stringify(loginFormObj));
        // console.log('====================================');
        
        return axios.post(`${config.user}/auth/ValidateUserCredentials`, qs.stringify(loginFormObj))
    }

    // Importing and rendering Login form component
    render() {

        const { email, password, clientId, otp, showOtpInput, authType } = this.state;
        return (
            <section>
                <div className="row loginPage">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto">
                        <div className="panel">
                            <div className="panel-body">
                                <h3 className="text-center">Login</h3>
                            </div>
                            <form name="LoginForm" autoComplete="off" onSubmit={this.handleSubmit} noValidate>
                                <div className="form-group">
                                    <label id="emailLabel" className="sr-only">Email</label>
                                    <input className="form-control"
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={this.handleChange}
                                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$"
                                        disabled={showOtpInput}
                                        required />
                                </div>
                                <div className="form-group">
                                    <label id="passwordLabel" className="sr-only">Password</label>
                                    <input className="form-control"
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={this.handleChange}
                                        disabled={showOtpInput}
                                        required />
                                </div>
                                <div className="form-group">
                                    <label id="clientIdLabel" className="sr-only">Client ID</label>
                                    <input className="form-control"
                                        type="text"
                                        name="clientId"
                                        id="clientId"
                                        maxLength="7"
                                        placeholder="Client ID"
                                        value={clientId}
                                        onChange={this.handleChange}
                                        disabled={showOtpInput}
                                        required />
                                </div>
                                {
                                    showOtpInput ?
                                        <Fragment>
                                            <div className="form-group">
                                                <label id="otpLabel" className="sr-only">OTP</label>
                                                
                                                        <Link to="" onClick={this.generateOTP}
                                                            id="resend_otp"
                                                        >
                                                            Resend OTP
                                                        </Link>
                                                  
                                                <input className="form-control"
                                                    type="tel"
                                                    name="otp"
                                                    id="otp"
                                                    placeholder='Enter SMS OTP'
                                                    value={otp.replace(/\D/g, "")}
                                                    maxLength="6"
                                                    onChange={this.handleChange}
                                                    required />
                                                <div className="error" id="otpError" />
                                            </div>
                                        </Fragment>
                                        : null
                                }

                                <div className="form-group text-center">
                                    <LoaderButton
                                        className="btn btn-primary custBtn2"
                                        size="md"
                                        disabled={!this.validateForm()}
                                        type="submit"
                                        id="loginBtn"
                                        isLoading={this.state.isLoading}
                                        text="Login"
                                        loadingText="Logging in…"
                                    />
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
                <ToastContainer hideProgressBar={true} />
            </section>
        );
    }
}

export default Login;