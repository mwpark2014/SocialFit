import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

// Import Style
// import styles from '../../components/PostListItem/PostListItem.css';

// Import Actions
// import { fetchPost } from '../../Post/PostActions';

// Import Selectors
// import { getPost } from '../../PostReducer';

export function RegisterPage() {
  return (
    <form method="post" action="">
      <div>
        <label>Name</label>
        <input type="text" name="name" placeholder="Name" required />
      </div>
      <div>
        <label>Username</label>
        <input type="text" name="username" placeholder="Username" required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" placeholder="Email" required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" placeholder="Password" required />
      </div>
      <div>
        <label>Confirm Password</label>
        <input type="password" name="password2" placeholder="Password" required />
      </div>
      <button type="submit">Register</button>
      <br />
      Have you already registered? <Link to="/login">Login</Link>
    </form>
  );
}

export default connect()(RegisterPage);
