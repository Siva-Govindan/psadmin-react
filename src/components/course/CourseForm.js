import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import Button from '../common/Button';

const CourseForm = props => {
  return (
      <form>
        {props.course.id ? <h1> Manage Course </h1> : <h1> Add Course </h1>}
      
        <TextInput
          name="title"
          label="Title"
          value={props.course.title}
          onChange={props.onChange}
          error={props.errors.title}
          />

        <TextInput
          name="watchHref"
          label="Course Link"
          value={props.course.watchHref}
          onChange={props.onChange}
          error={props.errors.watchHref}
          />
        
        <SelectInput
          name="authorId"
          label="Author"
          value={props.course.authorId}
          defaultOption="Select Author"
          options={props.allAuthors}
          onChange={props.onChange}
          error={props.errors.authorId}
          />

        <TextInput
          name="category"
          label="Category"
          value={props.course.category}
          onChange={props.onChange}
          error={props.errors.category}
          />

        <TextInput
          name="length"
          label="Length"
          value={props.course.length}
          onChange={props.onChange}
          error={props.errors.length}
          />
        
        <Button
          type="submit"
          disabled={props.saving ? props.saving : !props.errors}
          value={props.saving ? 'Saving...' : 'Save'}
          onClick={props.onSave}
          />

          &nbsp;
        <Link to="/courses" className="btn btn-default"> Back </Link>
      </form>
  );
};

CourseForm.contextTypes = {
  router: PropTypes.object
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  saving: PropTypes.bool,
  errors: PropTypes.object,
  onChange: PropTypes.func,
  onSave: PropTypes.func
};

export default CourseForm;

