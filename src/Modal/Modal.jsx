import React from 'react'
import './Modal.scss'

const Modal = ({className, children}) => {
  return (
    <div className={className} >{children}</div>
  )
}

export default Modal