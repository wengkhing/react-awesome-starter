import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { workspaceRoutes } from '../../App.routes'
import { renderRoutes } from '../../helpers/render-routes'
import { MenuBar, MenuItem } from '../../framework'
import { logout } from '../../store/actions/auth.action'

import './Workspace.scss'

class Workspace extends Component {
  render () {
    return (
      <div className='scope-workspace'>
        <MenuBar>
          <MenuItem to='/manage/group/overview' icon='tachometer'>Groups</MenuItem>
          <MenuItem onClick={this.props.logout} icon='sign-out' >Logout</MenuItem>
        </MenuBar>
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

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ logout }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Workspace)
