import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from '../components/Login';

// Import Style
import styles from './welcomepage.css';

// Import Actions
import { loginUser } from '../AuthActions';

// Import Selectors
// import { getPost } from '../../AuthReducer';

export function LoginPage(props) {
  return (
    <div className={styles.welcomeContainer}>
      <Login errorMessage={props.errorMessage} message={props.message} //eslint-disable-line
        loginUser={props.loginUser} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    message: state.auth.message,
  };
}

LoginPage.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  loginUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { loginUser })(LoginPage);
