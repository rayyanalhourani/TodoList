import React from 'react'
import { useState ,  useEffect } from 'react'
const Register = () => {

  useEffect(()=>{
    
  })



  return (
    <div>
    <form action="localhost:5000/register" method="post" className='add-form'>

        <label htmlFor="FirstName"></label>FirstName<br />
        <input type="text" id='firstname' required/><br />

        <label htmlFor="LastName"></label>LastName<br />
        <input type="text" id='lastname'/><br />

        <label htmlFor="email"></label>email<br />
        <input type="email" id='email'/><br />

        <label htmlFor="dob"></label>date of birth<br />
        <input type="date" id='dob'/><br />

        <label htmlFor="password"></label>password<br />
        <input type="password"  id="password" required/><br />

        <input className="submit" type="submit" value="Register"/>
    </form>

    
    </div>
  )
}

export default Register
