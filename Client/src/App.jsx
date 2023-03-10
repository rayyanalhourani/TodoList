import { useState ,  useEffect } from 'react'
import AddTaskForm from './components/AddTaskForm'
import Header from './components/Header'
import Register from './components/Register'
import Tasks from './components/Tasks'
import './index.css'

function App() {

  const [AddTaskShow , SetAddTaskShow ] = useState(false)

  const [tasks , setTasks] = useState([])

  useEffect(()=>{
    const getTasks = async () => {
      const tasksFromServer = await FetchTasks()
      setTasks(tasksFromServer)
    }
    
    getTasks()
  },[])

  const FetchTasks = async ()=> {
    const res = await fetch('http://localhost:5000/gettasks')
    const data =await res.json()
    return data;
  }

  
  const Delete = async (id)=>{
    await fetch(`http://localhost:5000/deleteTask/${id}` , {method:'DELETE'})
      setTasks(tasks.filter((task)=> task.task_id !== id))
  }

  const addTask = async(task) =>{
    console.log(task);
    console.log(JSON.stringify(task));
    const res = await fetch('http://localhost:5000/addTask' ,
     {
    method:'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify(task)
  })
    const data = res.json()
    setTasks([...tasks , data])
  }


  const ChangeTask=()=>{
    SetAddTaskShow(!AddTaskShow)
  }

  return (
    <div className="box">
       <Header ChangeTask={ChangeTask} AddTaskShow={AddTaskShow}/>
        {(AddTaskShow ? <AddTaskForm addTask={addTask}/> : '') }
      <Tasks tasks={tasks} Delete={Delete}/>
    </div>
  )
}

export default App
