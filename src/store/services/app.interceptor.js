import axios from 'axios'
import { store } from '../../index'
import {
  START_INT_LOADING,
  END_INT_LOADING,
  START_STACK_LOADING,
  END_STACK_LOADING,
  UPDATE_ERROR
} from '../reducers/app.reducer'

export default async function customAxios ({ intLoadKey, loadKey, ...payload }) {
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
    startLoading(intLoadKey, loadKey)
    const result = await axios(request)
    return Promise.resolve(result.data)
  } catch (err) {
    console.error(err)
    updateError(err)
    return Promise.reject(err.response)
  } finally {
    endLoading(loadKey)
  }
}

function startLoading (intKey, key) {
  if (key) {
    store.dispatch({
      type: START_STACK_LOADING,
      payload: key
    })
  } else {
    store.dispatch({
      type: START_INT_LOADING,
      payload: intKey
    })
  }
}

function endLoading (intKey, key) {
  if (key) {
    store.dispatch({
      type: END_STACK_LOADING,
      payload: key
    })
  } else {
    store.dispatch({
      type: END_INT_LOADING,
      payload: intKey
    })
  }
}

function updateError (err) {
  store.dispatch({
    type: UPDATE_ERROR,
    payload: err
  })
}
