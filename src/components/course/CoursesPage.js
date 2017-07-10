import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CourseForm from './CourseForm';
import CourseListRow from './CourseListRow';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.onSaveCourse = this.onSaveCourse.bind(this);
  }

  onSaveCourse(course) {
    this.props.actions.createCourse(course);
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map( (course, index) =>
          <CourseListRow key={index} course={course} />
        )}
        <CourseForm onSaveCourse={this.onSaveCourse} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  courses: state.courses
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(courseActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
