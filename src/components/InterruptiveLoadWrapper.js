import React, { Component } from 'react'
import { connect } from 'react-redux'
import { InterruptiveLoader } from '../framework'

class InterruptiveLoadWrapper extends Component {
  render () {
    return <InterruptiveLoader {...this.props} />
  }
}

function mapStatetoProps ({ app }) {
  return {
    isLoading: app.isInterruptiveLoading,
    message: app.loaderMessage
  }
}

export default connect(mapStatetoProps)(InterruptiveLoadWrapper)
