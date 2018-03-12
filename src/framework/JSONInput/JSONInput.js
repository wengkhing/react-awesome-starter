import React, { Component } from 'react'
import { Button } from '../Button/Button'
import _ from 'lodash'

import './JSONInput.scss'

export class JSONInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [{
        id: _.uniqueId(),
        key: undefined,
        value: undefined
      }]
    }

    this.convertToJson = this.convertToJson.bind(this)
    this.convertToArray = this.convertToArray.bind(this)
    this.renderRows = this.renderRows.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.addRow = this.addRow.bind(this)
    this.removeRow = this.removeRow.bind(this)
  }

  componentDidMount () {
    const { value } = this.props
    if (value && !_.isEmpty(value)) {
      this.setState({
        data: this.convertToArray(this.props.value)
      })
    }
  }

  componentWillUpdate (nextProps, nextState) {
    if (nextState.data !== this.state.data) this.props.onChange(this.convertToJson(nextState.data))
  }

  convertToJson (data) {
    const obj = {}
    data.map(item => {
      if (item.key && item.value) { obj[item.key] = item.value }
    })
    return obj
  }

  convertToArray (json) {
    let arr = []
    Object.keys(json).map(key => {
      arr.push({
        id: _.uniqueId(),
        key,
        value: json[key]
      })
    })

    return arr
  }

  handleInputChange (id, ev, isKey) {
    const { data } = this.state
    const index = data.findIndex(o => o.id === id)
    if (index === -1) {

    } else {
      this.setState({
        data: [
          ...data.slice(0, index),
          { ...data[index], [isKey ? 'key' : 'value']: ev.target.value ? ev.target.value : undefined },
          ...data.slice(index + 1)
        ]
      })
    }
  }

  addRow () {
    this.setState({
      data: [...this.state.data, { id: _.uniqueId(), key: undefined, value: undefined }]
    })
  }

  removeRow (id) {
    this.setState({
      data: this.state.data.filter(obj => obj.id !== id)
    })
  }

  renderRows () {
    const { data } = this.state
    return data.map((obj) => {
      const { id, key, value } = obj
      return (
        <div className='key-value-pair' key={id}>
          <input className='input-key'
            placeholder='key'
            value={key}
            onChange={(ev) => this.handleInputChange(id, ev, true)} />
          <input className='input-value'
            placeholder='value'
            value={value}
            onChange={(ev) => this.handleInputChange(id, ev, false)} />
          <Button color='danger'
            className='btn-remove'
            onClick={() => this.removeRow(id)}
            disabled={data.length === 1}>
            <i className='fa fa-trash' />
          </Button>
        </div>
      )
    })
  }

  render () {
    const { label } = this.props

    return (
      <div className='af-json-input'>
        {label ? <label>{label}</label> : ''}
        {this.renderRows()}
        <Button onClick={this.addRow}>Add Row</Button>
      </div>
    )
  }
}