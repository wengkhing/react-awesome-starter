import React, { Component } from 'react'
import _ from 'lodash'

import './ToggleGroup.scss'

export class ToggleGroup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: null,
      uniqueId: _.random(100000, 999999)
    }

    this.handleInputUpdate = this.handleInputUpdate.bind(this)
  }

  componentDidMount () {
    const { multiSelect } = this.props
    if (multiSelect) this.setState({ selected: [] })
  }

  componentWillUpdate (nextProps, nextState) {
    if (nextState.selected !== this.state.selected) this.props.onChange(nextState.selected)
  }

  handleInputUpdate (data, checked) {
    const { multiSelect } = this.props
    const { selected } = this.state
    if (multiSelect) {
      if (checked) this.setState({ selected: [...selected, data] })
      else this.setState({ selected: _.pull(selected, data) })
    } else {
      this.setState({ selected: data })
    }
  }

  render () {
    let { multiSelect, children } = this.props
    const { uniqueId } = this.state
    var childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, {
        type: multiSelect ? 'checkbox' : 'radio',
        onChange: this.handleInputUpdate,
        name: `radio_${uniqueId}`
      }))

    return (
      <div className='af-toggle-group'>
        {childrenWithProps}
      </div>
    )
  }
}

export const Tab = (props) => {
  const { type, value, name, onChange } = props
  const uniqueId = `radio_${name}_${value}`
  return (
    <div className='af-tab'>
      <input id={uniqueId}
        type={type}
        value={value}
        name={name}
        onChange={(ev) => onChange(ev.target.value, ev.target.checked)} />
      <label htmlFor={uniqueId}>{props.children}</label>
    </div>
  )
}
