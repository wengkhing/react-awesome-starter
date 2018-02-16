import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Transition } from 'react-transition-group'

import { logout } from '../../store/actions/auth.action'

import './MenuBar.scss'

const sidebarTransition = {
  exited: {
    transform: 'translateX(-88vw)'
  },
  exiting: {
    transform: 'translateX(-88vw)'
  },
  entering: {
    transform: 'translateX(-88vw)'
  },
  entered: {
    transform: 'translateX(0)'
  }
}

const overlayTransition = {
  exited: { opacity: 0 },
  exiting: { opacity: 0 },
  entering: { opacity: 0 },
  entered: { opacity: 1 }
}

class MenuBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu (boolVal) {
    this.setState({ isOpen: boolVal })
  }

  render () {
    return (
      <div className='component-menu-bar'>
        <section className='menu-bar'>
          <a onClick={() => this.toggleMenu(true)}>
            <i className='fa fa-bars' aria-hidden='true' />
          </a>
        </section>
        <Transition in={this.state.isOpen} timeout={this.state.isOpen ? 100 : 400} appear unmountOnExit>
          {(state) => (
            <section className='the-menu-container'>
              <Transition in={this.state.isOpen} timeout={this.state.isOpen ? 100 : 400} appear unmountOnExit>
                {(state) => (
                  <aside style={{ ...sidebarTransition[state] }}>
                    <a className='close'
                      onClick={() => this.toggleMenu(false)}>x</a>
                    <header>
                      <h1>Welcome,</h1>
                      <h2>Mohammad Ibrahim Ali bin Yuusof</h2>
                    </header>
                    <ul>
                      <li>
                        <i className='fa fa-tachometer' aria-hidden='true' />
                        <span>Ongoing Assignment</span>
                      </li>
                      <li>
                        <i className='fa fa-gear' aria-hidden='true' />
                        <span>Settings</span>
                      </li>
                      <li onClick={this.props.logout}>
                        <i className='fa fa-sign-out' aria-hidden='true' />
                        <span>Logout</span>
                      </li>
                    </ul>
                  </aside>
                )}
              </Transition>
              <Transition in={this.state.isOpen} timeout={100} appear unmountOnExit>
                {(state) => (
                  <div className='overlay'
                    onClick={() => this.toggleMenu(false)}
                    style={{ ...overlayTransition[state] }} />
                )}
              </Transition>
            </section>
          )}
        </Transition>
      </div>
    )
  }
}

// function mapStateToProps (state) {
//   return {
//     state
//   }
// }

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ logout }, dispatch)
}
export default connect(null, mapDispatchToProps)(MenuBar)
// export default MenuBar
