import React from 'react'
import './Tag.scss'

export const Tag = (props) => {
  const { className = '', color, children, ...attr } = props

  const renderClassName = () => {
    return `af-tag ${color ? `--${color}` : ''} ${className}`
  }

  return (
    <span className={renderClassName()}
      {...attr} >
      {children}
    </span>
  )
}
