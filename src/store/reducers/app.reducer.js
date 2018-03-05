import { ERROR_MODAL } from '../../components/ModalWrapper'
// ActionTypes
export const SET_AUTH = '[APP] Set Auth'
export const START_INT_LOADING = '[APP] Start Interruptive Loading'
export const END_INT_LOADING = '[APP] End Interruptive Loading'
export const START_STACK_LOADING = '[APP] Start Stack Loading'
export const END_STACK_LOADING = '[APP] End Stack Loading'
export const SET_MODAL = '[APP] Set Modal'
export const UPDATE_ERROR = '[APP] Update Error'
export const DO_NOTHING = '[APP] Do Nothing'

const initialState = {
  auth: false,
  loadStack: [],
  intLoadStack: [],
  modal: null,
  error: null
}

export default function (state = initialState, action) {
  const { payload, type } = action
  let updatedStack
  switch (type) {
    case SET_AUTH:
      return { ...state,
        auth: payload }
    case START_INT_LOADING:
      return { ...state,
        intLoadStack: [...state.intLoadStack, payload] }
    case END_INT_LOADING:
      updatedStack = state.intLoadStack.filter(item => item !== payload)
      return { ...state,
        intLoadStack: updatedStack }
    case START_STACK_LOADING:
      return { ...state,
        loadStack: [...state.loadStack, payload] }
    case END_STACK_LOADING:
      updatedStack = state.loadStack.filter(item => item !== payload)
      return { ...state,
        loadStack: updatedStack }
    case SET_MODAL:
      return { ...state,
        modal: payload }
    case UPDATE_ERROR:
      return { ...state,
        modal: ERROR_MODAL,
        error: payload }
    case DO_NOTHING:
    default:
      return state
  }
}
