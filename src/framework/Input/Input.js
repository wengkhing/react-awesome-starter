import React from 'react'

import './Input.scss'

export const Input = (props) => {
  const { label, type, value, ...attr } = props

  switch (type) {
    case 'radio':
    case 'checkbox':
      return (
        <div className='component-input-element --inline'>
          <label>
            <input type={type} value={value} {...attr} />
            <span className='checkable-label'>{label}</span>
          </label>
        </div>
      )
    default:
      return (
        <div className='component-input-element'>
          {label ? <label>{label}</label> : ''}
          {type === 'textarea'
            ? <textarea {...attr}>{value}</textarea>
            : <input type={type} value={value} {...attr} />}
        </div>
      )
  }
}
