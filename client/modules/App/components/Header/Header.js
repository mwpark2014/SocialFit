import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Nav, NavbarToggler,
  NavItem, NavLink, Collapse,
  Navbar, NavbarBrand } from 'reactstrap';

// Import Style
import styles from './Header.css';

export class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  // Will toggle the collapsible navbar for smaller screens
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    let logButton = null;
    if (this.props.location.pathname === '/') {
      logButton = this.props.loginButton
      ? <Button href="#" className={styles.loginButton} onClick={this.props.deactivateLoginButton}> Sign in </Button>
      : <Button href="#" className={styles.loginButton} onClick={this.props.activateLoginButton}> Register </Button>;
    } else {
      logButton = this.props.authenticated
      ? <Button href="#" className={styles.loginButton} onClick={this.props.redirectToWelcomePage}> Log out </Button>
      : <Button href="#" className={styles.loginButton} onClick={this.props.redirectToWelcomePage}> Sign in </Button>;
    }
    return (
      <div className={styles.header}>
        <div className={styles.content}>
          <Navbar color="faded" light expand="md">
            <NavbarBrand className={styles['site-title']} href="/">SocialFit</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className={styles.nav}>
                  <NavLink href="/feed">NEWSFEED</NavLink>
                </NavItem>
                <NavItem className={styles.nav}>
                  <NavLink href="#">PROFILE</NavLink>
                </NavItem>
                <NavItem className={styles.nav}>
                  {logButton}
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          {/* <h1 className={styles['site-title']}>
            <Link to="/" ><h1>SocialFit</h1></Link>
          </h1>
          {navBar} */}
        </div>
      </div>
    );
  }
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  activateLoginButton: PropTypes.func.isRequired,
  deactivateLoginButton: PropTypes.func.isRequired,
  redirectToWelcomePage: PropTypes.func.isRequired,
  loginButton: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
};

export default Header;
