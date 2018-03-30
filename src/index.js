import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';  //imports ability to hold a global store of vlaues for redux
import reducer from './reducers';   //imports reducer to interpret actions that have been created
import './index.css'; //imports css to ensure that everything aligns nicely


const store = createStore(reducer);  //create a store using a basic constructor function

//import the apps
//in order to import a Provider, just add the appropriate tags
//we need to have created a store for the provider tag to work
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
