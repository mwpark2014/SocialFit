/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import post from './modules/Post/PostReducer';
import intl from './modules/Intl/IntlReducer';
import auth from './modules/Auth/AuthReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  post,
  intl,
  auth,
});
