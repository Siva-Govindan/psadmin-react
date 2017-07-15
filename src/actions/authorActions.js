import * as actionTypes from './actionTypes';
import authorApi from '../api/mockAuthorApi';
import { beginAjaxCall, endAjaxCall } from './ajaxStatusActions';

// Redux action creators
export function loadAuthorsSuccess(authors) {
  return { type: actionTypes.LOAD_AUTHORS_SUCCESS, authors };
}


// Redux thunk actions
export function loadAuthors() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return authorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
      dispatch(endAjaxCall());
    }).catch(error => {
      dispatch(endAjaxCall());
      throw(error);
    });
  };
}
