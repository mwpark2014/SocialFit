import React from 'react';
import { WelcomePage } from '../../pages/WelcomePage';
import renderer from 'react-test-renderer';

const registerUser = jest.fn(); //eslint-disable-line

const loginUser = jest.fn(); //eslint-disable-line

describe('Test render & styles', () => {
  test('WelcomePage snapshot', () => {
    const component = renderer.create(
      <WelcomePage
        errorMessage={''} message={''} registerUser={registerUser}
        loginUser={loginUser} authenticated loginButton
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot(); // eslint-disable-line

    tree.props.authenticated = false;
    expect(tree).toMatchSnapshot(); // eslint-disable-line

    tree.props.loginButton = false;
    expect(tree).toMatchSnapshot(); // eslint-disable-line

    tree.props.authenticated = true;
    expect(tree).toMatchSnapshot(); // eslint-disable-line
  });
});
