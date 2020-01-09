import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware }             from 'connected-react-router';
import { createBrowserHistory }         from 'history';
import logger                           from 'redux-logger';
import thunk                            from 'redux-thunk';

import { initReducer } from 'reducers';


export const history = createBrowserHistory();

export const store = createStore(
  initReducer(history),
  applyMiddleware(
    routerMiddleware(history),
    thunk,
    logger
  )
);
