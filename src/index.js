

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logger from './utils/ReactLogger'
import App from './App';



import {createStore} from 'redux';
import {Provider} from 'react-redux'
import reducer from './reducer'

import registerServiceWorker from './registerServiceWorker';
import AppRouter from './AppRouter';

const electron = window.require('electron');
const fs = electron.remote.require('fs');
const ipcRenderer  = electron.ipcRenderer;






const store = createStore(reducer)
//ipcRenderer.send('react:log', store.getState());
 

const jsx = 
(<Provider store= {store} >
    <AppRouter/>
</Provider>)

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
