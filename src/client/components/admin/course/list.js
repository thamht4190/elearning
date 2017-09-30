import React, { Component } from 'react';

import Header from '../../common/component.header';
import CourseList from './component.course_list';

class CourseListPage extends Component {
    render() {
        return (
            <div className="course-list-page">
                <Header />
                <CourseList />
            </div>
        )
    }
}

export default CourseListPage;