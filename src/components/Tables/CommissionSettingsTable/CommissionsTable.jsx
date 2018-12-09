import React from 'react';
import { Button } from 'reactstrap';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { fetchCommissionSettings } from '../../../Api/ApiCalls';
import config from '../../../config/config';


class CommissionsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
            selectedCalculationType: null
        }
    }

    componentDidMount() {
        //call service to get commision data
        this.getData()
    }

    getData = async (state, instance) => {
        const url = `${config.user}` + config.urls.commissionSettings;

        let response = await fetchCommissionSettings();
        console.log(response);
        this.setState({
            data: response,
            isLoading: false
        })
    }


        // getInitialState(){
        //     return {selectValue:'test'};
        // }

    renderInput = (cellInfo) => {
        console.log(cellInfo.original.calculationType);
        return (
            <select value={cellInfo.original.calculationType}
                className="form-control"
                id="selectedCalculationType"
                name="selectedCalculationType"
                onChange={this.handleChange}
                //onBlur={props.showErrors}
                //disabled={isPersonalDisabled}
                //required
            >
                <option value="Percentage">test</option>
                <option value="Fixed">Fixed</option>
            </select>
        );
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        });
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
                        Header: "Description",
                        accessor: "description",
                    },
                    {
                        Header: "Calculation Type",
                        accessor: "calculationType",
                        Cell: this.renderInput
                    },
                    {
                        Header: "Commission",
                        accessor: "commission",
                        //Cell: this.renderInput
                    },
                    {
                        Header: "Type",
                        accessor: "commissionType",
                    },
                    {
                        Header: "Transaction",
                        accessor: "transactionType"
                    },
                    {
                        Header: "Modify ",
                        Cell: row => (
                            <Button className="tab-btn">Update</Button>
                        )
                    },

                ]}
                defaultPageSize={5}  //access this value from config file
                className="-striped -highlight"
                sortable={false}
                showPagination={false}
                noDataText="There are no results to display."
                loading={isLoading}
                defaultPageSize={config.searchResultsPerPage}

            />
        );
    }
}

export default CommissionsTable;