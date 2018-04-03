import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Button,
  Label, Row, Col } from 'reactstrap';

export default class Register extends Component {
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
    this.props.registerUser({ username: this.state.username,
                   name: this.state.name,
                   email: this.state.email,
                   password: this.state.password });
    // Clear all the fields
    this.state = { name: '', username: '', email: '', password: '', password2: '' };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Row>
            <Col md={4}>
              <Label>Name</Label>
            </Col>
            <Col md={7}>
              <Input
                type="text" name="name" placeholder="Name"
                onChange={this.handleInputChange} value={this.state.name} required
              />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col md={4}>
              <Label>Username</Label>
            </Col>
            <Col md={7}>
              <Input
                type="text" name="username" placeholder="Username"
                onChange={this.handleInputChange} value={this.state.username} required
              />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col md={4}>
              <Label>Email</Label>
            </Col>
            <Col md={7}>
              <Input
                type="email" name="email" placeholder="Email"
                onChange={this.handleInputChange} value={this.state.email} required
              />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col md={4}>
              <Label>Password</Label>
            </Col>
            <Col md={7}>
              <Input
                type="password" name="password" placeholder="Password"
                onChange={this.handleInputChange} value={this.state.password} required
              />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col md={4}>
              <Label>Confirm Password</Label>
            </Col>
            <Col md={7}>
              <Input
                type="password" name="password2" placeholder="Password"
                onChange={this.handleInputChange}
                value={this.state.password2} required
              />
            </Col>
          </Row>
        </FormGroup>
        <Row>
          <Col md={{ size: 7, offset: 4 }}>
            <Button type="submit" block>Register</Button>
          </Col>
        </Row>
      </form>
    );
  }
}

Register.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  registerUser: PropTypes.func.isRequired,
};
