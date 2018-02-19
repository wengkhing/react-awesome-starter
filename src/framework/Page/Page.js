import React from 'react'

import './Page.scss'

export const Page = (props) => {
  const { className = '', children, ...attr } = props

  return (
    <div className={`af-page ${className}`}
      {...attr}>
      {children}
    </div>
  )
}

export const Section = (props) => {
  const { className = '', children, ...attr } = props
  return (
    <section className={`af-page-section ${className}`}
      {...attr} >
      {children}
    </section>
  )
}

export const H1 = (props) => {
  const { className = '', children, ...attr } = props
  return (
    <h1 className={`af-page-header ${className}`}
      {...attr} >
      {children}
    </h1>
  )
}

export const H2 = (props) => {
  const { className = '', children, ...attr } = props
  return (
    <h2 className={`af-page-header ${className}`}
      {...attr} >
      {children}
    </h2>
  )
}

export const H3 = (props) => {
  const { className = '', children, ...attr } = props
  return (
    <h3 className={`af-page-header ${className}`}
      {...attr} >
      {children}
    </h3>
  )
}
