import React from 'react'
import Radium from 'radium'

import './Page.scss'
import styleVar from '../utils/_variables.scss'

const mediaQuery = `@media only screen and (max-width: ${styleVar.pageMaxWidth})`

export const Page = (props) => {
  const { className = '', children, ...attr } = props

  return (
    <div className={`af-page ${className}`}
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
      gridTemplateRows: gridString[0].trim(),
      gridTemplateColumns: gridString[1].trim(),
      gridTemplateAreas: areas,
      gridGap: gap
    }
  }

  if (smGridString && smGridString.length === 2) {
    gridStyle = {
      ...gridStyle,
      [mediaQuery]: {
        gridTemplateRows: smGridString[0].trim(),
        gridTemplateColumns: smGridString[1].trim(),
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
    <section className={`af-page-section ${className}`}
      {...attr} style={{...gridStyle, ...style}} >
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
