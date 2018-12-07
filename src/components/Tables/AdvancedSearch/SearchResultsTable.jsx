import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Redirect, Link } from "react-router-dom";
import { fetchAdvancedSearch } from "../../../Api/ApiCalls";
import config from '../../../config/config';
import { makeData } from "../../../Utils";

class SearchResultsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pageCount: '',
            isLoading: true
        };
    }

    getData = async (state, instance) => {
        console.log(this.props.searchData);
        this.setState({
            isLoading: true,
        });
        const paginationObj = {
            CoinPair: this.props.searchData.selectedCoinPair.value,
            TransactionType: this.props.searchData.selectedTransactionType.value,
            FromDate: this.props.searchData.fromDate, 
            ToDate: this.props.searchData.toDate, 
            MinimumTransactionValue: this.props.searchData.minTrans, 
            MaximumTransactionValue: this.props.searchData.maxTrans, 
            Skip: (state.page) * state.pageSize,
            Take: state.pageSize
        }
        let response = await fetchAdvancedSearch(paginationObj);
        console.log(response);
        this.setState({
            isLoading: false,
            data: response.data,
            pageCount: response.pageCount
        });
    }

    render() {
        const { data, pageCount, isLoading } = this.state;
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
                        accessor: "coinPair",
                    },
                    {
                        Header: "Date",
                        accessor: "transactionDate"
                    },
                    {
                        Header: "Volume",
                        accessor: "transactionVolume"
                    },
                    {
                        Header: "Price",
                        accessor: "transactionPrice"
                    },
                    {
                        Header: "Commission",
                        accessor: "Price"
                    },
                    {
                        Header: "Confirmation",
                        accessor: "transactionStatus"
                    }
                ]}
                className="-striped -highlight"
                sortable={false}
                manual
                data={data}
                noDataText="There are no results to display."
                pages={pageCount}
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

export default SearchResultsTable;