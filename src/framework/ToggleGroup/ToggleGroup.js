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
    const { multiSelect, selected } = this.props
    this.setState({ selected })
    if (multiSelect) {
      if (Array.isArray(selected)) {
        if (selected.length > 0) {
          this.setState({ selected })
        } else {
          this.setState({ selected: [] })
        }
      } else {
        this.setState({ selected: [] })
        if (selected) console.error("'selected' props must be an array when multiSelect is enabled.")
      }
    }
  }

  componentWillUpdate (nextProps, nextState) {
    if (nextState.selected !== this.state.selected) this.props.onChange(nextState.selected)
  }

  handleInputUpdate (data, checked) {
    const { multiSelect } = this.props
    const { selected } = this.state
    if (multiSelect) {
      if (checked) this.setState({ selected: [...selected, data] })
      else this.setState({ selected: [..._.pull(selected, data)] })
    } else {
      this.setState({ selected: data })
    }
  }

  render () {
    let { multiSelect, children, selected } = this.props
    const { uniqueId } = this.state
    let childrenWithProps
    if (multiSelect) {
      childrenWithProps = React.Children.map(children, child =>
        React.cloneElement(child, {
          type: multiSelect ? 'checkbox' : 'radio',
          onChange: this.handleInputUpdate,
          name: `radio_${uniqueId}`,
          checked: _.includes(selected, child.props.value)
        }))
    } else {
      childrenWithProps = React.Children.map(children, child =>
        React.cloneElement(child, {
          type: multiSelect ? 'checkbox' : 'radio',
          onChange: this.handleInputUpdate,
          name: `radio_${uniqueId}`,
          checked: child.props.value === selected
        }))
    }

    return (
      <div className='af-toggle-group'>
        {childrenWithProps}
      </div>
    )
  }
}

export const Tab = (props) => {
  const { type, value, name, checked, onChange } = props
  const uniqueId = `radio_${name}_${value}`
  return (
    <div className='af-tab'>
      <input id={uniqueId}
        type={type}
        value={value}
        name={name}
        checked={checked}
        onChange={(ev) => onChange(ev.target.value, ev.target.checked)} />
      <label htmlFor={uniqueId}>{props.children}</label>
    </div>
  )
}
