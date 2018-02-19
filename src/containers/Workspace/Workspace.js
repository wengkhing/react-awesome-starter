import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { workspaceRoutes } from '../../App.routes'
import { renderRoutes } from '../../helpers/render-routes'
// import MenuBar from '../../components/MenuBar'

import './Workspace.scss'

class Workspace extends Component {
  render () {
    return (
      <div className='scope-workspace'>
        <Switch>
          {renderRoutes(workspaceRoutes)}
        </Switch>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    state
  }
}

export default connect(mapStateToProps)(Workspace)
