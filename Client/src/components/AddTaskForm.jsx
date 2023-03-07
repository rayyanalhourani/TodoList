import React from 'react'
import '../index.css'


const AddTaskForm = ({addTask}) => {

  
  const SendToFun = () =>{
      let name = document.getElementById('name').value
      let duration = document.getElementById('duration').value
      document.getElementById('name').value=''
      document.getElementById('duration').value=''
      console.log('hi');
      const task = {
        'name':name,
        'duration':duration,
        'timeLeft':duration,
        'owner_id':1
      }
      console.log(task);
      addTask(task)
  }




  return (
    <div style={{borderBottom:"2px solid steelblue"}} className="add-form">
        <label htmlFor="name"></label>name<br />
        <input type="text" id='name' required/><br />
        <label htmlFor="duration"></label>duration<br />
        <input type="Timer" id='duration'  required placeholder="00:00"/><br />
        <input className="submit" type="submit" value="Add task" onClick={()=>{SendToFun()}}/><br /><br />
    </div>
    
  )
}

export default AddTaskForm
