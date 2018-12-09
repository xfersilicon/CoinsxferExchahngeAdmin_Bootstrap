import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { fetchCommissionSettings } from '../../../Api/ApiCalls';

class CommissionsTable extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            buyCommissionData: [],
            sellCommissionData: [],
            isLoading: true
        }
    }

    componentDidMount() {
        //call service to get commision data
        this.getData()
    }

   getData = async () => {
        this.setState({
            isLoading: true,
        });
        let response = await fetchCommissionSettings();
        console.log(response);
        this.setState({
            buyCommissionData: response.data,
            sellCommissionData: response.data,
        })
    }

    renderEditable = (cellInfo) => {
        return (
            <input type="date" />
        );
    }
    renderInput = (cellInfo) => {
        return (
            <input type="text" placeholder="Enter"/>
        );
    }


    render() {
        const { commissionType } = this.props;
        const { buyCommissionData, sellCommissionData } = this.props;
        return (
            <ReactTable
                data={commissionType === 'Buy' ? buyCommissionData : sellCommissionData}
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
                        Header: "Description",
                        accessor: "description",
                    },

                    {
                        Header: "Type",
                        accessor: "transactionType"
                    },
                    //{
                      //  Header: "From Date",
                      //  accessor: "timeStamp",
                      //  Cell: this.renderEditable
                    //},
                    //{
                    //    Header: "To Date",
                    //    accessor: "timeStamp",
                    //    Cell: this.renderEditable
                    //},
                    {
                        Header: "Commission",
                        accessor: "commission",
                        //Cell: this.renderInput
                    },

                    {
                        Header: "Commission Type",
                        accessor: "commissionType",
                        //Cell: this.renderInput
                    },
                    
                    {
                        Header: "Confirmation",
                        accessor: "type"
                    },
                    
                    {
                        Header: "Confirmation",
                        accessor: "type"
                    },
                ]}
                defaultPageSize={5}  //access this value from config file
                className="-striped -highlight"
                sortable={false}
                showPagination={false}
            />
        );
    }
}

export default CommissionsTable;