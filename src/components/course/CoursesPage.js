import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CourseForm from './CourseForm';
import CourseListRow from './CourseListRow';

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map( (course, index) =>
          <CourseListRow key={index} course={course} />
        )}
        <CourseForm />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  courses: state.courses
});

export default connect(mapStateToProps)(CoursesPage);
