import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Register from '../components/Register';
import { Row, Col } from 'react-bootstrap';

// Import Style
import styles from './welcomepage.css';

// Import Actions
import { registerUser, loginUser } from '../AuthActions';

// Import Selectors
// import { getPost } from '../../PostReducer';

export function WelcomePage(props) {
  return (
    <div className={styles.welcomeContainer}>
      <Row>
        <Col md={7} />
        <Col md={5}>
          <div className={styles.authContainer}>
            <Register errorMessage={props.errorMessage} message={props.message} // eslint-disable-line
              registerUser={props.registerUser} />
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
  };
}

WelcomePage.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  authenticated: PropTypes.auth.authenticated,
  registerUser: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { registerUser, loginUser })(WelcomePage);
