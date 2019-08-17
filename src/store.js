import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import socketMiddleware from './middlewares/socketMiddleware';
import { messages } from './reducers/messages';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk, socketMiddleware];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const rootReducer = combineReducers({ messages });

const store = createStore(rootReducer, enhancer);

export default store;