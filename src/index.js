import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import createHistory from 'history/createBrowserHistory'

import './index.css'
import './styles/reset.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const history = createHistory()
const store = configureStore(history)

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
