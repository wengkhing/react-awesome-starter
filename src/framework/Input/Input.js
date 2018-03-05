import React from 'react'

import './Input.scss'

export const Input = (props) => {
  const { label, type, ...attr } = props

  switch (type) {
    case 'radio':
    case 'checkbox':
      return (
        <div className='component-input-element --inline'>
          <label>
            <input type={type} {...attr} />
            <span className='checkable-label'>{label}</span>
          </label>
        </div>
      )
    default:
      return (
        <div className='component-input-element'>
          {label ? <label>{label}</label> : ''}
          {type === 'textarea'
            ? <textarea {...attr} />
            : <input type={type} {...attr} />}
        </div>
      )
  }
}
