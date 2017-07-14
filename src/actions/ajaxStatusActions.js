import * as actionTypes from './actionTypes';

export function beginAjaxCall() {
  return { type: actionTypes.BEGIN_AJAX_CALL }
}

export function endAjaxCall() {
  return { type: actionTypes.END_AJAX_CALL }
}
