// Import Actions
import { ACTIVATE_LOGIN_BUTTON, DEACTIVATE_LOGIN_BUTTON } from './AppActions';

// Initial State
const initialState = {
  loginButton: true,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVATE_LOGIN_BUTTON:
      return {
        loginButton: true,
      };
    case DEACTIVATE_LOGIN_BUTTON:
      return {
        loginButton: false,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get loginButton
export const getLoginButton = state => state.app.loginButton;

// Export Reducer
export default AppReducer;
