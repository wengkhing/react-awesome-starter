import { ERROR_MODAL } from '../../components/ModalWrapper/ModalWrapper'
// ActionTypes
export const SET_AUTH = '[APP] Set Auth'
export const START_LOADING = '[APP] Start Loading'
export const END_LOADING = '[APP] End Loading'
export const SET_MODAL = '[APP] Set Modal'
export const UPDATE_ERROR = '[APP] Update Error'
export const DO_NOTHING = '[APP] Do Nothing'

const initialState = {
  auth: false,
  loadStack: [],
  loaderMessage: 'Loading..',
  isInterruptiveLoading: false,
  modal: null,
  error: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return { ...state,
        auth: action.payload }
    case START_LOADING:
      return { ...state,
        isLoading: true,
        loaderMessage: action.payload ? action.payload : 'Loading..' }
    case END_LOADING:
      return { ...state,
        isLoading: false }
    case SET_MODAL:
      return { ...state,
        modal: action.payload }
    case UPDATE_ERROR:
      return { ...state,
        isLoading: false,
        modal: ERROR_MODAL,
        error: action.payload }
    case DO_NOTHING:
    default:
      return state
  }
}
