import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';

import config from '../../config/config';
import pc from './reducer/pc';
import mobile from './reducer/mobile';
import user from './reducer/user';

let devToolsEnhancer = null;
if (process.env.NODE_ENV === 'development') {
    devToolsEnhancer = require('remote-redux-devtools');
}

const reducers = combineReducers({ pc, mobile, user });
let store = null;
if (devToolsEnhancer) {
    store = createStore(reducers, devToolsEnhancer.default({ realtime: true, port: config.reduxDevPort }));
}
else {
    store = createStore(reducers);
}
export default store;
