import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import * as serviceWorker from './serviceWorker';
import Router from './routes/routes'
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import './unitls/public640'
ReactDOM.render(
    // <Provider>
        <Router />
    // </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
