/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import { Counter } from './Components/Counter/Counter'
import { Filter } from './Components/Filter/Filter'
import { Task } from './Components/Task/Task'
import { ListTasks } from './Components/ListTasks/ListTasks'
import { NewItem } from './Components/NewItem/NewItem'
import { useLocalStorage } from './hooks/useLocalStorage'
import { Error } from './Components/Error/Error'
import { EmptyTask } from './Components/EmptyTask/EmptyTask'
import { Loading } from './Components/Loading/Loading'
import { Modal } from './Components/Modal/Modal'
import { FormTodo } from './Components/FormTodo/FormTodo'

function App() {
  // eslint-disable-next-line no-unused-vars
  const {item: listTasks, saveItem:saveTodos,loading,error} = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const completedTodos = listTasks.filter(task => task.complete).length;
  const totalTodos = listTasks.length;

  const searchedTodos = listTasks.filter((task)=>{
    // función texto sin tildes
    const noTildes = (text) => {
      return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    };
    // Normalizando texto sin tildes y a Lower Case
    const TodoTextLC = noTildes(task.taskName.toLowerCase());
    const searchTextLC = noTildes(searchValue.toLowerCase());
    //renderizar con filtro
    return TodoTextLC.includes(searchTextLC);
  })

  const completeTodo = (text) =>{
    const newListTask = [...listTasks];
    const taskIndex = newListTask.findIndex(
      (task) => task.taskName === text
    )
    newListTask[taskIndex].complete = true;
    saveTodos(newListTask);
  }
  
  const deleteTodo = (text) =>{
    const newListTask = [...listTasks];
    const taskIndex = newListTask.findIndex(
      (task) => task.taskName === text
    )
    newListTask.splice(taskIndex,1)
    saveTodos(newListTask)
  }

  const addTodo = (taskNew) =>{
    const newListTask = [...listTasks];
    newListTask.push({
      id: listTasks.length,
      taskName: taskNew,
      complete: false
    });
    saveTodos(newListTask);
  }

  return (
    <div className='todo_machine'>      
      <Counter completed={completedTodos} total={totalTodos}/>
      <Filter searchValue={searchValue} setSearchValue={setSearchValue} />
      <ListTasks>
        {loading && <Loading />}
        {error && <Error />}
        {(!loading && searchedTodos.length === 0) && <EmptyTask />}
        {
          searchedTodos.map(item => 
            (<Task key={item.id} 
              name={item.taskName} 
              completed={item.complete} 
              onComplete={() => completeTodo(item.taskName)} 
              onDelete={() => deleteTodo(item.taskName)}/>))
        }
      </ListTasks>
      <NewItem openModal={openModal} setOpenModal={setOpenModal} />
      {openModal &&(
        <Modal>
          <FormTodo setOpenModal={setOpenModal} addTodo={addTodo} />
        </Modal>
      )}
    </div>
  )
}
export default App