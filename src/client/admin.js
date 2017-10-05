import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import thunk from 'redux-thunk';

import CourseList from './components/admin/course/list';
import reducers from './reducers/admin';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        {/* <Route path="/admin/courses" component={CourseList} /> */}
        <Route path="/admin/" component={CourseList} />
      </Switch> 
    </BrowserRouter>
  </Provider>
  , document.querySelector('.root'));
