import { useState } from "react"
import Header from "./components/header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
        
    {
        id: 1,
        text:'Weekend Kenya Rugby Champonship semis-finals ',
        day:'Saturday 23th at 3pm',
        reminder:true,
    },
    {
        id: 2,
        text:'Travelling back from South Coast,Diani',
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
  return(
    <div className="container">
<Header/>
<Tasks tasks = {tasks}/>
    </div>
  )
}




export default App;
