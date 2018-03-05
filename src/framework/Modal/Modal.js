import React, { Component } from 'react'
import { Transition } from 'react-transition-group'
import _ from 'lodash'

import './Modal.scss'

const modalTransition = {
  exited: {
    transform: 'translateY(-22px)',
    opacity: 0
  },
  exiting: {
    transform: 'translateY(-22px)',
    opacity: 0
  },
  entering: {
    transform: 'translateY(-22px)',
    opacity: 0
  },
  entered: {
    transform: 'translateY(0)',
    opacity: 1
  }
}

const overlayTransition = {
  exited: { opacity: 0 },
  exiting: { opacity: 0 },
  entering: { opacity: 0 },
  entered: { opacity: 1 }
}

export class Modal extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false
    }
    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
    this.isCustomLayout = this.isCustomLayout.bind(this)
  }

  componentDidMount () {
    this.props.onMount(this)
  }

  componentWillUnmount () {
    this.props.onMount(undefined)
  }

  show () {
    document.body.style.overflow = 'hidden'
    this.setState({isOpen: true})
  }

  hide () {
    const { onHide } = this.props
    document.body.style.overflow = ''
    if (onHide && typeof onHide === 'function') {
      onHide()
    }
    this.setState({isOpen: false})
  }

  isCustomLayout () {
    let { children } = this.props
    if (!Array.isArray(children)) {
      children = [children]
    }

    const mapped = children
      .filter(child => typeof child === 'object')
      .map(child => child.type.name)

    return !(_.includes(mapped, 'ModalHeader') || _.includes(mapped, 'ModalBody'))
  }

  renderModal () {
    const { forceNormalLayout } = this.props
    const { isOpen } = this.state
    return (
      <Transition in={isOpen}
        timeout={{ enter: 0, exit: 400 }}
        appear
        unmountOnExit>
        {(state) => (
          <div className='modal-wrapper'>
            <div style={{ ...overlayTransition[state] }}
              className='overlay'
              onClick={this.hide} />
            <div className={`modal ${forceNormalLayout || !this.isCustomLayout() ? '' : '--padded'}`}
              style={{ ...modalTransition[state] }}>
              {this.props.children}
            </div>
          </div>
        )}
      </Transition>

    )
  }

  render () {
    return (
      <div className='af-modal-module'>
        {this.renderModal()}
      </div>
    )
  }
}

export const ModalHeader = (props) => {
  return (
    <div className={`__header ${props.color ? `--${props.color}` : ''}`}>
      {props.children}
    </div>
  )
}

export const ModalBody = (props) => {
  return (
    <div className='__body'>
      {props.children}
    </div>
  )
}

export const ModalFooter = (props) => {
  return (
    <div className='__footer'>
      {props.children}
    </div>
  )
}
