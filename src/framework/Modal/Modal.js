import React, { Component } from 'react'
import _ from 'lodash'

import './Modal.scss'

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
    const { normal } = this.props
    const { isOpen } = this.state
    if (isOpen) {
      return (
        <div className='modal-wrapper'>
          <div className='overlay' onClick={this.hide} />
          <div className={`modal ${normal || !this.isCustomLayout() ? '' : '--padded'}`}>
            {this.props.children}
          </div>
        </div>
      )
    }
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
