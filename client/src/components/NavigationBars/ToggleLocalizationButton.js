import React, { Component } from 'react'
import i18n from "../i18n";
import { withTranslation } from 'react-i18next';

class ToggleLocalizationButton extends Component {

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
		return (
			<div>
				{this.state.currentLocalisation === 'cs' ? (
					<button
						className="btn btn-primary float-lg-right m-2 p-2"
						onClick={() => this.changeLanguage('en')}>EN</button>
				) : (
					<button
						className="btn btn-primary float-lg-right m-2 p-2"
						onClick={() => this.changeLanguage('cs')}>CS</button>
				)}
			</div>
		)
	}
}

export default ToggleLocalizationButton