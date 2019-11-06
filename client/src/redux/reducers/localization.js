import {
	TOGGLE_LOCATIZATION
} from '../constants/actionTypes';
import i18n from '../../i18n';

export default (state = {localization: 'en'}, action) => {
	switch (action.type) {
		case TOGGLE_LOCATIZATION:
			const newLang = state.localization === 'en' ? 'cs' : 'en'
			i18n.changeLanguage(newLang);
			return {
				localization: newLang
			};
		default:
			return state;
	}
};
