import React from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import './Input.scss'

export const Input = (props) => {
  const { label, type, children, showTimeSelect, calendarClassName = '', ...attr } = props

  switch (type) {
    case 'datepicker':
      return (
        <div className='component-input-element'>
          {label ? <label>{label}</label> : ''}
          <DatePicker {...attr}
            showTimeSelect={showTimeSelect}
            className='af-datepicker'
            preventOpenOnFocus={showTimeSelect}
            withPortal
            readOnly
            calendarClassName={`${calendarClassName} ${showTimeSelect ? '--mobile-with-timepicker' : ''}`}>
            {children}
          </DatePicker>
        </div>
      )
    case 'radio':
    case 'checkbox':
      return (
        <div className='component-input-element --inline'>
          <label>
            <input type={type} {...attr} />
            <span className='checkable-label'>{label}</span>
          </label>
        </div>
      )
    default:
      return (
        <div className='component-input-element'>
          {label ? <label>{label}</label> : ''}
          {type === 'textarea'
            ? <textarea {...attr} />
            : <input type={type} {...attr} />}
        </div>
      )
  }
}
