import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import rootReducer from './reducers'

export default (history: Object, initialState: Object = {}) => {
  const enhancers = []
  const middleware = [
    thunk.withExtraArgument(axios),
    routerMiddleware(history)
  ]

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  )

  const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
  )

  return store
}
