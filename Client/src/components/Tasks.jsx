import { useState ,  useEffect } from 'react'
import Task from './Task'


const Tasks = () => {
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
    const res = await fetch('http://localhost:5000/addTask' , {method:'POST',
    header:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(task)
  })

    const data = res.json()

    setTasks([...tasks , data])
    
  }

  return (
    <div>
     {tasks.map((task)=>(<Task key={task.task_id} Task={task} onDelete={Delete}/>))}
    </div>
  )
}

export default Tasks
