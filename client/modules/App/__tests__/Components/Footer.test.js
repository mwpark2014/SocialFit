import React from 'react';
import Footer from '../../components/Footer/Footer';
import renderer from 'react-test-renderer';

test('Footer snapshot', () => {
  const component = renderer.create(
    <Footer />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot(); // eslint-disable-line
});
