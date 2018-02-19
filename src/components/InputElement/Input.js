import React from 'react'

import './Input.scss'

const Input = (props) => {
  const { label, ...attr } = props

  return (
    <div className='component-input-element'>
      <label>{label}</label>
      <input {...attr} />
    </div>
  )
}

export default Input
