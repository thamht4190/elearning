import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { Field, reduxForm } from 'redux-form';

import { createCourse } from '../../../actions/admin/action.course';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class NewCourseModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: props.modalIsOpen
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      modalIsOpen: nextProps.modalIsOpen
    });
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.onClose();
  }

  onSubmit(values) {
      this.props.createCourse(values, res => {
        if (res.status == 200 && res.data) {
          window.location = `/admin/course/${res.data._id}/edit`;
          this.closeModal();
        }
      });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Create a new course"
        >
        <div className="mt-modal new-course-modal">
          <div className="header">
            <h4>Create a new course</h4>
          </div>
          <div className="content">
            <form className="create-course-form" onSubmit={handleSubmit(this.onSubmit.bind(this))} >
                    <div className="form-group row">
                        <div className="col-xs-4 text-right">Course Title</div>
                        <div className="col-xs-8">
                            <Field name="title" component="input" type="text" className="form-control" />
                        </div>
                    </div>
                <hr />
                <div className="pull-right">
                  <button className="btn btn-default btn-right" onClick={this.closeModal}>Cancel</button>
                  <button className="btn btn-primary btn-right" type="submit">Create</button>
                </div>
            </form>
          </div>
        </div>
        </Modal>
    );
  }
}

NewCourseModal = reduxForm({
  form: 'new-course-form'
})(NewCourseModal)

export default connect(null, { createCourse })(NewCourseModal);