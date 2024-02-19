import React from 'react'
import './Status.scss'

const Status = ({todos}) => {
    const handleCheckCount = () => {
       return todos.filter((todo) => todo.done).length
    }

  return (
    <div className='status' style={todos.length > 0 ?{background: 'springgreen'} : {background: 'aliceblue'}}>
        {
            todos && todos.length > 0 ? (
                <p>You Have {todos.length} Items and Choosed {handleCheckCount()} Items !</p>
            ) : (
                <p>You Have No Item !</p>
            )
        }
    </div>
  )
}

export default Status