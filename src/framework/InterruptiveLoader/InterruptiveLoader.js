import React, { Component } from 'react'

import './InterruptiveLoader.scss'

export class InterruptiveLoader extends Component {
  componentDidUpdate () {
    document.body.style.overflow = this.props.isLoading ? 'hidden' : ''
  }

  renderLoader () {
    const { isLoading, message } = this.props
    if (isLoading) {
      return (
        <div className='loader-wrapper'>
          <div className='overlay' />
          <div className='loader'>
            <div className='spinner' />
            <p>{message || 'Spinning up the hamster'}</p>
          </div>
        </div>
      )
    }
  }

  render () {
    return (
      <div className='af-interruptive-loader-module'>
        {this.renderLoader()}
      </div>
    )
  }
}
