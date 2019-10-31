import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from "../constants";
import i18n from '../i18n'

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentLocalisation: i18n.language
        }
    }

    changeLanguage = (lng) => {
        this.setState({
            currentLocalisation: lng
        });
        i18n.changeLanguage(lng);
    }

    render() {
        const authToken = localStorage.getItem(AUTH_TOKEN)
        return (
            <div className="fixed-top container">

                {this.state.currentLocalisation === 'cs' ? (
                    <button
                        className="btn btn-primary float-lg-right m-2 p-2"
                        onClick={() => this.changeLanguage('en')}>EN</button>
                ) : (
                    <button
                        className="btn btn-primary float-lg-right m-2 p-2"
                        onClick={() => this.changeLanguage('cs')}>CS</button>
                )}

                { authToken && (
                    <div
                        className="ml1 pointer black"
                        onClick={() => {
                            localStorage.removeItem(AUTH_TOKEN)
                            this.props.history.push(`/`)
                        }}
                    >
                        logout
                    </div>
                )}
            </div>
        )
    }
}

export default withRouter(Header);