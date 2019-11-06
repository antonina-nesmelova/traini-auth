import React, { Component } from 'react'
import { TOGGLE_LOCATIZATION } from '../../redux/constants/actionTypes';
import {connect} from 'react-redux';

const mapStateToProps = state => ( state.localization );

const mapDispatchToProps = dispatch => ({
	onToggle: value =>
		dispatch({ type: TOGGLE_LOCATIZATION })
});

class ToggleLocalizationButton extends Component {

	constructor(props) {
		super(props);
		this.onToggle = ev => this.props.onToggle()
	}

	render() {
		return (
			<div>
				{this.props.localization === 'cs' ? (
					<button
						className="btn btn-primary float-lg-right m-2 p-2"
						onClick={() => this.onToggle()}>EN</button>
				) : (
					<button
						className="btn btn-primary float-lg-right m-2 p-2"
						onClick={() => this.onToggle()}>CS</button>
				)}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleLocalizationButton)