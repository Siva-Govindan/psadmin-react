import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';

import CourseForm from './CourseForm';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state ={
      course: Object.assign({}, this.props.course),
      errors: {},
      saving: false
    };

    this.onChangeCourseField = this.onChangeCourseField.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
  }

  // Life cycle methods
  componentWillReceiveProps(nextProps) {
    if (this.props.course.id !== nextProps.course.id) {
      this.setState({ course: Object.assign({}, nextProps.course) });
    }
  }

  onChangeCourseField(event) {
    const field = event.target.name;
    const course = Object.assign({}, this.state.course);
    course[field] = event.target.value;

    let errors = this.state.errors;
    errors[field] = (!course[field]) ? this.errorMesssage(field) : null;

    this.setState({ course });
    this.setState({ errors });
  }

  onSaveClick(event) {
    event.preventDefault();

    let hasErrors = false;
    for(let field in this.state.course){
      if(!this.state.course[field]) {
        let errors = this.state.errors;
        errors[field] = this.errorMesssage(field);
        this.setState({ errors });
        hasErrors = true;
      }
    }

    if(hasErrors) {
      return;
    }

    if(JSON.stringify(this.state.course) == JSON.stringify(this.props.course)){
      toastr.info('No changes made');
      return;
    }

    this.setState({ saving: true });
    this.props.actions.saveCourse(this.state.course, this.props.index)
      .then(() => {
        this.redirect();
      })
      .catch(error => {
        toastr.error(error);
        this.setState({ saving: false });
      });
  }

  errorMesssage(field) {
    let message = '';
    switch (field) {
      case 'title':
        message = '"Title" cannot be blank';
        break;
      
      case 'watchHref':
        message = '"Course Link" cannot be blank';
        break;
      
      case 'authorId':
        message = 'Select Author';
        break;
      
      case 'category':
        message = '"Category" cannot be blank';
        break;
      
      case 'length':
        message = '"Length" cannot be blank';
        break;

      default:
        break;
    }

    return message;
  }

  redirect() {
    toastr.success('Course saved!');
    this.setState({ saving: false });
    this.context.router.push('/courses');
  }

  render() {    
    return (
      <CourseForm
        course={this.state.course}
        errors={this.state.errors}
        onChange={this.onChangeCourseField}
        allAuthors={this.props.authors}
        onSave={this.onSaveClick}
        saving={this.state.saving}
          />
    );
  }
}

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id == id);
  if(course.length) return course[0];
  return null;
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  index: PropTypes.string,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// Pull in react router context
ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  const index = ownProps.params.index || '';
  const courseId = ownProps.params.id;
  let course = { title: '', authorId: '', length: '', watchHref: '', category: '' };

  if(courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

  const authorsFormattedForDropdown = state.authors.map( author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });

  return {
    course,
    index,
    authors: authorsFormattedForDropdown
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(courseActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
