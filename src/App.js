import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { renderRoutes } from './helpers/render-routes'
import { appRoutes } from './App.routes'
// import VersionChecker from './components/VersionChecker'
import { Loader } from './framework'

import 'font-awesome/css/font-awesome.min.css'
import './App.scss'

class App extends Component {
  render () {
    return (
      <div className='scope-app'>
        <Loader isLoading={this.props.isLoading} />
        <Helmet title='Meetup Buzzer' />
        <Switch>
          <Route path='/' exact
            render={() => (
              <Redirect to='/kitchen/sink' />
          )} />
          {renderRoutes(appRoutes)}
        </Switch>
      </div>
    )
  }
}

function mapStatetoProps ({ app }) {
  return {
    isLoading: app.isLoading
  }
}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators({}, dispatch)
}

// withRouter is needed
export default withRouter(connect(mapStatetoProps, mapDispatchtoProps)(App))
