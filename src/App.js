import Header from "./components/header";
import Tasks from "./components/Tasks";
import { useState } from 'react'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] =useState(false)
  const  [tasks,setTasks] = useState([
    {
      id: 1,
      text:'Weekend Kenya Rugby',
      day:'Saturday 23th at 3pm',
      reminder:true,
  },
  {
      id: 2,
      text:'Travelling back',
      day:'Saturday 24th at 9am',
      reminder:true,
  },
  {
      id: 3,
      text:'Back to classes on Monday',
      day:'Saturday 25th at 8am',
      reminder:true,
  },  
  ])
    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
      console.log(task);
    }
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id))
  }
  
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
    task.id ===  id ? {...task, reminder:
    !task.reminder} : task
    )
    )
  }
  return(

    <div className="container">
<Header 
onAdd = {() => setShowAddTask
  (!showAddTask)} 
  showAdd = {showAddTask}
  />
{showAddTask && <AddTask onAdd = {addTask}/>}
{tasks.length > 0? ( 
<Tasks tasks = {tasks} 
onDelete = {deleteTask} 
onToggle = {toggleReminder}/>
):('No Tasks Tasks To Show'
    
  )
}
</div>
  )
}




export default App;
