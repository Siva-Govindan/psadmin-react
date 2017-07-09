import React, { PropTypes } from 'react';

class CourseForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: '' }
    };

    // Bind functions to the 'this' context
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course });
  }

  onSaveClick() {
    alert(this.state.course.title);
  }

  render() {
    return (
      <div>
        <h2> Add Course </h2>
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
          onClick={this.onSaveClick}
          />
      </div>
    );
  }
}

CourseForm.propTypes = {

};

export default CourseForm;