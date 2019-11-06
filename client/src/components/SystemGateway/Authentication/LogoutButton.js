import React, { Component } from 'react'
import {AUTH_TOKEN} from '../../../constants';
import { withTranslation } from 'react-i18next';

class LogoutButton extends Component {

	render() {
		const authToken = localStorage.getItem(AUTH_TOKEN)
		const { t } = this.props

		return (
			<div>
				{/*{ authToken && (*/}
					<div
						className="ml1 pointer black"
						onClick={() => {
							localStorage.removeItem(AUTH_TOKEN)
							this.props.history.push('/')
						}}
					>
						{t('login.logout')}
					</div>
				{/*)}*/}
			</div>
		)
	}
}

export default withTranslation()(LogoutButton)