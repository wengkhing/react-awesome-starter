import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Helmet } from 'react-helmet'

class KitchenSinkPage extends Component {
  render () {
    return (
      <div className='scope-group-overview'>
        <Helmet title='React Awesome Starter: Kitchen Sink' />
        <button className='btn'>Default Button</button>
        <button className='btn --primary'>Primary Button</button>
        <button className='btn --success'>Success Button</button>
        <button className='btn --danger'>Danger Button</button>
        <button className='btn' disabled>Disabled Button</button>
        <button className='btn --danger --block'>Block Button</button>
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
