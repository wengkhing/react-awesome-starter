import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { StyleRoot } from 'radium'

import { renderRoutes } from './helpers/render-routes'
import { appRoutes } from './App.routes'
import LoadWrapper from './components/LoadWrapper'
import InterruptiveLoadWrapper from './components/InterruptiveLoadWrapper'
import ModalWrapper from './components/ModalWrapper'

import 'font-awesome/css/font-awesome.min.css'
import './App.scss'

class App extends Component {
  render () {
    return (
      <StyleRoot>
        <div className='scope-app'>
          <ModalWrapper />
          <LoadWrapper />
          <InterruptiveLoadWrapper />
          <Helmet title='Meetup Buzzer' />
          <Switch>
            <Route path='/' exact
              render={() => (
                <Redirect to='/kitchen/sink' />
            )} />
            {renderRoutes(appRoutes)}
          </Switch>
        </div>
      </StyleRoot>
    )
  }
}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators({}, dispatch)
}

// withRouter is needed
export default withRouter(connect(null, mapDispatchtoProps)(App))
