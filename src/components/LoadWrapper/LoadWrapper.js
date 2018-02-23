import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Loader } from '../../framework'

class LoadWrapper extends Component {
  render () {
    return <Loader isLoading={this.props.isLoading} />
  }
}

function mapStatetoProps ({ app }) {
  return {
    isLoading: app.isLoading
  }
}

export default connect(mapStatetoProps)(LoadWrapper)
