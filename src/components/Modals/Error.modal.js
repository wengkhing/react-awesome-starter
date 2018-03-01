import React, { Component } from 'react'
import { H3, ModalHeader, ModalBody, ModalFooter, Button } from '../../framework'

class ErrorModal extends Component {
  render () {
    const { modal } = this.props
    return (
      <div>
        <ModalHeader color='danger'>
          <H3>Hmmm... Something went wrong</H3>
        </ModalHeader>
        <ModalBody>
          <p>You possibly found a bug in the application.</p>
        </ModalBody>
        <ModalFooter>
          <Button color='danger'>Send Report to Support</Button>
          <Button onClick={() => modal.hide()}>Cancel</Button>
        </ModalFooter>
      </div>
    )
  }
}

export default ErrorModal
