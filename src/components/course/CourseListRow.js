import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';

import { deleteCourse } from '../../actions/courseActions';

class CourseListRow extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onDeleteClick() {
    toastr.success('Course deleted!');
    this.props.dispatch(deleteCourse(this.props.course, this.props.index));
  }

  render() {
    const { course, index, onClick } = this.props;
    return (
      <tr>
        <td> <a href={course.watchHref} target="_blank"> Watch </a> </td>
        <td> <Link to={'/course/' + course.id + '/' + index}> {course.title} </Link> </td>
        <td> {course.authorId} </td>
        <td> {course.category} </td>
        <td> {course.length} </td>
        <td>
          <button type="button" className="btn btn-danger btn-sm" onClick={this.onDeleteClick}>
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span> 
          </button>
        </td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
  index: PropTypes.number,
  onClick: PropTypes.func,
  dispatch: PropTypes.func.isRequired
};

export default connect()(CourseListRow);
