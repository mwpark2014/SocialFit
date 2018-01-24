import callApi from '../../util/apiCaller';
import cookie from 'react-cookie';

export const AUTH_USER = 'auth_user';
export const UNAUTH_USER = 'unauth_user';
export const AUTH_ERROR = 'auth_error';
export const FORGOT_PASSWORD_REQUEST = 'forgot_password_request';
export const RESET_PASSWORD_REQUEST = 'reset_password_request';
export const PROTECTED_TEST = 'protected_test';

export function logoutUser() {
  return (dispatch) => {
    dispatch({ type: UNAUTH_USER });
    cookie.remove('token', { path: '/' });
    // TODO: redirect to login page
  };
}

export function errorHandler(dispatch, error, type) {
  let errorMessage = '';

  if (error.data.error) {
    errorMessage = error.data.error;
  } else if (error.data) {
    errorMessage = error.data;
  } else {
    errorMessage = error;
  }

  if (error.status === 401) {
    dispatch({
      type,
      payload: 'You are not authorized to do this. Please login and try again.',
    });
    logoutUser();
  } else {
    dispatch({
      type,
      payload: errorMessage,
    });
  }
}

export function loginUser({ username, password }) {
  return (dispatch) => {
    callApi('auth/login', 'post', { username, password })
    .then(response => {
      cookie.save('token', response.data.token, { path: '/' });
      dispatch({ type: AUTH_USER });
      // TODO: redirecto to dashboard
      alert('Successfully logged in!');
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, AUTH_ERROR);
    });
  };
}

export function registerUser({ email, username, name, password }) {  
  return (dispatch) => {
    callApi('auth/register', 'post', { email, username, name, password })
    .then(response => {
      cookie.save('token', response.data.token, { path: '/' });
      dispatch({ type: AUTH_USER });
      // TODO: redirect to dashboard
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, AUTH_ERROR);
    });
  };
}

export function protectedTest() {
  return (dispatch) => {
    callApi('auth/protected', 'get', { /* body */ },
     { 'content-type': 'application/json', Authorization: cookie.load('token'),
    })
    .then(response => {
      dispatch({
        type: PROTECTED_TEST,
        payload: response.data.content,
      });
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, AUTH_ERROR);
    });
  };
}
