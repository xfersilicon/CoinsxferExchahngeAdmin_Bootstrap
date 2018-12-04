import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {Redirect, Link} from "react-router-dom";
import { makeData } from "../../../Utils";


class CustomerManagementUsersTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: makeData()
      };
    }

    render() {
      const { data } = this.state;
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
                            defaultPageSize={10} //access this value from config file
                            className="-striped -highlight"
                            sortable={false}
                            />
        );
    }
}

export default CustomerManagementUsersTable;





