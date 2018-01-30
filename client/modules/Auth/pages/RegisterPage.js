import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { FormGroup, FormControl, Button,
  ControlLabel, Row, Col } from 'react-bootstrap';

// Import Style
// import styles from '../../components/PostListItem/PostListItem.css';

// Import Actions
import { registerUser } from '../AuthActions';

// Import Selectors
// import { getPost } from '../../PostReducer';

export class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = { name: '', username: '', email: '', password: '', password2: '' };
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
    // Clear all the fields
    this.state = { name: '', username: '', email: '', password: '', password2: '' };
    this.props.registerUser({ username: this.state.username,
                   name: this.state.name,
                   email: this.state.email,
                   password: this.state.password });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Row>
            <Col md={2}>
              <ControlLabel>Name</ControlLabel>
            </Col>
            <Col md={4}>
              <FormControl type="text" name="name" placeholder="Name" // eslint-disable-line
                onChange={this.handleInputChange} value={this.state.name} required />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col md={2}>
              <ControlLabel>Username</ControlLabel>
            </Col>
            <Col md={4}>
              <FormControl type="text" name="username" placeholder="Username" // eslint-disable-line
                onChange={this.handleInputChange} value={this.state.username} required />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col md={2}>
              <ControlLabel>Email</ControlLabel>
            </Col>
            <Col md={4}>
              <FormControl type="email" name="email" placeholder="Email" // eslint-disable-line
                onChange={this.handleInputChange} value={this.state.email} required />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col md={2}>
              <ControlLabel>Password</ControlLabel>
            </Col>
            <Col md={4}>
              <FormControl type="password" name="password" placeholder="Password" // eslint-disable-line
                onChange={this.handleInputChange} value={this.state.password} required />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col md={2}>
              <ControlLabel>Confirm Password</ControlLabel>
            </Col>
            <Col md={4}>
              <FormControl type="password" name="password2" placeholder="Password" // eslint-disable-line
                onChange={this.handleInputChange} value={this.state.password2} required />
            </Col>
          </Row>
        </FormGroup>
        <Button type="submit">Register</Button>
        <br />
        Have you already registered? <Link to="/">Sign in</Link>
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
  registerUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { registerUser })(RegisterPage);
