import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import CourseList from './CourseList';
import Button from '../common/Button';

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    const  {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <Button type="button" value="Add Course" onClick={this.redirectToAddCoursePage} />
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
