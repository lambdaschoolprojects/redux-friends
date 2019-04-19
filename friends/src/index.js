import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import { Provider } from 'react-redux';
import {rootReducer} from "./reducers";
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(rootReducer,
    applyMiddleware(thunk, reduxLogger));

ReactDOM.render(<Router><Provider store={store}><App /></Provider></Router>, document.getElementById('root'));

