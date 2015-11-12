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

  it('should render the like count', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<LikeCounter count={5} />);
    const actual = renderer.getRenderOutput();
    const expected = <span>5</span>;
    expect(actual).toIncludeJSX(expected);
  });
});
