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

    getData = async (state, instance) => {
        // console.log("state", state);
        console.log("instance ", instance);

        let response = await fetchCommissionSettings();
        console.log(response);

        await response.map((column) => {
            this.setState({
                [column.description]: null
            })
        })
        this.setState({
            data: response,
            isLoading: false
        })
        console.log("state", state);
    }

    renderInput = (cellInfo) => {
        console.log(cellInfo.original.calculationType);
        const feeType = cellInfo.original.description

        console.log()
        // this.setState({
        //     [feeType]: null
        // })
        return (
            <select value={this.state.feeType === null ? cellInfo.original.calculationType : this.state.feeType}
                className="form-control"
                id={cellInfo.original.description}
                name={cellInfo.original.calculationType}
                onChange={this.handleChange}
            //onBlur={props.showErrors}
            //disabled={isPersonalDisabled}
            //required
            >
                {config.calculationTypeOptions.map((state) => <option key={state.value} value={state.value}>{state.label}</option>)}
            </select>
        );
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const id = e.currentTarget.getAttribute('id');

        console.log(id);
        console.log("value", value);

        this.setState({
            [id]: value
            //[name]: value
        });
    }


    render() {
        const { data, isLoading } = this.state;
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
                

                manual
                data={data}
                defaultPageSize={8}  //access this value from config file
                className="-striped -highlight"
                sortable={false}
                onFetchData={this.getData}
                showPagination={true}
                noDataText="There are no results to display."
                loading={isLoading}
            />
        );
    }
}

export default CommissionsTable;