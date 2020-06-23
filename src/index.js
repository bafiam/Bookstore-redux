import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { randomID } from './actions/index';
import rootReducer from './reducers/index';

const initialState = [
  {
    id: randomID(),
    title: 'How to be a better Programmer',
    category: 'Learning',
  },
  {
    id: randomID(),
    title: 'The myth about World War 2',
    category: 'History',
  },
  {
    id: randomID(),
    title: 'The Moonlight Boy',
    category: 'Action',
  },
  {
    id: randomID(),
    title: 'The Boy and the Giant',
    category: 'Kids',

  },
];

const store = createStore(rootReducer, {
  books: initialState,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
