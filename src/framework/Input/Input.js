import React from 'react'

import './Input.scss'

export const Input = (props) => {
  const { label, ...attr } = props

  return (
    <div className='component-input-element'>
      <label>{label}</label>
      <input {...attr} />
    </div>
  )
}
