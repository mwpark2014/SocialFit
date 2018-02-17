/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import dash from './modules/Dash/DashReducer';
import intl from './modules/Intl/IntlReducer';
import auth from './modules/Auth/AuthReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  dash,
  intl,
  auth,
});
