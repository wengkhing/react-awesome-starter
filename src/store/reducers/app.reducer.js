// ActionTypes
export const SET_AUTH = '[APP] Set Auth'
export const START_LOADING = '[APP] Start Loading'
export const END_LOADING = '[APP] End Loading'
export const UPDATE_ERROR = '[APP] Update Error'
export const DO_NOTHING = '[APP] Do Nothing'

const initialState = {
  auth: false,
  isLoading: false,
  loaderMessage: 'Loading..',
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
    case UPDATE_ERROR:
      return { ...state,
        isLoading: false,
        error: action.payload }
    case DO_NOTHING:
    default:
      return state
  }
}
