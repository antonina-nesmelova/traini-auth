import { combineReducers } from 'redux';
import localization from './reducers/localization'
import { connectRouter } from 'connected-react-router'

const reduser = (history) => combineReducers({
  localization,
  router: connectRouter(history)
})
export default reduser