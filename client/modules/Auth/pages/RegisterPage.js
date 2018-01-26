import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

// Import Style
// import styles from '../../components/PostListItem/PostListItem.css';

// Import Actions
import * as actions from '../AuthActions';

// Import Selectors
// import { getPost } from '../../PostReducer';

export class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.registerUser({ username: this.state.username,
                   name: this.state.name,
                   email: this.state.email,
                   password: this.state.password });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" // eslint-disable-line
            onChange={this.handleInputChange} required />
        </div>
        <div>
          <label>Username</label>
          <input type="text" name="username" placeholder="Username" // eslint-disable-line
            onChange={this.handleInputChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" // eslint-disable-line
            onChange={this.handleInputChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" // eslint-disable-line
            onChange={this.handleInputChange} required />
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" name="password2" placeholder="Password" // eslint-disable-line
            onChange={this.handleInputChange} required />
        </div>
        <button type="submit">Register</button>
        <br />
        Have you already registered? <Link to="/">Login</Link>
      </form>
    );
  }
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
};

export default connect(mapStateToProps, actions)(RegisterPage);
