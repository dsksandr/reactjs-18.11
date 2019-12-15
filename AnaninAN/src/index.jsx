import 'assets/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router';

import { routes } from './routes';
import { store, history } from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        {routes.map((route, idx) => <Route key={idx} {...route} />)}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);