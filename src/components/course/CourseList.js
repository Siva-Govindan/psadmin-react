import React, { PropTypes } from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({ courses }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <td> S/N </td>
          <td> Title</td>
          <td> Author </td>
          <td> Category </td>
          <td> Length </td>
          <td> </td>
        </tr>
      </thead>
      <tbody>
        {courses.map( (course, index) =>
          <CourseListRow key={index} course={course} index={index} />
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;
