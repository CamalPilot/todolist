import React from 'react'
import Button from '../TODO/button/Button'
import Input from '../TODO/input/Input'
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";



const ListItem = ({todo, deleteItem, editOpenModal, handleCheck}) => {
    const handleCheckBoxChange = () =>{
        // if(todo.done)
        // return null;
  
          handleCheck(todo.id)
      
      }
  return (
    <>
        <li style={todo.done ? {textDecoration:"line-through"} : null}>{todo.title}  <div className='created__content__buttons'>
            {todo.createdAt}
            <Input type='checkBox' onChange={() => handleCheckBoxChange()}/>
            <Button onClick={()=>editOpenModal(todo.title, todo.id)} ><MdModeEdit className='icon-edit' /></Button>
            <Button onClick={() => deleteItem(todo.id)}><MdDelete className='icon-delete'/></Button></div></li>
    </>
  )
}

export default ListItem