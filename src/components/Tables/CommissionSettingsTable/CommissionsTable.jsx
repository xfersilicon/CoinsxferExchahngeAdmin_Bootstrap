import React from 'react';
import { Button } from 'reactstrap';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { fetchCommissionSettings, updateCommissionSettings } from '../../../Api/ApiCalls';
import { Input } from 'reactstrap';
import config from '../../../config/config';


class CommissionsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true
        }
    }

    getData = async (state, instance) => {
        let response = await fetchCommissionSettings();
        console.log(response);

        await response.map((column) => {
            this.setState({
                [column.description.concat('calculationType')]: column.calculationType,
                [('edit').concat(column.description).concat('calculationType')]: false,
                [column.description] : column.commission,
                [('edit').concat(column.description)] : false
            })
        });

        this.setState({
            data: response,
            isLoading: false
        })
    }

    renderInput = (cellInfo) => {
        //console.log(this.state[cellInfo.original.description]);
        return (
            <select value={this.state[cellInfo.original.description.concat('calculationType')]}
                className="form-control"
                id={cellInfo.original.description.concat('calculationType')}
                name={cellInfo.original.description.concat('calculationType')}
                onChange={this.handleChange}
            disabled={!this.state[('edit').concat(cellInfo.original.description).concat('calculationType')]}
            >
                {config.calculationTypeOptions.map((state) => <option key={state.value} value={state.value}>{state.label}</option>)}
            </select>
        );
    }

    renderTextInput = (cellInfo) => {
        //console.log(this.state[cellInfo.original.description]);
        return (
            <Input type="text" style={{textAlign: 'center'}} value={this.state[cellInfo.original.description]}
                name={cellInfo.original.description} id={cellInfo.original.description}
                onChange={this.handleChange} required
                disabled={!this.state[('edit').concat(cellInfo.original.description)]}/>      
        );
    }

    toggleDisabledInputs = async (e, cellInfo) => {
        e.preventDefault();
        console.log(document.getElementById(cellInfo.original.description.concat('Button')).textContent);
        if(document.getElementById(cellInfo.original.description.concat('Button')).textContent === 'Update') {
            const commissionObj = {
                Description: cellInfo.original.description,
                CalculationType: this.state[cellInfo.original.description.concat('calculationType')],
                UserType: 'CUSTOMER',
                Commission: this.state[cellInfo.original.description],
                CommissionType: cellInfo.original.commissionType,
                TransactionType: cellInfo.original.transactionType,
                AccountType: cellInfo.original.accountType
            }
            await updateCommissionSettings(commissionObj)
        }
        this.setState(prevState => ({
            [('edit').concat(cellInfo.original.description)] : !prevState[('edit').concat(cellInfo.original.description)],
            [('edit').concat(cellInfo.original.description).concat('calculationType')] : !prevState[('edit').concat(cellInfo.original.description).concat('calculationType')]
        }))
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        //const id = e.currentTarget.getAttribute('id');

        this.setState({
            [name]: value
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
                        Cell: this.renderTextInput
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
                            <Button className="tab-btn" onClick={(e) => this.toggleDisabledInputs(e, row)} id={row.original.description.concat('Button')} name={row.original.description.concat('Button')}>
                                {this.state[('edit').concat(row.original.description)] ? 'Update' : 'Edit'}
                            </Button>
                        )
                    },

                ]}
                data={data}
                defaultPageSize={8}  //access this value from config file
                sortable={false}
                onFetchData={this.getData}
                showPagination={false}
                noDataText="There are no results to display."
                loading={isLoading}
            />
        );
    }
}

export default CommissionsTable;