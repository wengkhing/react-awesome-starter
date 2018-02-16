import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Helmet } from 'react-helmet'

class GroupEditPage extends Component {
  render () {
    return (
      <div className='scope-group-edit'>
        <Helmet title='Meetup Buzzer: Group Edit' />
        <p>This is group edit page</p>
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
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupEditPage)
