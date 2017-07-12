import * as actionTypes from './actionTypes';
import authorApi from '../api/mockAuthorApi';

// Redux action creators
export function loadAuthorsSuccess(authors) {
  return { type: actionTypes.LOAD_AUTHORS_SUCCESS, authors };
}


// Redux thunk actions
export function loadAuthors() {
  return function(dispatch) {
    return authorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  }
}
