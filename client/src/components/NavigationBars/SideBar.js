import React, { Component } from 'react'
import { withRouter } from 'react-router'
import SideBarItem from './SideBarItem';

class SideBar extends Component {

	render() {
		const { menuItems } = this.props;

		return (
			<div id="sidebar" className="sidebar py-3">
				<ul className="sidebar-menu list-unstyled">
					{menuItems.map((item, index) => {
						item.active = this.props.location.pathname.match(`${item.name}$`)
						return (
							<SideBarItem key={item.name} item={item} />
						)
					})}
				</ul>
			</div>
		)
	}
}

export default withRouter(SideBar)