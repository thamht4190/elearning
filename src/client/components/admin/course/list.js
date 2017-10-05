import React, { Component } from 'react';

import Header from '../common/component.header';
import CourseList from './component.course_list';
import AddNewCourse from './component.add_new_course';

class CourseListPage extends Component {
    render() {
        return (
            <div className="course-list-page">
                <Header />
                <div className="main-panel">
                    <div className="content">
                        <CourseList />
                    </div>
                </div>
                <AddNewCourse />
            </div>
        )
    }
}

export default CourseListPage;