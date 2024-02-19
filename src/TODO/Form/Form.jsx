import React from "react";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import Button from "../button/Button";
import Input from "../input/Input";
import "./Form.scss";

const Form = ({ onAdd, onClose, submitDesc, newTodo, handleChange, handleSubmit }) => {
//   const handleAddTodo = (e) => {
//     e.preventDefault();

//     if (newTodo.trim() !== "") {
//       onAdd(newTodo);
//       onClose();
//     }
//   };
  //   console.log(newTodo);
  return (
    <Modal className='modal'>
      <div className="modal__content">
        <h2>Add Todo</h2>
        <form
          className="modal__content__form"
          action=""
          onSubmit={handleSubmit}
        >
          <Input
            className="modal__content__form__input"
            placeholder="New Todo"
            type="text"
            value={newTodo}
            onChange={handleChange}
          />
          <div className="modal__content__form__buttons">
          <Button className="add btn" type="submit">
            {submitDesc}
          </Button>
          <Button className="cancel btn" onClick={onClose}>
            Cancel
          </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default Form;
