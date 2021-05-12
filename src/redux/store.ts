import rootReducer,{IRootState} from './root.reducer';
import {applyMiddleware, compose, createStore} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

const defaultMiddlewares = [
    promiseMiddleware
]

const composedMiddlewares = middlewares => compose(applyMiddleware(...defaultMiddlewares,...middlewares));
const store = (initialState?: IRootState, middlewares = []) => createStore(rootReducer, initialState, composedMiddlewares(middlewares));

export default store;
