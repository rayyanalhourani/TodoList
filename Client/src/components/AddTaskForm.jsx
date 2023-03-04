import React from 'react'
import '../index.css'


const AddTaskForm = () => {
  return (
    <div style={{borderBottom:"2px solid steelblue"}}>
    <form action="" method="post" className='add-form'>
        <label htmlFor="name"></label>name<br />
        <input type="text" id='name' required/><br />
        <label htmlFor="duration"></label>duration<br />
        <input type="Timer" id='duration' name="gu"  required placeholder="00:00"/><br />
        <input className="submit" type="submit" value="Add task"/>
    </form>
    </div>
    
  )
}

export default AddTaskForm
