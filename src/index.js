

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logger from './utils/ReactLogger'
import App from './App';



import {createStore} from 'redux';
import {Provider} from 'react-redux'
import reducer from './reducer'

import registerServiceWorker from './registerServiceWorker';

const electron = window.require('electron');
const fs = electron.remote.require('fs');
const ipcRenderer  = electron.ipcRenderer;






const store = createStore(reducer)
ipcRenderer.send('react:log', store.getState());
logger.info("Johnnys")
//logger.info(store.getState()) 
//console.log(store.getState()) 

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
