import React, {Component} from 'react';
import MainHeader from "../MainHeader/MainHeader";
import CorporateBalanceTable from '../Tables/CorporateBalanceTable/CorporateBalanceTable';
import CardLayout from '../../layouts/cardLayout';

class CorporateBalance extends Component {
    render(){
        return (
            <div className="adminMod">
                <MainHeader heading="Corporate Balance"/>
                <CardLayout Header="Corporate Balance" iconName="user" Body={<CorporateBalanceTable/>}/>
            </div>
        )
    }
}

export default CorporateBalance;