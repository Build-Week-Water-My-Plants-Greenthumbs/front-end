import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom'
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import reducers from './reducers/index';


const store = createStore(
  reducers, 
  compose(
  applyMiddleware(thunk), 
  window.devToolsExtension ? window.devToolsExtension() : f => f
  ));


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


