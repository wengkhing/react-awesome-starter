import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import configureStore from './store'
import createHistory from 'history/createBrowserHistory'

import './index.css'
import './styles/reset.css'
import App from './App'
// Uncomment the following line for PWA
// import registerServiceWorker from './registerServiceWorker'

export const history = createHistory()
export const store = configureStore(history)

ReactDOM.render(
  <Provider store={store} >
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
// registerServiceWorker()
