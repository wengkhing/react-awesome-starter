import React, { Component } from 'react'
import { H3, ModalHeader, ModalBody, ModalFooter, Button } from '../../framework'

class DeleteGroupModal extends Component {
  render () {
    const { modal } = this.props
    return (
      <div>
        <ModalHeader color='danger'>
          <H3>Warning: This is an irreversible process</H3>
        </ModalHeader>
        <ModalBody>
          <p>Are you sure you want to permanently delete this group?</p>
        </ModalBody>
        <ModalFooter>
          <Button color='danger'>Yes Delete!</Button>
          <Button onClick={() => modal.hide()}>Cancel</Button>
        </ModalFooter>
      </div>
    )
  }
}

export default DeleteGroupModal
