import React from 'react'

import './Input.scss'

export const Input = (props) => {
  const { label, type, value, ...attr } = props

  return (
    <div className='component-input-element'>
      <label>{label}</label>
      {type === 'textarea'
        ? <textarea {...attr}>{value}</textarea>
        : <input type={type} value={value} {...attr} />}
    </div>
  )
}
