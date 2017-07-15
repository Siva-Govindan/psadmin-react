import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch(action.type) {
    case actionTypes.CREATE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.course)
      ];
  
    case actionTypes.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter((course, index) => index < action.index),
        Object.assign({}, action.course),
        ...state.filter((course, index) => index > action.index)
      ];

    case actionTypes.LOAD_COURSES_SUCCESS:
      return action.courses;

    default:
      return state;
  }
}
