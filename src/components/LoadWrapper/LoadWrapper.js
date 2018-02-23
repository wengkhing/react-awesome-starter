import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Loader } from '../../framework'

class LoadWrapper extends Component {
  render () {
    return <Loader isLoading={this.props.isLoading}
      duration={30000}
      strokeWidth={0.5}
      color='#cd4567' />
  }
}

function mapStatetoProps ({ app }) {
  return {
    isLoading: app.isLoading
  }
}

export default connect(mapStatetoProps)(LoadWrapper)
