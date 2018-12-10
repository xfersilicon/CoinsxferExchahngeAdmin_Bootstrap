import React, {Component} from 'react';
import MainHeader from "../MainHeader/MainHeader";
import CommissionsTable from '../Tables/CommissionSettingsTable/CommissionsTable';
import CardLayout from '../../layouts/cardLayout';

// const CommissionSettings = () => {
//     return (
//         <div className="adminMod">
//             <MainHeader heading="commission settings" subHeading="buy & sell"/>
//             <CardLayout Header="Buy" iconName="user" Body={<BuyCommissionsTable />} />
//             <CardLayout Header="Sell" iconName="user" Body={<SellCommissionsTable />} />
//         </div>
//     )
// }

class CommissionSettings extends Component {
    render(){
        return (
            <div className="adminMod">
                <MainHeader heading="commission settings" subHeading="trading & transfers"/>
                <CardLayout Header="Commissions" iconName="user" Body={<CommissionsTable/>}/>
                {/* <CardLayout Header="Sell" iconName="user" Body={<CommissionsTable commissionType="Sell" />} /> */}
            </div>
        )
    }
}

export default CommissionSettings;