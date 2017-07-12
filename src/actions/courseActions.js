import * as actionTypes from './actionTypes';
import courseApi from '../api/mockCourseApi';

// Redux action creators
export function loadCoursesSuccess(courses) {
  return { type: actionTypes.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSuccess(course, index) {
  return { type: actionTypes.UPDATE_COURSE_SUCCESS, course, index };
}

export function createCourseSuccess(course) {
  return { type: actionTypes.CREATE_COURSE_SUCCESS, course };
}

// Redux thunk actions
export function loadCourses() {
  return function(dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCourse(course, index) {
  return function(dispatch) {
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse, index)) :
        dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      throw(error);
    });
  };
}
