import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import thunk from 'redux-thunk';

import App from './components/app';
import Wiki from './components/wiki';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/wiki" component={Wiki} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.root'));
