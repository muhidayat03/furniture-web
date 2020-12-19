import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import './index.css';


import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
