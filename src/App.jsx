import { useState, useEffect } from 'react'
import './App.css'
import { Counter } from './Components/Counter'
import { Filter } from './Components/Filter'
import { Task } from './Components/Task'
import { ListTasks } from './Components/ListTasks'
import { NewItem } from './Components/NewItem'

function App() {

  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;
  
  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  // eslint-disable-next-line no-unused-vars
  const [listTasks, setListTasks] = useState(parsedTodos);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = listTasks.filter(task => task.complete).length;
  const totalTodos = listTasks.length;

  useEffect(() => {
    if (localStorage.getItem("TODOS_V1")) {
      if (JSON.parse(localStorage.getItem("TODOS_V1")).length > 0) {
        setListTasks(JSON.parse(localStorage.getItem("TODOS_V1")));
      }
    }
  }, []);

  useEffect(() => {
    const savedData = [...listTasks];
    localStorage.setItem("TODOS_V1", JSON.stringify(savedData));
  }, [listTasks]);

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    setListTasks(newTodos);
  };

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

  return (
    <div className='todo_machine'>      
      <Counter completed={completedTodos} total={totalTodos}/>
      <Filter searchValue={searchValue} setSearchValue={setSearchValue} />
      <ListTasks>
        {
          searchedTodos.map(item => (<Task key={item.id} name={item.taskName} completed={item.complete} onComplete={() => completeTodo(item.taskName)} onDelete={() => deleteTodo(item.taskName)}/>))
        }
      </ListTasks>
      <NewItem />
    </div>
  )
}

export default App
