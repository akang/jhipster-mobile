import rootReducer, {IRootState} from './reducers/root.reducer';
import {applyMiddleware, compose, createStore} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import errorMiddleware from './config/error-middleware';

const defaultMiddlewares = [
    thunkMiddleware,
    errorMiddleware,
    promiseMiddleware
]

const composedMiddlewares = middlewares => compose(applyMiddleware(...defaultMiddlewares,...middlewares));
const store = (initialState?: IRootState, middlewares = []) => createStore(rootReducer, initialState, composedMiddlewares(middlewares));

export default store;
