import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action){
  if(action.type == actionTypes.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if(action.type == actionTypes.END_AJAX_CALL) {
    return state - 1;
  }

  return state;
}