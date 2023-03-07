import { useState ,  useEffect } from 'react'
import Task from './Task'


const Tasks = ({tasks,Delete}) => {
 
  return (
    <div>
     {tasks.map((task)=>(<Task key={task.task_id} Task={task} onDelete={Delete}/>))}
    </div>
  )
}

export default Tasks
