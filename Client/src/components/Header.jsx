import React from 'react'
import Btn from './Btn'
import { useState } from 'react'
const Header = ({ChangeTask , AddTaskShow}) => {
      return (
    <div className='header'>
      <h2>Todo List</h2>
      <Btn TaskShow = {AddTaskShow} onClick={ChangeTask} color={(AddTaskShow ? 'red' : 'green')} text = {(AddTaskShow ? 'Close' : 'Add')}/>
    </div>
  )
}

export default Header
