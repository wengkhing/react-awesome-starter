import { SET_MODAL } from '../reducers/app.reducer'

export function setModal (modal) {
  return dispatch => {
    dispatch({
      type: SET_MODAL,
      payload: modal
    })
  }
}
