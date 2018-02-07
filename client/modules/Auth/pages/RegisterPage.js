import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Register from '../components/Register';
import { Row, Col } from 'react-bootstrap';

// Import Style
import styles from './welcomepage.css';

// Import Actions
import { registerUser } from '../AuthActions';

// Import Selectors
// import { getPost } from '../../PostReducer';

export function RegisterPage(props) {
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
  };
}

RegisterPage.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  registerUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { registerUser })(RegisterPage);
