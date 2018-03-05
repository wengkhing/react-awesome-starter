import React, { Component } from 'react'
import { connect } from 'react-redux'
import { InterruptiveLoader } from '../framework'

class InterruptiveLoadWrapper extends Component {
  render () {
    const { loadStack } = this.props
    return <InterruptiveLoader
      isLoading={loadStack && loadStack.length > 0}
      message={loadStack[0]} />
  }
}

function mapStatetoProps ({ app }) {
  return {
    loadStack: app.intLoadStack
  }
}

export default connect(mapStatetoProps)(InterruptiveLoadWrapper)
