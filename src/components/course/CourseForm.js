import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import Button from '../common/Button';

const CourseForm = props => {
  return (
      <form>
        <h1> Manage Course </h1>
        <TextInput
          name="title"
          label="Title"
          value={props.course.title}
          onChange={props.onChange}
          error={props.errors.title}
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
          disabled={props.loading}
          value={props.loading ? 'Saving...' : 'Save'}
          onClick={props.onSave}
          />
      </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  loading: PropTypes.bool,
  errors: PropTypes.object,
  onChange: PropTypes.func,
  onSave: PropTypes.func
};

export default CourseForm;

