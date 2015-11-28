import {UPDATE_THEME_COLOR} from '../../../state/ActionTypes';

export default function themeReducer(state = {color: '#5DC4C6', font: 'sans-serif'}, action) {
  switch (action.type) {
    case UPDATE_THEME_COLOR:
      return {
        ...state,
        color: action.payload.color
      };
    default:
      return state;
  }
}
