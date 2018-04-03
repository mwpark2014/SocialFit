import React from 'react';
import Login from '../../components/Login';
import renderer from 'react-test-renderer';

const loginUser = jest.fn(); //eslint-disable-line

describe('Test render & styles', () => {
  test('Login component snapshot', () => {
    const component = renderer.create(
      <Login
        loginUser={loginUser} errorMessage=""
        message=""
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot(); // eslint-disable-line
  });
});
