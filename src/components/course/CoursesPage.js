import React, { Component, PropTypes } from 'react';
import CourseForm from './CourseForm';

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      courses,
    }
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <CourseForm />
      </div>
    );
  }
}

CoursesPage.propTypes = {

};

export default CoursesPage;