import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Helmet } from 'react-helmet'

class GroupOverviewPage extends Component {
  render () {
    return (
      <div className='scope-group-overview'>

        <Helmet title='Meetup Buzzer: Group Overview' />
        <p>This is group overview page</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(GroupOverviewPage)
