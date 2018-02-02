import callApi from '../../util/apiCaller';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router';

export const AUTH_USER = 'auth_user';
export const UNAUTH_USER = 'unauth_user';
export const AUTH_ERROR = 'auth_error';
export const FORGOT_PASSWORD_REQUEST = 'forgot_password_request';
export const RESET_PASSWORD_REQUEST = 'reset_password_request';
export const PROTECTED_TEST = 'protected_test';

export function errorHandler(dispatch, error, type) {
  let errorMessage = '';
  if (error.error) errorMessage = error.error;

  if (error.response.status === 401) {
    dispatch({
      type,
      payload: 'You are not authorized to do this. Please login and try again.',
    });
    logoutUser()(dispatch); // eslint-disable-line no-use-before-define
  } else {
    dispatch({
      type,
      payload: errorMessage,
    });
  }
}

export function logoutUser() {
  return (dispatch) => {
    dispatch({ type: UNAUTH_USER });
    cookie.remove('token', { path: '/' });
    browserHistory.push('/');
  };
}

export function loginUser({ username, password }) {
  return (dispatch) => {
    callApi('auth/login', 'post', { username, password })
    .then(response => {
      cookie.save('token', response.token, { path: '/' });
      dispatch({ type: AUTH_USER });
      browserHistory.push('/me');
    })
    .catch((error) => {
      errorHandler(dispatch, error, AUTH_ERROR);
    });
  };
}

export function registerUser({ email, username, name, password }) {
  return (dispatch) => {
    callApi('auth/register', 'post', { email, username, name, password })
    .then(response => {
      cookie.save('token', response.token, { path: '/' });
      dispatch({ type: AUTH_USER });
      browserHistory.push('/me');
    })
    .catch((error) => {
      errorHandler(dispatch, error, AUTH_ERROR);
    });
  };
}

export function getForgotPasswordToken({ email }) {
  return (dispatch) => {
    callApi('/auth/forgot-password', 'post', { email })
    .then((response) => {
      dispatch({
        type: FORGOT_PASSWORD_REQUEST,
        payload: response.data.message,
      });
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, AUTH_ERROR);
    });
  };
}

export function resetPassword(token, { password }) {
  return (dispatch) => {
    callApi(`/auth/reset-password/${token}`, 'post', { password })
    .then((response) => {
      dispatch({
        type: RESET_PASSWORD_REQUEST,
        payload: response.data.message,
      });
      // Redirect to login page on successful password reset
      browserHistory.push('/login');
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
      errorHandler(dispatch, error, AUTH_ERROR);
    });
  };
}
