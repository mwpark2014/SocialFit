import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormGroup, FormControl, Button,
  ControlLabel, Row, Col } from 'react-bootstrap';

// Import Style
// import styles from '../../components/Auth/PostListItem.css';

// Import Actions
import { loginUser } from '../AuthActions';

// Import Selectors
// import { getPost } from '../../AuthReducer';

export class LoginPage extends Component {
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
    this.props.loginUser({ username: this.state.username,
                   password: this.state.password });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
              <ControlLabel>Password</ControlLabel>
            </Col>
            <Col md={4}>
            <FormControl type="password" name="password" placeholder="Password" // eslint-disable-line
              onChange={this.handleInputChange} value={this.state.password} required />
            </Col>
          </Row>
        </FormGroup>
        <Button type="submit">Login</Button>
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

LoginPage.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  loginUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { loginUser })(LoginPage);
