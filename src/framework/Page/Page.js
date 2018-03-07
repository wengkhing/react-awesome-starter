import React from 'react'
import Radium from 'radium'

import './Page.scss'
import styleVar from '../utils/_variables.scss'

const mediaQuery = `@media only screen and (max-width: ${styleVar.pageMaxWidth})`

export const Page = (props) => {
  const {
    fluid,
    noMargin,
    className = '',
    children,
    ...attr } = props

  return (
    <div className={`
      af-page Page ${className}
      ${fluid ? '--fluid' : ''}
      ${noMargin ? '--no-margin' : ''}
    `}
      {...attr}>
      {children}
    </div>
  )
}

const PureLayout = (props) => {
  const {
    className = '',
    children,
    style,
    grid,
    gap,
    areas,
    smGrid,
    smGap,
    smAreas,
    ...attr } = props

  const gridString = grid.split('|')
  const smGridString = smGrid ? smGrid.split('|') : null
  let gridStyle = {...style}

  if (gridString.length !== 2) {
    console.error('[ReactAwesomeStarter] Layout grid property expect two arguments, \n<Layout grid=\'100px auto 100px| 100px auto\' />\ngrid=\'(rows)| (columns)\' ')
  } else {
    gridStyle = {
      ...gridStyle,
      gridTemplateColumns: gridString[0].trim(),
      gridTemplateRows: gridString[1].trim(),
      gridTemplateAreas: areas,
      gridGap: gap
    }
  }

  if (smGridString && smGridString.length === 2) {
    gridStyle = {
      ...gridStyle,
      [mediaQuery]: {
        gridTemplateColumns: smGridString[0].trim(),
        gridTemplateRows: smGridString[1].trim(),
        gridTemplateAreas: smAreas,
        gridGap: smGap
      }
    }
  } else if (smGridString && smGridString !== 2) {
    console.error('[ReactAwesomeStarter] Layout smGrid property expect two arguments, \n<Layout smGrid=\'100px auto 100px| 100px auto\' />\nsmGrid=\'(rows)| (columns)\' ')
  }

  return (
    <div className={`af-layout ${className}`} {...attr}
      style={gridStyle}>
      {children}
    </div>
  )
}

export const Layout = Radium(PureLayout)

export const Section = (props) => {
  const {
    className = '',
    children,
    style,
    area,
    ...attr } = props

  let gridStyle = {}
  if (area) {
    gridStyle.gridArea = area
  }

  return (
    <section className={`af-page-section Section ${className}`}
      {...attr} style={{...gridStyle, ...style}} >
      {children}
    </section>
  )
}

export const H1 = (props) => {
  const { className = '', children, ...attr } = props
  return (
    <h1 className={`af-page-header H1 ${className}`}
      {...attr} >
      {children}
    </h1>
  )
}

export const H2 = (props) => {
  const { className = '', children, ...attr } = props
  return (
    <h2 className={`af-page-header H2 ${className}`}
      {...attr} >
      {children}
    </h2>
  )
}

export const H3 = (props) => {
  const { className = '', children, ...attr } = props
  return (
    <h3 className={`af-page-header H3 ${className}`}
      {...attr} >
      {children}
    </h3>
  )
}

export const P = (props) => {
  const { className = '', children, ...attr } = props
  return (
    <p className={`af-paragraph P ${className}`}
      {...attr} >
      {children}
    </p>
  )
}

export const Code = (props) => {
  const { className = '', children, ...attr } = props
  return (
    <code className={`af-code Code ${className}`}
      {...attr} >
      {children}
    </code>
  )
}
