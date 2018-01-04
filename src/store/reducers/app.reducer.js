// ActionTypes
import {
  INIT
} from '../actions/app.action'

const initialState = {
}

export default function (state = initialState, action) {
  switch (action.type) {
    case INIT:
      return state
    default:
      return state
  }
}
