import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers/rootReducer';
import { createStore } from 'redux';

import App from './App';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(<App />, document.getElementById('root'));
