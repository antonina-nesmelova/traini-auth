import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

class SideBarItem extends Component {

	render() {
		const { t, item } = this.props;

		return (
			<li className="sidebar-list-item">
				<Link
					to={`/operator/account/${item.name}`}
					className={`sidebar-link text-muted py-4 ${item.active ? 'active' : ''}`}>
					<FontAwesomeIcon
						icon={item.icon}
						className='text-gray mr-3'
					/>
					<span>{t(`sidebar.${item.name}`)}</span>
				</Link>
			</li>
		)
	}
}

export default withTranslation()(SideBarItem)