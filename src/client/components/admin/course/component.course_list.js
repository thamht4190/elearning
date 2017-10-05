import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class CourseList extends Component {
    render() {
        if (!this.props.courseList) {
            return <div>Loading course list...</div>
        }
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Course</th>
                        <th>Number of lessons</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {_.map(this.props.courseList, (course, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{course.title}</td>
                                <td>{_.size(course.lessons)}</td>
                                <td>
                                    <a onClick={e => this.onEdit(course)}><i className="glyphicon glyphicon-pencil"></i> Edit</a>
                                    <a onClick={e => this.onDelete(course)}><i className="glyphicon glyphicon-remove"></i> Delete</a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ courseList }) {
    return { courseList }
}

export default connect(mapStateToProps)(CourseList);

