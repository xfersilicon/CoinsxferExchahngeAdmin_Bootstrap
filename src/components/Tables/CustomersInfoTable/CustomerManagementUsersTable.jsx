import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Redirect, Link } from "react-router-dom";
import { fetchPostData } from "../../../Api/ApiCalls";
import config from '../../../config/config';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import axios from 'axios';



class CustomerManagementUsersTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            searchResultPageCount: null,
        };
    }

    componentDidMount() {
        this.fetchCustomerInfoData();
        //let response = await fetchPostData(url, null);
        // this.setState({
        //     data: response.data
        // })
        //console.log("ertyui");
    }

    // fetchAdvancedSearchResults = (state, url) => {
    //     this.setState({ isLoading: true})
    //     const formData = new URLSearchParams();

    //     // formData.append('email', sessionStorage.getItem('email'));
    //     formData.append('Skip', (state.page) * state.pageSize);
    //     formData.append('Take', state.pageSize);

    //     axios.post(fetchPostData(null, null, 'url'), formData, {withCredentials: true})
    //         .then(res => {
    //             this.setState({
    //                 data: res.data.data,
    //                 //data: [...this.state.data, ...res.data.btc, ...res.data.eth, ...res.data.xrp, ...res.data.usd],
    //                 searchResultPageCount: res.data.pageCount,
    //                 isLoading: false
    //             })
    //         })
    //         .catch(error => {
    //             this.setState({
    //                 isLoading: false
    //             })
    //             toast.error(error.response.data.Message);
    //         })
    // }

    fetchCustomerInfoData = (state, instance) => {
        //console.log(state);
        this.setState({
            isLoading: true,
        });

        const url = `${config.user}` + config.urls.customerInfo;

        const paginationObj = {
            Skip: (state.page) * state.pageSize,
            Take: state.pageSize
        }

        this.fetchPostData(url, paginationObj).then(res => {
            console.log(res);
            this.setState({
                data: res,
                searchResultPageCount: res.data.pageCount
            })
        }).catch(err => {
            this.setState({
                isLoading: false
            })
            toast.error(err.response.data.message);
        })
    }

    render() {
        const { data, isLoading, searchResultPageCount } = this.state;
        return (
            <ReactTable
                data={data}
                style={{
                    lineHeight: "0.8em",
                    textAlign: "center",
                    border: "none"
                }}

                //change to styles to css file wherever react-table is used
                getTheadProps={() => {
                    return {
                        style: {
                            fontWeight: "bold",
                            //whiteSpace: "wrap"
                        }
                    }
                }}
                getTheadThProps={() => {
                    return {
                        style: {
                            whiteSpace: "normal",
                            verticalAlign: 'bottom',
                            borderBottom: '2px solid #ddd'
                        }
                    }
                }}

                //until above line

                columns={[
                    {
                        Header: "Customer Name",
                        accessor: "TimeStamp",
                    },
                    {
                        Header: "Account Status",
                        accessor: "Coin"
                    },
                    {
                        Header: "Place",
                        accessor: "Volume"
                    },
                    {
                        Header: "Member Since",
                        accessor: "Token"
                    },
                    {
                        Header: "Tokens Traded",
                        accessor: "Price"
                    },
                    {
                        Header: "Address",
                        accessor: "Total"
                    },
                    {
                        Header: "Mobile Number",
                        accessor: "Volume"
                    },
                    {
                        Header: "Member Type",
                        accessor: "Token"
                    },
                    {
                        Header: "KYC",
                        accessor: "Price"
                    },
                    {
                        Header: "Edit",
                        accessor: "Volume",
                        Cell: row => (
                            <Link to="/kycSearchResults">
                                <FontAwesomeIcon icon="user-edit" size="lg" />
                            </Link>
                        )
                    },
                ]}
                //defaultPageSize={10} //access this value from config file
                className="-striped -highlight"
                sortable={false}
                manual
                data={data}
                noDataText="There are no results to display."
                pages={searchResultPageCount}
                loading={isLoading}
                sortable={false}
                onFetchData={this.fetchCustomerInfoData}
                defaultPageSize={config.searchResultsPerPage}
                previousText='Prev'
                nextText='Next'
            />
        );
    }
}

export default CustomerManagementUsersTable;





