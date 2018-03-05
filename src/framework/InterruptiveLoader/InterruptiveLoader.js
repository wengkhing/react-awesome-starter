import React, { Component } from 'react'
import { Transition } from 'react-transition-group'

import './InterruptiveLoader.scss'

const loaderTransition = {
  exited: {
    padding: '120px 60px 90px 60px',
    opacity: 0
  },
  exiting: {
    padding: '120px 60px 90px 60px',
    opacity: 0
  },
  entering: {
    padding: '120px 60px 90px 60px',
    opacity: 0
  },
  entered: {
    padding: '60px 60px 30px 60px',
    opacity: 1
  }
}

const overlayTransition = {
  exited: { opacity: 0 },
  exiting: { opacity: 0 },
  entering: { opacity: 0 },
  entered: { opacity: 1 }
}

export class InterruptiveLoader extends Component {
  componentDidUpdate () {
    document.body.style.overflow = this.props.isLoading ? 'hidden' : ''
  }

  renderLoader () {
    const { isLoading, message } = this.props
    return (
      <Transition in={isLoading}
        timeout={{ enter: 0, exit: 400 }}
        appear
        unmountOnExit>
        {(state) => (
          <div className='loader-wrapper'>
            <div style={{ ...overlayTransition[state] }}
              className='overlay' />
            <div style={{ ...loaderTransition[state] }}
              className='loader'>
              <div className='spinner' />
              <p>{message || 'Spinning up the hamster'}</p>
            </div>
          </div>
        )}
      </Transition>
    )
  }

  render () {
    return (
      <div className='af-interruptive-loader-module'>
        {this.renderLoader()}
      </div>
    )
  }
}
