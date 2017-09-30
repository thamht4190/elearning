import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CourseListPage from './course/list';

class Admin extends Component {
    render() {
        return (
            <BrowserRouter>
            <Switch>
                <Route path="/course/list" component={CourseListPage} />
            </Switch>
            </BrowserRouter>
        )
    }
}