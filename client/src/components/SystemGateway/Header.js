import React, { Component } from 'react'
import { withRouter } from 'react-router'
import i18n from '../i18n'
import ToggleLocalizationButton from "./ToggleLocalizationButton";

class Header extends Component {

    render() {
        return (
            <div className="fixed-top container">
                <ToggleLocalizationButton />
            </div>
        )
    }
}

export default withRouter(Header);