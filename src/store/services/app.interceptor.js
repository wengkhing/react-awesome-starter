import axios from 'axios'
import { store } from '../../index'
import { START_LOADING, END_LOADING, UPDATE_ERROR } from '../reducers/app.reducer'

export default async function customAxios ({ loadMessage, ...payload }) {
  const request = { ...payload }
  const token = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : null
  if (token) {
    request.headers = {
      'Authorization': `Bearer ${token.auth_key}`
    }
  }
  try {
    startLoading(loadMessage)
    const result = await axios(request)
    endLoading()
    return Promise.resolve(result.data)
  } catch (err) {
    updateError(err.response)
    return Promise.reject(err.response)
  }
}

function startLoading (msg) {
  store.dispatch({
    type: START_LOADING,
    payload: msg
  })
}

function endLoading () {
  store.dispatch({ type: END_LOADING })
}

function updateError (err) {
  store.dispatch({
    type: UPDATE_ERROR,
    payload: err
  })
}
