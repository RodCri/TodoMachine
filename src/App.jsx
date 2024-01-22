import { useState } from 'react'
import './App.css'
import { Counter } from './Components/Counter'
import { Filter } from './Components/Filter'
import { Task } from './Components/Task'
import { ListTasks } from './Components/ListTasks'
import { NewItem } from './Components/NewItem'
import { taskList } from "./data/Tasks"

function App() {
  // eslint-disable-next-line no-unused-vars
  const [listTasks, setListTasks] = useState(taskList);
  const [searchValue, setSearchValue] = useState("");

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


  return (
    <div className='todo_machine'>      
      <Counter completed={completedTodos} total={totalTodos}/>
      <Filter searchValue={searchValue} setSearchValue={setSearchValue} />
      <ListTasks>
        {
          searchedTodos.map(item => (<Task key={item.id} name={item.taskName} completed={item.complete}/>))
        }
      </ListTasks>
      <NewItem />
    </div>
  )
}

export default App
