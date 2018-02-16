import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Helmet } from 'react-helmet'

class GroupSinglePage extends Component {
  render () {
    return (
      <div className='scope-group-single'>
        <Helmet title='Meetup Buzzer: Group Single' />
        <p>This is group single page</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(GroupSinglePage)
