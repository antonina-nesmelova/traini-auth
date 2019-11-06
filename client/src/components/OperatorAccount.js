import React, { Component } from 'react'
import TopBar from './NavigationBars/TopBar';
import SideBar from './NavigationBars/SideBar';

class OperatorAccount extends Component {

    render() {
        return (
            <div>
                <TopBar />
                <div className="d-flex align-items-stretch">
                    <SideBar menuItems={[
                        {
                            name: 'dashboard',
                            icon: 'tachometer-alt'
                        },
                        {
                            name: 'cosmonauts',
                            icon: 'user-astronaut'
                        },
                        {
                            name: 'rockets',
                            icon: 'rocket'
                        },
                        {
                            name: 'flights',
                            icon: 'calendar-alt'
                        }
                    ]}/>
                    <div className="page-holder w-100 d-flex flex-wrap">
                        <div className="container-fluid px-xl-5">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OperatorAccount;