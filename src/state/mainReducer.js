import quoteReducer from '../home/quotes/state/quoteReducer';
import themeReducer from '../home/theme/state/themeReducer';

export default function mainReducer(state = {}, action) {
  return {
    quotes: quoteReducer(state.quotes, action),
    theme: themeReducer(state.theme, action)
  };
}
