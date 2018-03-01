import React from 'react'
import { Link } from 'react-router-dom'

import './Button.scss'

export const Button = (props) => {
  const { className = '', color, block, children, disabled, to, ...attr } = props

  const renderClassName = () => {
    return `btn ${color ? `--${color}` : ''} ${className} ${block ? '--block' : ''}`.trim()
  }

  if (to && !disabled) {
    return (
      <Link to={to}
        className={renderClassName()}
        {...attr}>
        {children}
      </Link>
    )
  }
  return (
    <button className={renderClassName()}
      disabled={disabled}
      {...attr}>
      {children}
    </button>
  )
}
