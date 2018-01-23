import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Style
// import styles from '../../components/Auth/PostListItem.css';

// Import Actions
// import * from '../../Auth/AuthActions';

// Import Selectors
// import { getPost } from '../../AuthReducer';

export function LoginPage() {
  return (
    <form method="post" action="/login">
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
      <button type="submit">Login</button>
    </form>
  );
}

export default connect()(LoginPage);
