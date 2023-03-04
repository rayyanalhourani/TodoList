import React, { useState } from 'react'
import Task from './Task'

const Tasks = () => {
  const tasks= [{
    id:1,
    name : "na",
    duration : "09:55",
  },{
    id:2,
    name: "task2",
    duration: "11:12",
  }]


  return (
    <div>
     {tasks.map((task)=>(<Task key={task.id} Task={task}/>))}
    </div>
  )
}

export default Tasks
