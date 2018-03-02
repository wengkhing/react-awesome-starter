import React, { Component } from 'react'
import { connect } from 'react-redux'
import { H3, P, Code, ModalHeader, ModalBody, ModalFooter, Button } from '../../framework'

class ErrorModal extends Component {
  render () {
    const { modal, error } = this.props
    return (
      <div>
        <ModalHeader color='danger'>
          <H3>Hmmm... Something went wrong</H3>
        </ModalHeader>
        <ModalBody>
          <P>It's a shame. Help us improve our service. Report a bug today.</P>
          <Code>{error}</Code>
        </ModalBody>
        <ModalFooter>
          <Button color='danger'>Send Report to Support</Button>
          <Button onClick={() => modal.hide()}>Cancel</Button>
        </ModalFooter>
      </div>
    )
  }
}

function mapStatetoProps ({ app }) {
  return {
    error: app.error
  }
}

export default connect(mapStatetoProps)(ErrorModal)
