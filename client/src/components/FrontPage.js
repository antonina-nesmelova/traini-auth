import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from "react-router-dom"
import { withTranslation } from 'react-i18next';

class FrontPage extends Component {
    render() {
        const { t } = this.props

        return (
            <div>
                <div className="row front-page-buttons">
                    <div className="col-lg-6 text-center">
                        <Link to="/login" className="btn btn-primary btn-lg ml-5">
                            {t('login.button')}
                        </Link>
                    </div>
                    <div className="col-lg-6 text-center">
                        <Link to="/signup" className="btn btn-secondary btn-lg mr-5">
                            {t('signup.button')}
                        </Link>
                    </div>
                </div>
                <div className="front-page-background position-fixed w-100 h-100"></div>
            </div>
        )
    }
}

export default withRouter(withTranslation()(FrontPage))