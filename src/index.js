import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';


import "./styles.scss";
import Reducers from './reducers';
import App from './components/App';

const store = createStore(
  Reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>,
   document.getElementById('root')
 );
