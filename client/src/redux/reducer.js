import { combineReducers } from 'redux';
import localization from './reducers/localization'
import auth from './reducers/auth'
import { connectRouter } from 'connected-react-router'

const reduser = (history) => combineReducers({
  localization,
  auth,
  router: connectRouter(history)
})
export default reduser