import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Modal } from '../../framework/'
import { setModal } from '../../store/actions/app.action'

import DeleteGroupModal from '../Modals/DeleteGroup.modal'
import ErrorModal from '../Modals/Error.modal'

export const DELETE_GROUP_MODAL = 'DELETE GROUP'
export const ERROR_MODAL = 'ERROR'

class ModalWrapper extends Component {
  componentDidUpdate () {
    if (this.props.modal) this.modal.show()
  }

  renderModal () {
    switch (this.props.modal) {
      case DELETE_GROUP_MODAL:
        return <DeleteGroupModal modal={this.modal} />
      case ERROR_MODAL:
        return <ErrorModal modal={this.modal} />
    }
  }

  render () {
    return (
      <Modal onMount={ref => (this.modal = ref)}
        onHide={() => { this.props.setModal(null) }}
        forceNormalLayout>
        {this.renderModal()}
      </Modal>
    )
  }
}

function mapStatetoProps ({ app }) {
  return {
    modal: app.modal
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ setModal }, dispatch)
}

export default connect(mapStatetoProps, mapDispatchToProps)(ModalWrapper)
