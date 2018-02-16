import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class KitchenSinkPage extends Component {
  render () {
    return (
      <div className='scope-group-overview'>
        <button className='btn'>Default Button</button>
        <button className='btn --primary'>Default Button</button>
        <button className='btn --success'>Default Button</button>
        <button className='btn --danger'>Default Button</button>
        <button className='btn' disabled>Default Button</button>
        <button className='btn --danger --block'>Default Button</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    state
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(KitchenSinkPage)
