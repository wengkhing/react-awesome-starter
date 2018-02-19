import React, { Component } from 'react'
import ProgressBar from 'progressbar.js'

import './Loader.scss'

export class Loader extends Component {
  componentDidUpdate () {
    const {
      duration = 8000,
      color = '#4567cd',
      isLoading = false,
      strokeWidth = 1,
      trailColor = 'rgba(130, 130, 130, 0.5)'
    } = this.props

    if (isLoading) {
      this.loader = new ProgressBar.Line(
        '.component-loader',
        { color, trailColor, strokeWidth })
      this.loader.animate(1, { duration })
    } else {
      if (this.loader) {
        setTimeout(() => {
          this.loader.set(1)
          setTimeout(() => {
            if (this.loader) this.loader.destroy()
          }, 900)
        }, 500)
      }
    }
  }

  render () {
    return (
      <div className='component-loader' />
    )
  }
}
