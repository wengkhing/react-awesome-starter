import * as auth from '../services/auth.api'
import { SET_AUTH } from '../reducers/app.reducer'
import { history } from '../../index'

export function initAuth () {
  return async dispatch => {
    const token = localStorage.getItem('auth')
      ? JSON.parse(localStorage.getItem('auth'))
      : null
    try {
      await auth.validateJwt(token.auth)
      dispatch({
        type: SET_AUTH,
        payload: token
      })
    } catch (err) {
      dispatch(logout())
    }
  }
}

export function login (credentials) {
  return dispatch => {
    auth.login(credentials).then(resp => {
      localStorage.setItem('auth', JSON.stringify(resp.data[0]))
      dispatch({
        type: SET_AUTH,
        payload: resp.data[0]
      })
    })
  }
}

export function logout () {
  history.push('/auth/login')
  localStorage.removeItem('auth')
  return {
    type: SET_AUTH,
    payload: null
  }
}
