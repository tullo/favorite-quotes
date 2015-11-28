import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

const CoolComponent = ({greeting}) => (
  <div>
    <h1>Greeting</h1>
    <div>{greeting}</div>
  </div>
);

export default CoolComponent;

describe('CoolComponent', () => {

  it('should...', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<CoolComponent greeting='hello world' />);
    renderer.getRenderOutput().props.children;
  });
});
