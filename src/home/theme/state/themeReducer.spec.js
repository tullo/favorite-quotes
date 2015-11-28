import expect from 'expect';
import {updateThemeColor} from './themeActionCreators';
import themeReducer from './themeReducer';

describe('themeReducer', () => {

  function stateBefore() {
    return {
      color: '#A3BE89',
      font: 'sans-serif'
    };
  }

  it('should change the theme color', () => {
    const action = updateThemeColor({
      color: '#B38EAE'
    });
    const actual = themeReducer(stateBefore(), action);
    const expected = {
      color: '#B38EAE',
      font: 'sans-serif'
    };
    expect(actual).toEqual(expected);
  });
});
