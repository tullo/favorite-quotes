import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import LikeCounter from './LikeCounter';

describe('LikeCounter', () => {

  it('should be a link', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<LikeCounter count={5} />);
    const actual = renderer.getRenderOutput().type;
    const expected = 'a';
    expect(actual).toEqual(expected);
  });

  it('should render the initial like count', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<LikeCounter count={5} />);
    const actual = renderer.getRenderOutput();
    const expected = '5 likes';
    expect(actual).toIncludeJSX(expected);
  });
  
  it('should toggle a new like when clicked', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<LikeCounter count={5} />);
    renderer.getRenderOutput().props.onClick();
    const actual = renderer.getRenderOutput();
    console.log(`actual`, actual);
    const expected = '6 likes';
    expect(actual).toIncludeJSX(expected);
  });

  it('should toggle the active state when clicked', () => {
    // TODO
  });
});
