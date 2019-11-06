import {
	TOGGLE_LOCATIZATION
} from '../constants/actionTypes';
import i18n from "../../i18n";

export default (state = 'cs', action) => {
	switch (action.type) {
		case TOGGLE_LOCATIZATION:
			console.log(action.payload.newLang)
			i18n.changeLanguage(action.payload.newLang);
			return {
				...state,
				inProgress: action.payload.newLang
			};
		default:
			return state;
	}
};
