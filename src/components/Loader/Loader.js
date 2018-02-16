import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProgressBar from 'progressbar.js'

import './Loader.scss'

class Loader extends Component {
  componentDidUpdate () {
    if (this.props.isLoading) {
      this.loader = new ProgressBar.Line('.component-loader', {
        color: '#4567cd',
        trailColor: 'rgba(130, 130, 130, 0.5)',
        strokeWidth: 1.2
      })
      this.loader.animate(1, { duration: 8000 })
    } else {
      setTimeout(() => {
        this.loader.set(1)
        setTimeout(() => {
          if (this.loader) this.loader.destroy()
        }, 300)
      }, 500)
    }
  }

  render () {
    return (
      <div className='component-loader' />
    )
  }
}

function mapStateToProps ({ app }) {
  return {
    isLoading: app.isSubmitting
  }
}

export default connect(mapStateToProps)(Loader)
