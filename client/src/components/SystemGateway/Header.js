import React, { Component } from 'react'
import ToggleLocalizationButton from '../NavigationBars/ToggleLocalizationButton';

class Header extends Component {

    render() {
        return (
            <div className="fixed-top container">
                <ToggleLocalizationButton />
            </div>
        )
    }
}

export default Header;