import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Register from '../components/Register';
import Login from '../components/Login';
import { Row, Col } from 'reactstrap';

// Import Style
import styles from './welcomepage.css';

// Import Actions
import { registerUser, loginUser } from '../AuthActions';

// Import Selectors
import { getLoginButton } from '../../App/AppReducer';

export function WelcomePage(props) {
  const loginOrRegister = props.loginButton ?
    <Register
      errorMessage={props.errorMessage} message={props.message} registerUser={props.registerUser}
    /> :
    <Login
      errorMessage={props.errorMessage} message={props.message} loginUser={props.loginUser}
    />;
  return (
    <div className={styles.welcomeContainer}>
      <Row>
        <Col md={7} />
        <Col md={5}>
          <div className={styles.authContainer}>
            {loginOrRegister}
          </div>
        </Col>
      </Row>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    message: state.auth.message,
    authenticated: state.auth.authenticated,
    loginButton: getLoginButton(state),
  };
}

WelcomePage.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  authenticated: PropTypes.bool.isRequired,
  registerUser: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  loginButton: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, { registerUser, loginUser })(WelcomePage);
