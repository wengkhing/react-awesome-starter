import React from 'react'
import './Table.scss'

export const Table = (props) => {
  const { data, columns, className = '', ...attr } = props
  return (
    <table className={`table ${className}`} {...attr} />
  )
}
