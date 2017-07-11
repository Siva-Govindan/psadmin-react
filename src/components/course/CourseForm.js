import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as courseActions from '../../actions/courseActions';

class CourseForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: '' }
    };

    // Bind functions to the 'this' context
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course });
  }

  onFormSubmit(event) {
    event.preventDefault();
    if(this.state.course.title === '') {
      return;
    }
  
    this.props.actions.createCourse(this.state.course);
    this.setState({ course: { title: '' } });
  }

  render() {
    return (
      <div>
        <h2> Add Course </h2>
        <form onSubmit={this.onFormSubmit}>
          <input 
            type="text"
            className="form-control"
            onChange={this.onTitleChange}
            value={this.state.course.title}
            placeholder="Add Course"
            />

          <br />
          <input
            type="submit"
            className="btn btn-primary"
            value="Save"
            />
        </form>
      </div>
    );
  }
}

CourseForm.propTypes = {
  actions: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(courseActions, dispatch)
});

export default connect(null, mapDispatchToProps)(CourseForm);
