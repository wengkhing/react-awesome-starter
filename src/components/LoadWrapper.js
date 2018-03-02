import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Loader } from '../framework'

class LoadWrapper extends Component {
  render () {
    const { loadStack } = this.props
    return <Loader isLoading={loadStack && loadStack.length > 0}
      duration={30000}
      strokeWidth={0.5}
      color='#cd4567' />
  }
}

function mapStatetoProps ({ app }) {
  return {
    loadStack: app.loadStack
  }
}

export default connect(mapStatetoProps)(LoadWrapper)
