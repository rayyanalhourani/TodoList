import { useState ,  useEffect } from 'react'
import AddTaskForm from './components/AddTaskForm'
import Header from './components/Header'
import Register from './components/Register'
import Tasks from './components/Tasks'
import './index.css'

function App() {

  const [AddTaskShow , SetAddTaskShow ] = useState(false)

  const ChangeTask=()=>{
    SetAddTaskShow(!AddTaskShow)
  }

  return (
    <div className="box">
       <Header /> 
      <Tasks />
      
      
    </div>
  )
}

export default App
