import React from 'react'

const Button = ({children, onClick, className, type}) => {
  return (
    <button onClick={onClick} type ={type} className={className}>{children}</button>
  )
}

export default Button