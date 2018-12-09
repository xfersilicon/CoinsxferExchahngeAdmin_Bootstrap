import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { fetchCorporateBalances } from '../../../Api/ApiCalls';
import config from '../../../config/config';

class CorporateBalanceTable extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            data: [],
            isLoading: true
        }
    }

    componentDidMount() {
        //call service to get commision data
        this.getData()
    }

    getData = async () => {
        const walletObj = {
            email: "SILICONTECHINC.COM",
            accountType: ['BTC','ETH', 'XRP', 'USD']
        }
        let response = await fetchCorporateBalances(walletObj);
        console.log(response);
        this.setState({
            data: response,
            isLoading: false
        })
    }

    render() {
        const { data, isLoading } = this.state;
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
                        Header: "Coin",
                        accessor: "accountType",
                    },
                    {
                        Header: "Available Balance",
                        accessor: "balance"
                    },
                    {
                        Header: "Pending Trades Balance",
                        accessor: "pendingTradesBalance"
                    },
                    {
                        Header: "Pending Transfers Balance",
                        accessor: "pendingTransfersBalance"
                    }
                   
                ]}
                className="-striped -highlight"
                sortable={false}
                showPagination={false}              
                noDataText="There are no results to display."          
                loading={isLoading}
                defaultPageSize={config.corporateSearchResultsPage}
            />
        );
    }
}

export default CorporateBalanceTable;