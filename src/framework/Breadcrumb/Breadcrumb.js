import React from 'react'
import { Link } from 'react-router-dom'

import './Breadcrumb.scss'

export const Breadcrumb = (props) => {
  const { className = '', children, ...attr } = props
  return (
    <ul className={`component-breadcrumb ${className}`} {...attr}>
      {props.children}
    </ul>
  )
}

export const Crumb = (props) => {
  const { to, className = '', children, ...attr } = props
  return (
    <li className={`crumb ${className}`} {...attr}>
      {to ? <Link to={to}>{children}</Link> : <span>{children}</span>}
    </li>
  )
}
