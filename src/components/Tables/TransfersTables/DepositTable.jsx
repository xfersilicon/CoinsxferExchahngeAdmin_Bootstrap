import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { fetchDepositTransfers } from '../../../Api/ApiCalls';
import config from '../../../config/config';
import moment from 'moment';


class DepositTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
            pageCount: null,
            selectedCoinType: this.props.selectedCoinType
        };
    }

    getData = async (state, instance) => {
        this.setState({
            isLoading: true,
        });
        const paginationObj = {
            coinType: this.state.selectedCoinType,
            Skip: (state.page) * state.pageSize,
            Take: state.pageSize
        }
        let response = await fetchDepositTransfers(paginationObj);
        console.log(response);
        this.setState({
            isLoading: false,
            data: response.data,
            pageCount: response.pageCount
        });
    }

    fetchData = async () => {
        this.setState({
            isLoading: true,
        });
        const paginationObj = {
            coinType: this.state.selectedCoinType,
            Skip: 0,
            Take: 10
        }
        let response = await fetchDepositTransfers(paginationObj);
        console.log(response);
        this.setState({
            isLoading: false,
            data: response.data,
            pageCount: response.pageCount
        });
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log('====================================');
        // console.log('getDerivedStateFromProps:\n');
        // console.log('nextProps: ', nextProps);
        // console.log('prevState: ', prevState);
        // console.log('====================================');
        if (nextProps.selectedCoinType !== prevState.selectedCoinType) {
            // console.log('====================================');
            // console.log('market changed');
            // console.log('====================================');
            return { selectedCoinType: nextProps.selectedCoinType };
        } else return null;
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log('====================================');
        // console.log('componentDidUpdate:\n');
        // console.log('prevProps: ', prevProps);
        // console.log('prevState: ', prevState);
        // console.log('current market : ', this.state.market);
        // console.log('====================================');
        if (prevState.selectedCoinType !== this.state.selectedCoinType) {
            // console.log('====================================');
            // console.log('fetching buySell History');
            // console.log('====================================');
            this.fetchData();
        }
    }

    render() {
        const { data, isLoading, pageCount } = this.state;
        return (
            <ReactTable
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
                        Header: "Coin",
                        accessor: "accountType",
                        width: 60
                    },
                    {
                        Header: "User",
                        accessor: "userName"
                    },
                    {
                        Header: "Date",
                        accessor: "created",
                        Cell: (row) => {
                            return moment.utc(row.original.created, 'YYYY-MM-DD HH:mm:ss [UTC]').local().format('DD-MM-YYYY HH:mm:ss');
                        }
                    },
                    {
                        Header: "Volume",
                        accessor: "amount"
                    },
                    {
                        Header: "Status",
                        accessor: "status",
                        getProps: (state, rowInfo) => {
                            return {
                                style: {
                                    color: rowInfo && rowInfo.row && rowInfo.row.status === "Completed" ? "green" : "red"
                                }
                            };
                        }
                    }
                ]}
                className="-striped -highlight"
                sortable={false}
                manual
                data={data}
                noDataText="There are no results to display."
                pages={pageCount}
                loading={isLoading}
                onFetchData={this.getData}
                defaultPageSize={config.depositResultsPerPage}
                previousText='Prev'
                nextText='Next'
            />
        );
    }
}

export default DepositTable;