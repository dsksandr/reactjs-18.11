import 'assets/global.css';

import React               from 'react';
import ReactDom            from 'react-dom';
import { Provider }        from 'react-redux';
import { Switch, Route }   from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { routes }         from 'routes/routes';
import { store, history } from 'store/store';

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        {routes.map((route, idx) => <Route key={idx} {...route} />)}
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
