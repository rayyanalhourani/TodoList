import React from 'react'

const Btn = ({text ,color , onClick}) => {

  return (
      <button onClick={onClick} className='btn' style={{backgroundColor:color,fontWeight:'bolder'}}>{text}</button>
  )
}

export default Btn
