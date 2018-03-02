import axios from 'axios'
import { store } from '../../index'
import {
  START_INT_LOADING,
  END_INT_LOADING,
  START_STACK_LOADING,
  END_STACK_LOADING,
  UPDATE_ERROR
} from '../reducers/app.reducer'

export default async function customAxios ({ loadMessage, loadKey, ...payload }) {
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
    startLoading(loadMessage, loadKey)
    const result = await axios(request)
    endLoading(loadKey)
    return Promise.resolve(result.data)
  } catch (err) {
    updateError(err.response)
    return Promise.reject(err.response)
  }
}

function startLoading (msg, key) {
  if (key) {
    store.dispatch({
      type: START_STACK_LOADING,
      payload: key
    })
  } else {
    store.dispatch({
      type: START_INT_LOADING,
      payload: msg
    })
  }
}

function endLoading (key) {
  if (key) {
    store.dispatch({
      type: END_STACK_LOADING,
      payload: key
    })
  } else {
    store.dispatch({
      type: END_INT_LOADING,
    })
  }
}

function updateError (err) {
  store.dispatch({
    type: UPDATE_ERROR,
    payload: err
  })
}
