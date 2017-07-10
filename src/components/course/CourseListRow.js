import React, { PropTypes } from 'react';

const CourseListRow = props => {
  return (
    <div>
      {props.course.title}
    </div>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseListRow;