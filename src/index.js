

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logger from './utils/ReactLogger'
import App from './App';


import thunk from "redux-thunk";
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer'


import AppRouter from './AppRouter';

//const electron = window.require('electron');
//const fs = electron.remote.require('fs');
//const ipcRenderer  = electron.ipcRenderer;



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, 
    composeEnhancers(applyMiddleware(thunk)))
//ipcRenderer.send('react:log', store.getState());
 

const jsx = 
(<Provider store= {store} >
    <AppRouter/>
</Provider>)

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
