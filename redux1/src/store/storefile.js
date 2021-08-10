import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import reducer from '../reducers/mainReducer';

// we are connecting store tot reducers
let store = createStore(reducer, applyMiddleware(logger));

export default store;