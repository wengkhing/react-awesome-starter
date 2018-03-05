import React, { Component } from 'react'
import ProgressBar from 'progressbar.js'
import _ from 'lodash'

import './Loader.scss'

export class Loader extends Component {
  constructor (props) {
    super(props)
    this.uniqueId = _.random(0, 100)
    this.state = {
      visible: false,
      mount: false
    }

    this.hideLoader = this.hideLoader.bind(this)
    this.showLoader = this.showLoader.bind(this)
  }

  componentDidMount () {
    const {
      color = '#4567cd',
      strokeWidth = 1,
      trailColor = 'rgba(130, 130, 130, 0.5)'
    } = this.props

    this.loader = new ProgressBar.Line(
      `.loader-${this.uniqueId}`,
      { color, trailColor, strokeWidth }
    )

    this.loader.set(1)
  }

  componentWillReceiveProps (nextProps) {
    const {
      duration = 8000,
      isLoading = false
    } = nextProps

    console.log(this.timeout)

    if (this.timeout) clearTimeout(this.timeout)

    if (isLoading) {
      this.showLoader()
      this.loader.animate(0.9, { duration })
    } else {
      this.loader.animate(1, {
        duration: 300,
        easing: 'easeInOut'
      }, () => {
        this.hideLoader()
      })
    }
  }

  hideLoader () {
    this.setState({
      visible: false
    })

    this.timeout = setTimeout(() => {
      this.setState({
        mount: false
      })
    }, 300)
  }

  showLoader () {
    this.loader.set(0)
    this.setState({
      mount: true,
      visible: true
    })
  }

  render () {
    return (
      <div className={`component-loader
        loader-${this.uniqueId}
        ${this.state.visible ? '' : '--transparent'}
        ${this.state.mount ? '' : '--unmount'}`} />
    )
  }
}
