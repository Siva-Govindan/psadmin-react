import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CourseList from './CourseList';

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const  {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses} />
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
