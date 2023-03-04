import React from 'react'
import Btn from './Btn'

const Task = ({Task}) => {
  return (
    <div>
        <table className='Tasks'>
          <td className='name-box'> {Task.name}</td>
          <td  className='time-box'>{Task.duration}</td>
          <td><Btn text={"delete"} color="red"/></td>
        </table>
    </div>
  )
}

export default Task
