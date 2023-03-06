import React from 'react'
import Btn from './Btn'

const Task = ({Task , onDelete}) => {


  return (
    <div>
        <table className='Tasks'>
          <td className='name-box'> {Task.name}</td>
          <td  className='time-box'>{Task.duration}</td>
          <td><Btn text={"delete"} color="red" onClick={()=>onDelete(Task.task_id)}/></td>
        </table>
    </div>
  )
}

export default Task
