import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Redirect, Link } from "react-router-dom";
import { fetchCustomersInfo } from "../../../Api/ApiCalls";
import config from '../../../config/config';


class CustomerManagementUsersTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            searchResultPageCount: null
        };
    }

    // async componentDidMount() {
    //     let response = await fetchCustomersInfo();
    //     this.setState({
    //         data: response
    //     })
    //     //console.log("ertyui");
    // }

    getData = async (state, instance) => {
        //console.log(state);
        this.setState({
            isLoading: false,
        });
       const url = `${config.user}` + config.urls.customerInfo;
        const paginationObj = {
            Skip: (state.page) * state.pageSize,
            Take: state.pageSize
        }
        let response = await fetchCustomersInfo(paginationObj);
        console.log(response);
        this.setState({
            data: response.data,
            searchResultPageCount: response.pageCount
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
                        accessor: "customeName",
                    },
                    {
                        Header: "Account Status",
                        accessor: "accountStatus"
                    },
                    {
                        Header: "Place",
                        accessor: "place"
                    },
                    {
                        Header: "Member Since",
                        accessor: "memberSince"
                    },
                    {
                        Header: "Tokens Traded",
                        accessor: "tokensTraded"
                    },
                    {
                        Header: "Address",
                        accessor: "address"
                    },
                    {
                        Header: "Mobile Number",
                        accessor: "mobileNumber"
                    },
                    {
                        Header: "Member Type",
                        accessor: "memberType"
                    },
                    {
                        Header: "KYC",
                        accessor: "kyc"
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
                onFetchData={this.getData}
                defaultPageSize={config.searchResultsPerPage}
                previousText='Prev'
                nextText='Next'
            />
        );
    }
}

export default CustomerManagementUsersTable;





