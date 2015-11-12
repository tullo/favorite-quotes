import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './state/store';
import AppContainer from './components/AppContainer/AppContainer';

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
