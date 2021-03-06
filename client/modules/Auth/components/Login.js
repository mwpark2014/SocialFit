import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Button,
  Label, Row, Col } from 'reactstrap';

export default class Login extends Component {
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
    this.props.loginUser({ username: this.state.username,
                   password: this.state.password });
    // Clear all the fields
    this.setState({ name: '', username: '', email: '', password: '', password2: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Row>
            <Col md={4}>
              <Label>Username</Label>
            </Col>
            <Col md={7}>
            <Input type="text" name="username" placeholder="Username" // eslint-disable-line
              onChange={this.handleInputChange} value={this.state.username} required />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col md={4}>
              <Label>Password</Label>
            </Col>
            <Col md={7}>
            <Input type="password" name="password" placeholder="Password" // eslint-disable-line
              onChange={this.handleInputChange} value={this.state.password} required />
            </Col>
          </Row>
        </FormGroup>
        <Row>
          <Col md={{ size: 7, offset: 4 }}>
            <Button type="submit" block>Login</Button>
          </Col>
        </Row>
      </form>
    );
  }
}

Login.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  loginUser: PropTypes.func.isRequired,
};
