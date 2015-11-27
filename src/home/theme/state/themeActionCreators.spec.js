import expect from 'expect';
import {UPDATE_THEME_COLOR} from '../../../state/ActionTypes';
import {updateThemeColor} from './themeActionCreators';

describe('theme actions and action creators', () => {

  describe('updateThemeColor', () => {

    it('should create correct actions', () => {
      const examplePayload = {
        color: '#333333'
      };
      const actual = updateThemeColor(examplePayload);
      const expected = {
        type: UPDATE_THEME_COLOR,
        payload: examplePayload
      };
      expect(actual).toEqual(expected);
    });
  });
});
