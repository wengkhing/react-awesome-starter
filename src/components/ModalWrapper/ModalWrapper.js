import React, { Component } from 'react'
import { connect } from 'react-redux'

class LoadWrapper extends Component {
  render () {
    return <div />
  }
}

function mapStatetoProps ({ app }) {
  return {
  }
}

export default connect(mapStatetoProps)(LoadWrapper)
