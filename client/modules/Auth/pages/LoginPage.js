import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from 'react-router-form';

import { loginUser } from '../AuthActions';

// Import Style
// import styles from '../../components/Auth/PostListItem.css';

// Import Actions
// import * from '../../Auth/AuthActions';

// Import Selectors
// import { getPost } from '../../AuthReducer';

export function LoginPage() {
  return (
    <Form to="/api/auth/login" method="post">
      <div>
        <label>Username</label>
        <input type="text" name="username" placeholder="Username" required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" placeholder="Password" required />
      </div>
      <div>
        <label>Confirm Password</label>
        <input type="password" name="password2" placeholder="Password" required />
      </div>
      <button type="submit">Login</button>
    </Form>
  );
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    message: state.auth.message,
  };
}

export default connect(mapStateToProps, { loginUser })(LoginPage);
