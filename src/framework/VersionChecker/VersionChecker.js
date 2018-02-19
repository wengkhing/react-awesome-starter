import React, { Component } from 'react'
import axios from 'axios'
import './VersionChecker.scss'

const { version: currentVersion } = require('../../../package.json')
const interval = 900000

export class VersionChecker extends Component {
  constructor (props) {
    super(props)

    this.state = {
      latestVersion: null
    }
  }

  componentDidMount () {
    this.checkVersion()

    setInterval(() => {
      this.checkVersion()
    }, interval)
  }

  async checkVersion () {
    try {
      const { data: latestVersion } = await axios.get('/version')
      if (currentVersion.trim() !== latestVersion.trim()) {
        this.setState({ latestVersion })
      }
    } catch (err) {
      console.error(err)
    }
  }

  render () {
    return (
      this.state.latestVersion
        ? (
          <div className='version-checker'>
            <p>{`Your app version is ${currentVersion}. Latest version, ${this.state.latestVersion} available. Please refresh browser.`}</p>
            <button className='submit' onClick={() => window.location.reload(true)} >Refresh Browser</button>
          </div>
        ) : <div />
    )
  }
}
