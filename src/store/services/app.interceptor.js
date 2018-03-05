import axios from 'axios'
import { store } from '../../index'
import {
  START_INT_LOADING,
  END_INT_LOADING,
  START_STACK_LOADING,
  END_STACK_LOADING,
  UPDATE_ERROR
} from '../reducers/app.reducer'

export default async function customAxios ({ isInterruptive, loadKey, ...payload }) {
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
    startLoading(loadKey, isInterruptive)
    const result = await axios(request)
    return Promise.resolve(result.data)
  } catch (err) {
    console.error(err)
    updateError(err)
    return Promise.reject(err.response)
  } finally {
    endLoading(loadKey, isInterruptive)
  }
}

function startLoading (key, isInterruptive) {
  store.dispatch({
    type: isInterruptive ? START_INT_LOADING : START_STACK_LOADING,
    payload: key
  })
}

function endLoading (key, isInterruptive) {
  store.dispatch({
    type: isInterruptive ? END_INT_LOADING : END_STACK_LOADING,
    payload: key
  })
}

function updateError (err) {
  store.dispatch({
    type: UPDATE_ERROR,
    payload: err
  })
}
