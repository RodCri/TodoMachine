/* eslint-disable react/prop-types */
import { useState } from "react"
import './FormTodo.css'

export const FormTodo = ({setOpenModal,addTodo}) => {
  
  const[newTodoValue,setNewTodoValue] = useState('');

  const onCancel = () =>{ 
    setOpenModal(false); 
  }
  
  const onChange = (event) => { 
    setNewTodoValue(event.target.value); 
  }
  
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe una nueva tarea</label>
      <textarea cols="30" rows="10" placeholder="new task" value={newTodoValue} onChange={onChange}></textarea>
      <div className="TodoForm-buttonContainer">
        <button type="button" className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">Añadir</button></div>
    </form>
  )
}
