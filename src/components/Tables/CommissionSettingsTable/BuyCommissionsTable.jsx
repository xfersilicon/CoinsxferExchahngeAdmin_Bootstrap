import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Redirect, Link } from "react-router-dom";

import { makeData } from "../../../Utils";
import { fetchBuyCommissionSettings } from '../../../Api/ApiCalls';

class BuyCommissionsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            searchResultPageCount: null
        };
    }

    // getData = async (state, instance) => {
    //     //console.log(state);
    //     this.setState({
    //         isLoading: false,
    //     });
    //    const url = `${config.user}` + config.urls.buyCommissionSettings;
    //     const paginationObj = {
    //         Skip: (state.page) * state.pageSize,
    //         Take: state.pageSize
    //     }
    //     let response = await fetchBuyCommissionSettings(paginationObj);
    //     console.log(response);
    //     this.setState({
    //         data: response.data,
    //         searchResultPageCount: response.pageCount
    //     })
    // }

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
                        Header: "Coin Type",
                        accessor: "Coin",
                    },
                    {
                        Header: "From Date",
                        accessor: "TimeStamp",
                        Cell: this.renderEditable
                    },
                    {
                        Header: "To Date",
                        accessor: "TimeStamp",
                        Cell: this.renderEditable
                    },
                    {
                        Header: "Commission",
                        accessor: "Price",
                        Cell: this.renderInput
                    },
                    {
                        Header: "Volume",
                        accessor: "Volume",
                        Cell: this.renderInput
                    },
                    {
                        Header: "Default Commission",
                        accessor: "Price"
                    },
                    {
                        Header: "Confirmation",
                        accessor: "Type"
                    },
                ]}
                defaultPageSize={10}  //access this value from config file
                className="-striped -highlight"
                sortable={false}
            />
        );
    }
}

export default BuyCommissionsTable;