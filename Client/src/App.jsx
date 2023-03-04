import { useState } from 'react'
import AddTaskForm from './components/AddTaskForm'
import Header from './components/Header'
import Tasks from './components/Tasks'
import './index.css'

function App() {

  const [AddTaskShow , SetAddTaskShow ] = useState(false)

  const ChangeTask=()=>{
    SetAddTaskShow(!AddTaskShow)
  }

  return (
    <div className="box">
      <Header ChangeTask={ChangeTask} AddTaskShow={AddTaskShow}/>

       {(AddTaskShow ? <AddTaskForm /> : '') }
       <Tasks />
      
    </div>
  )
}

export default App
