import React, { Component } from 'react'
import {withTranslation} from "react-i18next";
import {withRouter} from "react-router";
import ToggleLocalizationButton from "./ToggleLocalizationButton";
import LogoutButton from "./LogoutButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class TopBar extends Component {
	render() {
		return (
			<header className="header">
				<nav className="navbar navbar-expand-lg px-4 py-2 bg-white shadow">
					<a className="sidebar-toggler text-gray-500 mr-4 mr-lg-5 lead">
						<FontAwesomeIcon icon='align-left' />
					</a>
					<a href="index.html" className="navbar-brand font-weight-bold text-uppercase text-base">SpaceFides</a>
					<ul className="ml-auto d-flex align-items-center list-unstyled mb-0">
						<li className="nav-item">
							<ToggleLocalizationButton />
						</li>
						<li className="nav-item">
							<LogoutButton />
						</li>
					</ul>
				</nav>
			</header>
		)
	}
}

export default TopBar