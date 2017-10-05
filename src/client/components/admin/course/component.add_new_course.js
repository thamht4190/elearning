import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewCourseModal from '../common/component.new_course_modal';

class AddNewCourse extends Component {
    constructor(props) {
        super(props);

        this.state = { isNewCourseModalOpen: false }
    }
    onBtnClick() {
        this.setState({ isNewCourseModalOpen: true });
    }
    onNewCourseModalClose() {
        this.setState({ isNewCourseModalOpen: false });
    }
    render() {
        return (
            <div className="padding0510">
                <button className="btn ebtn" onClick={this.onBtnClick.bind(this)}><i className="glyphicon glyphicon-plus"></i> Add New Course</button>
                <NewCourseModal modalIsOpen={this.state.isNewCourseModalOpen} onClose={this.onNewCourseModalClose.bind(this)} />
            </div>
        )
    }
}

export default connect(null, {})(AddNewCourse);