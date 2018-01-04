export const INIT = '[APP] Initialize'

function init () {
  return dispatch => {
    dispatch({
      type: INIT
    })
  }
}

export const app = {
  init: init()
}
