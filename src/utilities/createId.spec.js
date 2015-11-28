import expect from 'expect';
import createId from './createId';

describe('createId', () => {

  it('should convert a description into an id', () => {
    const actual = createId(123, 'Cool example description');
    const expected = `123-cool-example`;
    expect(actual).toEqual(expected);
  });
});
