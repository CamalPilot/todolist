import React, { useEffect } from "react";
import { useState } from "react";
import CreatedList from "../CreatedList/CreatedList";
import Button from "./button/Button";
import Form from "./Form/Form";
import "./TodoList.scss";
import dayjs from 'dayjs';
import Status from "../StatusNote/Status";
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [submitDesc, setSubmitDesc] = useState("Add");
  const [newTodo, setNewTodo] = useState("");
  const [itemId, setItemId] = useState(null)




  useEffect(() => {
    const savedTodos = localStorage.getItem("data");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(todos));
  }, [todos]);
  

  const handleAddTodo = (todo) => {
    const formattedDate = dayjs().format('YYYY-MM-DD HH:mm:ss');
    setTodos((prev) => {
      return [...prev, { title: todo, id: uuidv4(), isChecked: false,  createdAt: formattedDate}];
    });
    setNewTodo("")
  };

  const deleteItem = (id) => {
    const confirmed = window.confirm('Do you want to delete?') 
    if(confirmed){
      setTodos(todos.filter((item) => item.id !== id));
    }
  };

  const deleteAllHandle = () => {
    const confirmed = window.confirm('Do You Want delete all items?')
    if(confirmed){
      setTodos([])
    }
  }

  const handleChange = (e) => {
    setNewTodo(e.target.value)
  }

  const editOpenModal = (title, itemId) => {
    setSubmitDesc("Update");
    setModalOpen(true);
    setNewTodo(title)
    setItemId(itemId)
  };
const handleUpdate = (id, title) => {
  // console.log(id, 222);
setTodos((prevTodo) => {
  return prevTodo.map((item) =>{
    return item.id === id ? {...item, title} : item
})
})
}
  // console.log(todos, "todos");

  const openModal = () => {

    setModalOpen(true);
    setSubmitDesc("Add")
    setNewTodo("")
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(submitDesc === "Add" && newTodo.trim() !== ""){
      handleAddTodo(newTodo)
    }else if(submitDesc === "Update"){
      handleUpdate(itemId, newTodo)
    }else{
      alert("Please enter a valid input!")
    }

      setModalOpen(false)
    };


    const handleCheck = (id) => {
      setTodos(todos.map((todo) => {
        if(todo.id === id)
        return {...todo, done:!todo.done}
        // console.log(todo);
        return todo;
      }))
    }

  return (
    <div className="todo container">
      <h1>Todo List</h1>
      <Button onClick={openModal} className="add-todo btn">
        Add Todo
      </Button>
      {isModalOpen && (
        <>
          <div className="backdrop" onClick={closeModal}></div>
          <Form
          handleSubmit={handleSubmit}
          newTodo={newTodo}
          handleChange = {handleChange}
            submitDesc={submitDesc}
            // onAdd={handleAddTodo}
            onClose={closeModal}
          />
        </>
      )}
      <CreatedList
        handleCheck={handleCheck}
        deleteItem={deleteItem}
        todos={todos}
        editOpenModal={editOpenModal}
        deleteAllHandle={deleteAllHandle}
      />
      <Status todos={todos}/>
    </div>
  );
};

export default TodoList;
