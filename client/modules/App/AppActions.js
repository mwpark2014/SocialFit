// Export Constants
export const ACTIVATE_LOGIN_BUTTON = 'ACTIVATE_LOGIN_BUTTON';
export const DEACTIVATE_LOGIN_BUTTON = 'DEACTIVATE_LOGIN_BUTTON';

// Export Actions
export function activateLoginButton() {
  return {
    type: ACTIVATE_LOGIN_BUTTON,
  };
}

// Export Actions
export function deactivateLoginButton() {
  return {
    type: DEACTIVATE_LOGIN_BUTTON,
  };
}
