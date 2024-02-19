import React from 'react'
import Button from '../TODO/button/Button';


import './CreatedList.scss'
import ListItem from './ListItem';

const CreatedList = ({todos, deleteItem, editOpenModal, handleCheck, deleteAllHandle}) => {
  return (
    <div className='created'>
        <div className='created__heading'>
        <h2>Created List</h2>
        <Button className='btn' onClick={todos && todos.length > 0 ? deleteAllHandle : null}>Delete All</Button>
        </div>
        <div className='created__content'>
            {todos && todos.length > 0 ? (<ul>
             {
                    todos.map((todo, index) => {
                        return  <ListItem 
                        key={index} 
                        todo = {todo}
                        deleteItem={deleteItem} 
                        editOpenModal={editOpenModal} 
                        handleCheck={handleCheck}/>
                    })
                }
            </ul>) : (<p>List not found !</p>)}
        </div>
    </div>
  )
}

export default CreatedList