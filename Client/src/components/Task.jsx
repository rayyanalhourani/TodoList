import React from 'react'
import Btn from './Btn'

const Task = ({Task , onDelete}) => {
  let duration = Task.duration
  let hours = parseInt(duration/60)
  let min = duration - (hours*60)


  return (
    <div>
        <table className='Tasks'>
          <td className='name-box'> {Task.name}</td>
          <td  className='time-box'>{hours}:{min}</td>
          <td><Btn text={"delete"} color="red" onClick={()=>onDelete(Task.task_id)}/></td>
        </table>
    </div>
  )
}

export default Task
