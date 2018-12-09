import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { fetchWithdrawalTransfers } from '../../../Api/ApiCalls';
import config from '../../../config/config';
import moment from 'moment';



class WithdrawalsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
            selectedCoinType: this.props.selectedCoinType,
            pageCount: null
        };
    }

    getData = async (state, instance) => {
        console.log(this.props.searchData);
        this.setState({
            isLoading: true,
        });
        const paginationObj = {
            coinType: this.props.selectedCoinType,
            Skip: (state.page) * state.pageSize,
            Take: state.pageSize
        }
        let response = await fetchWithdrawalTransfers(paginationObj);
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
        let response = await fetchWithdrawalTransfers(paginationObj);
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
                        accessor: "coinType",
                        width: 60
                    },
                    {
                        Header: "Submitted On",
                        accessor: "submittedOn",
                        Cell: (row) => {
                            return moment.utc(row.original.submittedOn, 'YYYY-MM-DD HH:mm:ss [UTC]').local().format('DD-MM-YYYY HH:mm:ss');
                        }
                    },
                    {
                        Header: "Completed On",
                        accessor: "completedOn",
                        Cell: (row) => {
                            return moment.utc(row.original.completedOn, 'YYYY-MM-DD HH:mm:ss [UTC]').local().format('DD-MM-YYYY HH:mm:ss');
                        }
                    },
                    {
                        Header: "Commission",
                        accessor: "commission"
                    },
                    {
                        Header: "Volume",
                        accessor: "volume"
                    },
                    {
                        Header: "Transaction Hash",
                        accessor: "transactionHash"
                    },

                    // {
                    //     Header: "Status",
                    //     accessor: "status"
                    // },
                ]}
                className="-striped -highlight"
                sortable={false}
                manual
                data={data}
                noDataText="There are no results to display."
                pages={pageCount}
                loading={isLoading}
                onFetchData={this.getData}
                defaultPageSize={config.withdrawalResultsPerPage}
                previousText='Prev'
                nextText='Next'
            />
        );
    }
}

export default WithdrawalsTable;