import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CourseForm from './CourseForm';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state ={
      course: Object.assign({}, this.props.course),
      errors: {}
    };

    this.onChangeCourseField = this.onChangeCourseField.bind(this);
  }

  onChangeCourseField(event) {
    const field = event.target.name;
    const course = Object.assign({}, this.state.course);
    course[field] = event.target.value;
    this.setState({ course });
  }

  render() {
    return (
      <CourseForm
        course={this.state.course}
        errors={this.state.errors}
        onChange={this.onChangeCourseField}
        allAuthors={this.props.authors}
          />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
  // const course = state.courses.filter( course => course.id == this.props.params.id);
  const authorsFormattedForDropdown = state.authors.map( author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });

  return {
    course: state.courses[0],
    authors: authorsFormattedForDropdown
  };
};


const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators(dispatch, courseActions)
});

export default connect(mapStateToProps)(ManageCoursePage);
