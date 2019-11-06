import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { withTranslation } from "react-i18next";

class OperatorAccount extends Component {

    render() {
        const { t } = this.props;

        return (
            <div>
                <div className="d-flex align-items-stretch">
                    <div id="sidebar" className="sidebar py-3">
                        <div
                            className="text-gray-400 text-uppercase px-3 px-lg-4 py-4 font-weight-bold small headings-font-family">MAIN
                        </div>
                        <ul className="sidebar-menu list-unstyled">
                            <li className="sidebar-list-item">
                                <a href="index.html" className="sidebar-link text-muted active">
                                    <i className="o-home-1 mr-3 text-gray"></i>
                                    <span>Dashboard</span>
                                </a></li>
                            <li className="sidebar-list-item">
                                <a href="charts.html" className="sidebar-link text-muted">
                                    <i className="o-user-1 mr-3 text-gray"></i>
                                    <span>{t('sidebar.cosmonauts')}</span>
                                </a>
                            </li>
                            <li className="sidebar-list-item">
                                <a href="tables.html" className="sidebar-link text-muted">
                                    <i className="o-table-content-1 mr-3 text-gray"></i>
                                    <span>{t('sidebar.rockets')}</span>
                                </a>
                            </li>
                            <li className="sidebar-list-item">
                                <a href="forms.html" className="sidebar-link text-muted">
                                    <i className="o-survey-1 mr-3 text-gray"></i>
                                    <span>{t('sidebar.flights')}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation(withRouter(OperatorAccount))